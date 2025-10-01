"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function TestSimpleMintPage() {
  const { account, signTransaction } = useWallet();
  const { toast } = useToast();
  const [isMinting, setIsMinting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimpleMint = async () => {
    if (!account || !signTransaction) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsMinting(true);
    setResult(null);

    try {
      const client = getAptosClient();
      const contractConfig = getContractConfig();
      
      console.log("Starting simple mint test...");
      console.log("Account:", account.address);
      console.log("Contract config:", contractConfig);

      // Build transaction - user pays the fee
      const transaction = await client.transaction.build.simple({
        sender: account.address.toString(),
        data: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
          functionArguments: [],
        },
        options: {
          maxGasAmount: 10_000,
        },
      });

      console.log("Transaction built:", transaction);

      // Sign transaction
      const signedTransaction = await signTransaction({
        transactionOrPayload: transaction,
      });

      // Submit transaction manually using the authenticator
      const committedTransaction = await client.transaction.submit.simple({
        transaction,
        senderAuthenticator: (signedTransaction as any).authenticator || signedTransaction,
      });

      console.log("Transaction submitted:", committedTransaction);

      // Wait for completion
      const executedTransaction = await client.waitForTransaction({
        transactionHash: committedTransaction.hash,
      });

      console.log("Transaction executed:", executedTransaction);

      setResult({
        success: true,
        hash: committedTransaction.hash,
        message: "SBT minted successfully!",
      });

      toast({
        title: "Success!",
        description: "SBT minted successfully",
      });

    } catch (error) {
      console.error("Mint error:", error);
      
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: "Mint failed",
      });

      toast({
        title: "Error",
        description: `Mint failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Simple Mint Test</h1>
        <p className="text-xl text-muted-foreground">
          Test SBT minting with minimal code
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Test Simple SBT Mint</CardTitle>
            <CardDescription>
              Test SBT minting without image upload
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Account Status:</div>
              <div className="text-sm">
                {account ? (
                  <span className="text-green-600">Connected: {account.address.toStringLong()}</span>
                ) : (
                  <span className="text-red-600">Not connected</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Sign Transaction Available:</div>
              <div className="text-sm">
                {signTransaction ? (
                  <span className="text-green-600">Yes</span>
                ) : (
                  <span className="text-red-600">No</span>
                )}
              </div>
            </div>

            <Button
              onClick={handleSimpleMint}
              disabled={!account || !signTransaction || isMinting}
              className="w-full"
            >
              {isMinting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : (
                "Test Simple Mint"
              )}
            </Button>

            {result && (
              <div className={`p-4 rounded-lg ${
                result.success 
                  ? 'bg-green-50 dark:bg-green-950' 
                  : 'bg-red-50 dark:bg-red-950'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {result.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    result.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {result.message}
                  </span>
                </div>
                
                <div className="text-xs space-y-1">
                  {result.success ? (
                    <div>
                      <div><strong>Transaction Hash:</strong> {result.hash}</div>
                    </div>
                  ) : (
                    <div>
                      <div><strong>Error:</strong> {result.error}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
