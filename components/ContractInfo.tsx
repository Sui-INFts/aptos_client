"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { Loader2, Settings, Users, Coins, Shield, Clock, AlertCircle } from "lucide-react";

interface ContractData {
  admin: string;
  pendingAdmin?: string;
  mintFeeCollector: string;
  mintFee: number;
  totalMinted: number;
}

export function ContractInfo() {
  const contractConfig = getContractConfig();

  const { data: contractInfo, isLoading, error } = useQuery<ContractData>({
    queryKey: ["contractInfo"],
    queryFn: async () => {
      const client = getAptosClient();
      
      try {
        // Get admin
        const admin = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_admin` as `${string}::${string}::${string}`,
            functionArguments: [],
          },
        });

        // Get pending admin
        const pendingAdmin = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_pending_admin` as `${string}::${string}::${string}`,
            functionArguments: [],
          },
        });

        // Get mint fee collector
        const mintFeeCollector = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_fee_collector` as `${string}::${string}::${string}`,
            functionArguments: [],
          },
        });

        // Get mint fee
        const mintFee = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_fee` as `${string}::${string}::${string}`,
            functionArguments: [],
          },
        });

        // Get total minted
        const totalMinted = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_total_minted` as `${string}::${string}::${string}`,
            functionArguments: [],
          },
        });

        return {
          admin: admin[0] as string,
          pendingAdmin: pendingAdmin[0] ? (pendingAdmin[0] as { vec?: string[] }).vec?.[0] : undefined,
          mintFeeCollector: mintFeeCollector[0] as string,
          mintFee: Number(mintFee[0]),
          totalMinted: Number(totalMinted[0]),
        };
      } catch (error) {
        console.error("Error fetching contract info:", error);
        throw error; // Re-throw to trigger error state
      }
    },
    retry: 1,
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  // Coming Soon state for errors
  if (error || !contractInfo) {
    return (
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            Contract Information
          </CardTitle>
          <CardDescription>
            Advanced contract statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Advanced contract statistics and analytics will be available soon. 
                We&apos;re working on bringing you detailed insights into the Credit Score SBT contract.
              </p>
            </div>
            <div className="pt-4 text-xs text-muted-foreground text-center">
              <div>Contract: {contractConfig.moduleAddress.slice(0, 8)}...{contractConfig.moduleAddress.slice(-8)}</div>
              <div>Module: {contractConfig.moduleName}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Contract Information
        </CardTitle>
        <CardDescription>
          Current state of the Credit Score SBT contract
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Admin</span>
            </div>
            <Badge variant="outline" className="font-mono text-xs">
              {contractInfo.admin?.slice(0, 8)}...{contractInfo.admin?.slice(-8)}
            </Badge>
          </div>

          {contractInfo.pendingAdmin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Pending Admin</span>
              </div>
              <Badge variant="secondary" className="font-mono text-xs">
                {contractInfo.pendingAdmin.slice(0, 8)}...{contractInfo.pendingAdmin.slice(-8)}
              </Badge>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              <span className="text-sm font-medium">Mint Fee</span>
            </div>
            <Badge variant="outline">
              {contractInfo.mintFee} APT
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Total Minted</span>
            </div>
            <Badge variant="outline">
              {contractInfo.totalMinted} SBTs
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              <span className="text-sm font-medium">Fee Collector</span>
            </div>
            <Badge variant="outline" className="font-mono text-xs">
              {contractInfo.mintFeeCollector?.slice(0, 8)}...{contractInfo.mintFeeCollector?.slice(-8)}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-xs text-muted-foreground">
            <div>Contract: {contractConfig.moduleAddress.slice(0, 8)}...{contractConfig.moduleAddress.slice(-8)}</div>
            <div>Module: {contractConfig.moduleName}</div>
            <div>Network: {contractConfig.moduleAddress.includes('43e8211c2cfad783147c6f8ce36a4b561f88d9bfaf37f834e1d1c75e563e2cfb') ? 'Testnet' : 'Unknown'}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
