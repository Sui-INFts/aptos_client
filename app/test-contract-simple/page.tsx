"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

interface TestResult {
  success: boolean;
  message: string;
  accountInfo?: unknown;
  moduleInfo?: unknown;
  admin?: unknown;
  error?: string;
}

export default function TestContractSimplePage() {
  const { account } = useWallet();
  const { toast } = useToast();
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<TestResult | null>(null);

  const testContractExists = async () => {
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
      
      console.log("Testing contract at:", contractConfig.moduleAddress);
      console.log("Module name:", contractConfig.moduleName);

      // Try to get account info first
      const accountInfo = await client.getAccountInfo({
        accountAddress: contractConfig.moduleAddress,
      });
      
      console.log("Account info:", accountInfo);

      // Try to get module info
      const moduleInfo = await client.getAccountModules({
        accountAddress: contractConfig.moduleAddress,
      });
      
      console.log("Module info:", moduleInfo);

      // Try to call a view function
      const admin = await client.view({
        payload: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_admin`,
          functionArguments: [],
        },
      });

      console.log("Admin result:", admin);

      setTestResults({
        success: true,
        accountInfo,
        moduleInfo,
        admin,
        message: "Contract exists and is accessible",
      });

      toast({
        title: "Success!",
        description: "Contract test passed",
      });

    } catch (error) {
      console.error("Contract test error:", error);
      
      setTestResults({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: "Contract test failed",
      });

      toast({
        title: "Error",
        description: `Contract test failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Simple Contract Test</h1>
        <p className="text-xl text-muted-foreground">
          Test if the contract exists and is accessible
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Test Contract Existence</CardTitle>
            <CardDescription>
              Test if the contract exists at the specified address
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
              onClick={testContractExists}
              disabled={!account || isTesting}
              className="w-full"
            >
              {isTesting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                "Test Contract Existence"
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
                      <div><strong>Account Info:</strong> {JSON.stringify(testResults.accountInfo, null, 2)}</div>
                      <div><strong>Module Info:</strong> {JSON.stringify(testResults.moduleInfo, null, 2)}</div>
                      <div><strong>Admin:</strong> {JSON.stringify(testResults.admin, null, 2)}</div>
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
