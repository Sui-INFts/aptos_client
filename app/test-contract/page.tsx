"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { useToast } from "@/components/ui/use-toast";

interface ContractInfo {
  admin: unknown;
  mintFee: number;
  totalMinted: number;
}

export default function TestContractPage() {
  const { account } = useWallet();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [contractInfo, setContractInfo] = useState<ContractInfo | null>(null);

  const contractConfig = getContractConfig();

  const testContractConnection = async () => {
    if (!account) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const client = getAptosClient();
      
      // Test basic contract info
      const admin = await client.view({
        payload: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_admin` as `${string}::${string}::${string}`,
          functionArguments: [],
        },
      });

      const mintFee = await client.view({
        payload: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_fee` as `${string}::${string}::${string}`,
          functionArguments: [],
        },
      });

      const totalMinted = await client.view({
        payload: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_total_minted` as `${string}::${string}::${string}`,
          functionArguments: [],
        },
      });

      setContractInfo({
        admin: admin[0],
        mintFee: Number(mintFee[0]),
        totalMinted: Number(totalMinted[0]),
      });

      toast({
        title: "Success!",
        description: "Contract connection successful",
      });
    } catch (error) {
      console.error("Error testing contract:", error);
      toast({
        title: "Error",
        description: "Failed to connect to contract",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contract Test Page</h1>
        <p className="text-xl text-muted-foreground">
          Test the connection to your deployed aptos_sm contract
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contract Configuration</CardTitle>
            <CardDescription>
              Current contract settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Module Address:</div>
              <div className="text-xs font-mono bg-muted p-2 rounded">
                {contractConfig.moduleAddress}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Module Name:</div>
              <div className="text-sm">{contractConfig.moduleName}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Max Credit Score:</div>
              <div className="text-sm">{Number(contractConfig.maxCreditScore)}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Default Mint Fee:</div>
              <div className="text-sm">{Number(contractConfig.defaultMintFee)} APT</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Contract Connection</CardTitle>
            <CardDescription>
              Test if the contract is accessible
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={testContractConnection}
              disabled={isLoading || !account}
              className="w-full"
            >
              {isLoading ? "Testing..." : "Test Contract"}
            </Button>

            {contractInfo && (
              <div className="space-y-2 p-4 bg-muted rounded">
                <div className="text-sm font-medium">Contract Info:</div>
                <div className="text-xs space-y-1">
                  <div>Admin: {String(contractInfo.admin)}</div>
                  <div>Mint Fee: {contractInfo.mintFee} APT</div>
                  <div>Total Minted: {contractInfo.totalMinted}</div>
                </div>
              </div>
            )}

            {!account && (
              <div className="text-sm text-muted-foreground">
                Please connect your wallet to test the contract
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
