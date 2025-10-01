"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useWalletClient } from "@aptos-labs/wallet-adapter-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { getAptosClient, getContractConfig, formatFunctionCall, CreditScoreData } from "@/lib/aptos-utils";
import { Loader2, Coins, Shield, Clock } from "lucide-react";

export function CreditScoreMint() {
  const { account, signTransaction } = useWallet();
  const { client: walletClient } = useWalletClient();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isMinting, setIsMinting] = useState(false);

  const contractConfig = getContractConfig();

  // Fetch user's credit score data
  const { data: creditScoreData, isLoading } = useQuery<CreditScoreData>({
    queryKey: ["creditScore", account?.address],
    queryFn: async () => {
      if (!account) return null;
      
      const client = getAptosClient();
      
      try {
        // Check if user has minted
        const hasMinted = await client.view({
          payload: {
            function: formatFunctionCall("has_minted", [account.address]).function,
            functionArguments: [account.address],
          },
        });

        if (!hasMinted[0]) {
          return {
            score: 0,
            lastUpdated: 0,
            mintTimestamp: 0,
            hasMinted: false,
          };
        }

        // Get user's SBT object
        const userSbt = await client.view({
          payload: {
            function: formatFunctionCall("get_user_sbt", [account.address]).function,
            functionArguments: [account.address],
          },
        });

        if (userSbt[0]) {
          const tokenObj = userSbt[0];
          
          // Get score
          const score = await client.view({
            payload: {
              function: formatFunctionCall("get_score", [tokenObj]).function,
              functionArguments: [tokenObj],
            },
          });

          // Get last updated
          const lastUpdated = await client.view({
            payload: {
              function: formatFunctionCall("get_last_updated", [tokenObj]).function,
              functionArguments: [tokenObj],
            },
          });

          // Get mint timestamp
          const mintTimestamp = await client.view({
            payload: {
              function: formatFunctionCall("get_mint_timestamp", [tokenObj]).function,
              functionArguments: [tokenObj],
            },
          });

          return {
            score: Number(score[0]),
            lastUpdated: Number(lastUpdated[0]),
            mintTimestamp: Number(mintTimestamp[0]),
            hasMinted: true,
            tokenObject: tokenObj,
          };
        }

        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      } catch (error) {
        console.error("Error fetching credit score:", error);
        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      }
    },
    enabled: !!account,
  });

  const handleMintSBT = async () => {
    if (!account || !walletClient) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsMinting(true);

    try {
      const transaction = await getAptosClient().transaction.build.simple({
        sender: account.address,
        data: formatFunctionCall("mint_sbt"),
        options: {
          maxGasAmount: 10_000,
        },
      });

      const committedTransaction = await walletClient.signAndSubmitTransaction({
        transaction,
      });

      await getAptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });

      toast({
        title: "Success!",
        description: "Credit Score SBT minted successfully",
      });

      // Invalidate and refetch data
      queryClient.invalidateQueries({ queryKey: ["creditScore", account.address] });
    } catch (error) {
      console.error("Error minting SBT:", error);
      toast({
        title: "Error",
        description: "Failed to mint Credit Score SBT",
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Credit Score SBT
        </CardTitle>
        <CardDescription>
          Mint your DeFi Credit Score Soulbound Token
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {creditScoreData?.hasMinted ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Your Credit Score</span>
              <Badge variant="secondary" className="text-lg font-bold">
                {creditScoreData.score}/1000
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated</span>
              </div>
              <span>
                {new Date(creditScoreData.lastUpdated * 1000).toLocaleDateString()}
              </span>
              
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4" />
                <span>Minted</span>
              </div>
              <span>
                {new Date(creditScoreData.mintTimestamp * 1000).toLocaleDateString()}
              </span>
            </div>

            {creditScoreData.tokenObject && (
              <div className="text-xs text-muted-foreground">
                Token: {creditScoreData.tokenObject.slice(0, 20)}...
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                You haven't minted your Credit Score SBT yet
              </p>
              <p className="text-xs text-muted-foreground">
                Mint fee: {contractConfig.defaultMintFee} APT
              </p>
            </div>
            
            <Button 
              onClick={handleMintSBT} 
              disabled={isMinting}
              className="w-full"
            >
              {isMinting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : (
                "Mint Credit Score SBT"
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
