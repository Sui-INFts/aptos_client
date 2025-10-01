"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function TestTransactionPage() {
  const { account, signTransaction } = useWallet();
  const { toast } = useToast();
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);

  const testTransactionBuilding = async () => {
    if (!account) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsTesting(true);
    setTestResults(null);

    try {
      const client = getAptosClient();
      const contractConfig = getContractConfig();
      
      console.log("Contract config:", contractConfig);
      console.log("Account:", account.address);

      // Test 1: First try to call a view function to verify contract exists
      console.log("Testing contract connectivity...");
      
      let contractAccessible = false;
      try {
        const admin = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_admin`,
            functionArguments: [],
          },
        });
        console.log("Contract is accessible, admin:", admin);
        contractAccessible = true;
      } catch (viewError) {
        console.error("View function failed:", viewError);
        throw new Error(`Contract not accessible: ${viewError instanceof Error ? viewError.message : 'Unknown error'}`);
      }

      // Test 2: Build transaction using the same approach as the working template
      console.log("Building transaction with:", {
        sender: account.address,
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
        functionArguments: [],
      });

      // Test 3: Generate transaction - user pays the fee
      const transaction = await client.transaction.build.simple({
        sender: account.address,
        data: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
          functionArguments: [],
        },
        options: {
          maxGasAmount: 10_000,
        },
      });

      console.log("Generated transaction:", transaction);

      if (!transaction) {
        throw new Error("Failed to generate transaction");
      }

      // Test 4: Check transaction structure
      const hasRawTransaction = 'rawTransaction' in transaction;
      const hasBcsToBytes = typeof transaction.bcsToBytes === 'function';

      setTestResults({
        success: true,
        contractAccessible,
        transaction: {
          hasRawTransaction,
          hasBcsToBytes,
          type: typeof transaction,
          keys: Object.keys(transaction),
        },
        message: "Transaction built successfully",
      });

      toast({
        title: "Success!",
        description: "Transaction building test passed",
      });

    } catch (error) {
      console.error("Transaction building error:", error);
      
      setTestResults({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: "Transaction building failed",
      });

      toast({
        title: "Error",
        description: `Transaction building failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Transaction Building Test</h1>
        <p className="text-xl text-muted-foreground">
          Test transaction building for SBT minting
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Test Transaction Building</CardTitle>
            <CardDescription>
              Test if transactions can be built correctly for SBT minting
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
              <div className="text-sm font-medium">Contract Config:</div>
              <div className="text-xs font-mono bg-muted p-2 rounded">
                <div>Address: {getContractConfig().moduleAddress}</div>
                <div>Module: {getContractConfig().moduleName}</div>
              </div>
            </div>

            <Button
              onClick={testTransactionBuilding}
              disabled={!account || isTesting}
              className="w-full"
            >
              {isTesting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                "Test Transaction Building"
              )}
            </Button>

            {testResults && (
              <div className={`p-4 rounded-lg ${
                testResults.success 
                  ? 'bg-green-50 dark:bg-green-950' 
                  : 'bg-red-50 dark:bg-red-950'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {testResults.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    testResults.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {testResults.message}
                  </span>
                </div>
                
                <div className="text-xs space-y-1">
                  {testResults.success ? (
                    <div>
                      <div><strong>Contract Accessible:</strong> {testResults.contractAccessible ? 'Yes' : 'No'}</div>
                      <div><strong>Transaction Type:</strong> {testResults.transaction.type}</div>
                      <div><strong>Has rawTransaction:</strong> {testResults.transaction.hasRawTransaction ? 'Yes' : 'No'}</div>
                      <div><strong>Has bcsToBytes:</strong> {testResults.transaction.hasBcsToBytes ? 'Yes' : 'No'}</div>
                      <div><strong>Keys:</strong> {testResults.transaction.keys.join(', ')}</div>
                    </div>
                  ) : (
                    <div>
                      <div><strong>Error:</strong> {testResults.error}</div>
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
