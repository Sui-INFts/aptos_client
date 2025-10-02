"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAptosClient, getContractConfig } from "@/lib/aptos-utils";
import { Loader2, Shield, Clock, TrendingUp, Calendar, Award } from "lucide-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";

interface SBTDetails {
  tokenObject: string;
  score: number;
  lastUpdated: number;
  mintTimestamp: number;
  hasMinted: boolean;
}

export default function MySBTsPage() {
  const { account } = useWallet();
  const contractConfig = getContractConfig();

  const { data: sbtData, isLoading, error } = useQuery({
    queryKey: ["userSBT", account?.address],
    queryFn: async (): Promise<SBTDetails | null> => {
      if (!account) return null;

      const client = getAptosClient();

      try {
        // Convert account address to proper format
        const userAddress = AccountAddress.from(account.address);
        const addressString = userAddress.toString();
        
        console.log("Account address object:", account.address);
        console.log("Converted address string:", addressString);
        
        // Check if user has minted
        const hasMinted = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
            functionArguments: [addressString],
          },
        });

        console.log("Has minted result:", hasMinted);

        if (!hasMinted[0]) {
          return {
            score: 0,
            lastUpdated: 0,
            mintTimestamp: 0,
            hasMinted: false,
            tokenObject: "",
          };
        }

        // Get user's SBT object
        const userSbt = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
            functionArguments: [addressString],
          },
        });

        console.log("User SBT result:", userSbt);
        console.log("User SBT type:", typeof userSbt);
        console.log("User SBT [0]:", userSbt[0]);

        // Handle Option<Object<Token>> - the result is wrapped in an Option
        // If the option has a value, it will be in the 'vec' field
        const optionValue = userSbt[0];
        let tokenObj = null;
        
        if (optionValue && typeof optionValue === 'object') {
          // Check if it's an Option with a vec field
          if ('vec' in optionValue && Array.isArray(optionValue.vec) && optionValue.vec.length > 0) {
            tokenObj = optionValue.vec[0];
          } else {
            // Otherwise, it might be the token object directly
            tokenObj = optionValue;
          }
        }

        console.log("Extracted token object:", tokenObj);

        if (tokenObj) {
          // Extract the token address from the object
          // tokenObj has format {inner: '0x...'}
          let tokenAddress: string;
          if (typeof tokenObj === 'object' && tokenObj !== null && 'inner' in tokenObj) {
            tokenAddress = (tokenObj as { inner: string }).inner;
          } else if (typeof tokenObj === 'string') {
            tokenAddress = tokenObj;
          } else {
            throw new Error("Invalid token object format");
          }
          
          console.log("Token address:", tokenAddress);

          const score = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_score`,
              functionArguments: [tokenAddress],
            },
          });

          const lastUpdated = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_last_updated`,
              functionArguments: [tokenAddress],
            },
          });

          const mintTimestamp = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_timestamp`,
              functionArguments: [tokenAddress],
            },
          });

          return {
            score: Number(score[0]),
            lastUpdated: Number(lastUpdated[0]),
            mintTimestamp: Number(mintTimestamp[0]),
            hasMinted: true,
            tokenObject: tokenAddress,
          };
        }

        return null;
      } catch (error) {
        console.error("Error fetching SBT data:", error);
        console.error("Error details:", {
          message: error instanceof Error ? error.message : "Unknown error",
          stack: error instanceof Error ? error.stack : undefined,
        });
        throw error; // Re-throw to show in UI
      }
    },
    enabled: !!account,
    retry: false, // Don't retry on error to avoid spamming
  });

  const formatDate = (timestamp: number) => {
    if (timestamp === 0) return "N/A";
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return "text-green-600 dark:text-green-400";
    if (score >= 600) return "text-blue-600 dark:text-blue-400";
    if (score >= 400) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 800) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    if (score >= 600) return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    if (score >= 400) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  };

  const getScoreRating = (score: number) => {
    if (score >= 800) return "Excellent";
    if (score >= 600) return "Good";
    if (score >= 400) return "Fair";
    return "Poor";
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">My Credit Score SBTs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          View your DeFi Credit Score Soulbound Tokens and track your credit history
        </p>
      </div>

      {!account ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Shield className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
            <p className="text-muted-foreground text-center">
              Please connect your wallet to view your Credit Score SBTs
            </p>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading your SBTs...</p>
          </CardContent>
        </Card>
      ) : error ? (
        <Card className="max-w-2xl mx-auto border-destructive">
          <CardContent className="flex flex-col items-center justify-center p-12 space-y-4">
            <p className="text-destructive text-lg font-semibold">Error loading SBTs</p>
            <p className="text-sm text-muted-foreground">{error instanceof Error ? error.message : "Unknown error"}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </CardContent>
        </Card>
      ) : !sbtData?.hasMinted ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Shield className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No SBTs Found</h3>
            <p className="text-muted-foreground text-center mb-6">
              You haven&apos;t minted any Credit Score SBTs yet
            </p>
            <a
              href="/sbt-mint"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Mint Your First SBT
            </a>
          </CardContent>
        </Card>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-1">
            {/* Main SBT Card */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-chart-2/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Credit Score SBT
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Your DeFi Credit Score Soulbound Token
                    </CardDescription>
                  </div>
                  <Badge className={`${getScoreBadgeColor(sbtData.score)} text-lg px-4 py-2`}>
                    {getScoreRating(sbtData.score)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Score Display */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-muted rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Credit Score</span>
                      </div>
                      <div className={`text-5xl font-bold ${getScoreColor(sbtData.score)}`}>
                        {sbtData.score}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        out of {Number(contractConfig.maxCreditScore)}
                      </div>
                      <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            sbtData.score >= 800
                              ? "bg-green-600"
                              : sbtData.score >= 600
                              ? "bg-blue-600"
                              : sbtData.score >= 400
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                          style={{ width: `${(sbtData.score / Number(contractConfig.maxCreditScore)) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Mint Date</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(sbtData.mintTimestamp)}
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Last Updated</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(sbtData.lastUpdated)}
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Token Type</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Soulbound Token (Non-Transferable)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Token Object Address */}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Token Object Address</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground break-all">
                    {sbtData.tokenObject}
                  </p>
                </div>

                {/* Score Scale Reference */}
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-chart-2/5 rounded-lg border border-primary/20">
                  <h4 className="text-sm font-semibold mb-3">Credit Score Scale</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">800-1000</div>
                      <div className="text-xs text-muted-foreground">Excellent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">600-799</div>
                      <div className="text-xs text-muted-foreground">Good</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">400-599</div>
                      <div className="text-xs text-muted-foreground">Fair</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600 dark:text-red-400">0-399</div>
                      <div className="text-xs text-muted-foreground">Poor</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Actions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Your Credit Score SBT is a soulbound token and cannot be transferred.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={`https://explorer.aptoslabs.com/account/${sbtData.tokenObject}?network=testnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                View on Explorer →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

