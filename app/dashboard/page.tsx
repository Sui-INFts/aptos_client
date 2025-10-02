"use client";
import React, {useState, useCallback, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { HeroHeader } from "@/components/header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Wallet, Clock, Activity, Shield, AlertCircle, CheckCircle, Zap, RefreshCw, Image, Coins, Sparkles, ArrowRightLeft } from 'lucide-react';
import { CreditScoreRing } from "./components/creditScoreRing";
import { MetricCard } from "./components/metricCard";
import { CreditFactorItem } from "./components/creditFactorItem";
import { toast } from "@/components/ui/use-toast";
import { aptosClient } from "@/app/utils/aptosClient";
import { useQuery } from "@tanstack/react-query";
import { getAptosClient, getContractConfig, CreditScoreDataOrNull } from "@/lib/aptos-utils";
import { formatAddressForContract } from "@/lib/address-utils";
import { AIInsightsPanel } from "@/components/AIInsightsPanel";
import { DeFiActionChat } from "@/components/DeFiActionChat";
import { SimpleSwapWidget } from "@/components/SimpleSwapWidget";
import { SBTMint } from "@/components/SBTMint";

type IconComponent = React.ComponentType<{ className?: string; }>;

interface Token {
  coinType: string;
  symbol: string;
  name: string;
  balance: number;
  balanceFormatted: string;
  usdValue: number;
  usdFormatted: string;
  icon: string;
  isNative?: boolean;
  isStaked?: boolean;
}

interface NFT {
  objectId: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  collection?: string;
}

interface CreditFactor {
  factor: string;
  score: number;
  impact: 'positive' | 'negative' | 'neutral';
  icon: IconComponent;
}

interface OnChainData {
  overallScore: number;
  addressAge: number;
  totalBalance: string;
  transactions: number;
  liquidations: number;
  yieldGenerated: string;
  repaymentHistory: string;
  gasSpent: string;
  nftCount: number;
  activeProtocols: number;
}

const Dashboard: React.FC = () => {
  const { connected, account } = useWallet();
  const [activeTab, setActiveTab] = useState<'On Chain' | 'Off Chain'>('On Chain');
  const [activeHoldingsTab, setActiveHoldingsTab] = useState<'Tokens' | 'NFTs'>('Tokens');
  const [isLoading, setIsLoading] = useState(false);
  const [aptPrice, setAptPrice] = useState<number>(0);
  const [showAIInsights, setShowAIInsights] = useState(false);
  const [showDeFiActions, setShowDeFiActions] = useState(false);
  const [showKanaSwap, setShowKanaSwap] = useState(false);
  
  // Real on-chain data state
  const [onChainData, setOnChainData] = useState<OnChainData>({
    overallScore: 0,
    addressAge: 0,
    totalBalance: '$0',
    transactions: 0,
    liquidations: 0,
    yieldGenerated: '$0',
    repaymentHistory: '0%',
    gasSpent: '0',
    nftCount: 0,
    activeProtocols: 1
  });

  const [tokens, setTokens] = useState<Token[]>([]);
  const [nfts, setNFTs] = useState<NFT[]>([]);

  // Check if user has minted an SBT
  const { data: creditScoreData, isLoading: isSBTLoading, refetch: refetchSBTStatus } = useQuery<CreditScoreDataOrNull>({
    queryKey: ["creditScore", account?.address],
    queryFn: async () => {
      if (!account) return null;
      
      const client = getAptosClient();
      const contractConfig = getContractConfig();
      
      console.log("🔍 Checking SBT status for:", {
        accountAddress: account.address.toString(),
        contractAddress: contractConfig.moduleAddress,
        moduleName: contractConfig.moduleName
      });
      
      // Check if the user is the contract deployer/admin
      const isContractDeployer = account.address.toString().toLowerCase().replace('0x', '') === contractConfig.moduleAddress.toLowerCase();
      if (isContractDeployer) {
        console.log("⚠️ User is the contract deployer/admin - checking admin SBT status");
      }
      
      try {
        // Use the address utility to safely format the address
        const addressString = formatAddressForContract(account.address);
        console.log("📡 Calling has_minted function with address:", addressString);
        
        const hasMinted = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
            functionArguments: [addressString],
          },
        });

        console.log("📡 has_minted response:", hasMinted);
        console.log("📡 has_minted[0] value:", hasMinted[0], "type:", typeof hasMinted[0]);

        // Check if the response indicates the user has minted
        const hasMintedValue = hasMinted[0];
        console.log("📡 has_minted value analysis:", {
          value: hasMintedValue,
          type: typeof hasMintedValue,
          isTrue: hasMintedValue === true,
          isTruthy: !!hasMintedValue,
          isOne: hasMintedValue === 1,
          isString: hasMintedValue === "true"
        });
        
        if (!hasMintedValue || hasMintedValue === false || hasMintedValue === 0) {
          console.log("❌ User has not minted SBT");
          return {
            score: 0,
            lastUpdated: 0,
            mintTimestamp: 0,
            hasMinted: false,
          };
        }

        console.log("✅ User has minted SBT, fetching details...");

        // Get user's SBT object
        const userSbt = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
            functionArguments: [addressString],
          },
        });

        console.log("📡 get_user_sbt response:", userSbt);

        let tokenObj = null;
        const optionValue = userSbt[0];
        if (optionValue && typeof optionValue === 'object') {
          if ('vec' in optionValue && Array.isArray(optionValue.vec) && optionValue.vec.length > 0) {
            tokenObj = optionValue.vec[0];
          } else {
            tokenObj = optionValue;
          }
        }
        
        if (tokenObj) {
          const tokenObjString = String(tokenObj);
          console.log("🎯 Token object found:", tokenObjString);

          const score = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_score`,
              functionArguments: [tokenObjString],
            },
          });

          const lastUpdated = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_last_updated`,
              functionArguments: [tokenObjString],
            },
          });

          const mintTimestamp = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_timestamp`,
              functionArguments: [tokenObjString],
            },
          });

          const result = {
            score: Number(score[0]),
            lastUpdated: Number(lastUpdated[0]),
            mintTimestamp: Number(mintTimestamp[0]),
            hasMinted: true,
            tokenObject: tokenObjString,
          };

          console.log("✅ SBT data retrieved:", result);
          return result;
        }

        console.log("⚠️ Token object not found in response");
        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      } catch (error) {
        console.error("❌ Error fetching credit score data:", error);
        return null;
      }
    },
    enabled: !!account,
    retry: false,
    refetchOnWindowFocus: true,
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  const hasMintedSBT = creditScoreData?.hasMinted || false;
  
  // Special case: If user is the contract deployer/admin, they should have access
  const isContractDeployer = account && account.address.toString().toLowerCase().replace('0x', '') === getContractConfig().moduleAddress.toLowerCase();
  const finalHasMintedSBT = hasMintedSBT || isContractDeployer;
  
  // Debug logging
  console.log("Dashboard SBT Status:", {
    hasMintedSBT,
    isContractDeployer,
    finalHasMintedSBT,
    isSBTLoading,
    creditScoreData,
    accountAddress: account?.address.toString()
  });

  // Calculate address age based on first transaction with better error handling
  const calculateAddressAge = useCallback(async (address: string): Promise<number> => {
    try {
      const client = aptosClient();
      const transactions = await client.getAccountTransactions({
        accountAddress: address,
        options: {
          limit: 1
        }
      });

      if (transactions && transactions.length > 0 && 'timestamp' in transactions[0]) {
        const firstTxTime = new Date((transactions[0] as { timestamp: string }).timestamp).getTime();
        const currentTime = Date.now();
        const ageInDays = Math.floor((currentTime - firstTxTime) / (1000 * 60 * 60 * 24));
        return Math.max(ageInDays, 1);
      }
      
      return 1;
    } catch (error) {
      console.error("Error calculating address age:", error);
      return 1;
    }
  }, []);

  // Calculate credit score based on real metrics
  const calculateCreditScore = (metrics: {
    addressAge: number;
    transactionCount: number;
    balance: number;
    gasSpent: number;
    nftCount: number;
    liquidations: number;
  }): number => {
    let score = 0;

    score += Math.min(metrics.addressAge / 365 * 25, 25);
    score += Math.min(metrics.transactionCount / 100 * 20, 20);
    score += Math.min(metrics.balance / 1000 * 20, 20);

    if (metrics.transactionCount > 50) score += 15;
    else if (metrics.transactionCount > 20) score += 10;
    else if (metrics.transactionCount > 5) score += 5;

    score += Math.min(metrics.nftCount / 10 * 10, 10);

    if (metrics.liquidations === 0) score += 10;

    return Math.min(Math.round(score), 100);
  };

  // Fetch APT price
  const fetchAptPrice = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=aptos&vs_currencies=usd'
      );
      const data = await response.json();
      if (data && data.aptos && data.aptos.usd) {
        setAptPrice(data.aptos.usd);
      }
    } catch (error) {
      console.error("Error fetching APT price:", error);
    }
  }, []);

  // Fetch user's complete portfolio balance (APT tokens)
  const fetchCompleteBalance = useCallback(async () => {
    if (!account?.address) return { totalUSD: 0, tokenBalances: [] };
    
    try {
      const client = aptosClient();
      const resources = await client.getAccountResources({
        accountAddress: account.address,
      });

      let totalUSD = 0;
      const tokenBalances: Token[] = [];

      // Process APT balance
      const aptResource = resources.find(r => r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>");
      if (aptResource) {
        const balance = parseInt((aptResource.data as { coin: { value: string } }).coin.value);
        const aptAmount = balance / Math.pow(10, 8); // APT has 8 decimals
        const aptValue = aptAmount * aptPrice;

        if (aptAmount > 0) {
          tokenBalances.push({
            coinType: "0x1::aptos_coin::AptosCoin",
            symbol: "APT",
            name: "Aptos",
            balance: aptAmount,
            balanceFormatted: `${aptAmount.toLocaleString()}`,
            usdValue: aptValue,
            usdFormatted: `$${aptValue.toLocaleString()}`,
            icon: "A",
            isNative: true
          });

          totalUSD += aptValue;
        }
      }

      // Process other coin types
      const coinResources = resources.filter(r => 
        r.type.includes("0x1::coin::CoinStore") && 
        !r.type.includes("0x1::aptos_coin::AptosCoin")
      );

      for (const resource of coinResources) {
        try {
          const balance = parseInt((resource.data as { coin: { value: string } }).coin.value);
          const coinType = resource.type.match(/CoinStore<(.+)>/)?.[1];
          
          if (coinType && balance > 0) {
            const decimals = 8; // Most Aptos tokens use 8 decimals
            const amount = balance / Math.pow(10, decimals);
            
            // Extract symbol from coin type
            const parts = coinType.split("::");
            const symbol = parts[parts.length - 1] || "UNKNOWN";
            
            tokenBalances.push({
              coinType,
              symbol,
              name: symbol,
              balance: amount,
              balanceFormatted: `${amount.toLocaleString()}`,
              usdValue: amount * 0.1, // Placeholder USD value
              usdFormatted: `$${(amount * 0.1).toLocaleString()}`,
              icon: symbol.charAt(0),
              isNative: false
            });

            totalUSD += amount * 0.1;
          }
        } catch (error) {
          console.warn('Error processing coin resource:', resource.type, error);
        }
      }

      return {
        totalUSD,
        tokenBalances: tokenBalances.sort((a, b) => b.usdValue - a.usdValue),
      };

    } catch (error) {
      console.error("Error fetching complete balance:", error);
      return { totalUSD: 0, tokenBalances: [] };
    }
  }, [account?.address, aptPrice]);

  // Fetch NFTs (placeholder - Aptos NFT structure may differ)
  const fetchNFTs = useCallback(async (): Promise<NFT[]> => {
    if (!account?.address) return [];
    
    try {
      // This is a placeholder implementation
      // Aptos NFT structure and APIs may differ from Sui
      console.log("NFT fetching not yet implemented for Aptos");
      return [];
    } catch (error) {
      console.error("Error fetching NFTs:", error);
      return [];
    }
  }, [account?.address]);

  // Fetch all dashboard data
  const fetchDashboardData = useCallback(async () => {
    if (!account?.address) return;
    
    setIsLoading(true);
    try {
      // Fetch portfolio data and NFTs in parallel
      const [portfolioData, nftData] = await Promise.all([
        fetchCompleteBalance(),
        fetchNFTs()
      ]);

      const totalBalanceUSD = portfolioData.totalUSD;

      // Fetch transactions
      const client = aptosClient();
      const transactions = await client.getAccountTransactions({
        accountAddress: account.address,
        options: {
          limit: 50
        }
      });

      // Calculate gas spent (simplified)
      const totalGasSpent = transactions.reduce((total, txn) => {
        try {
          const gasUsed = ('gas_used' in txn ? (txn as { gas_used: string }).gas_used : "0");
          return total + parseInt(gasUsed);
        } catch (error) {
          console.warn('Error calculating gas for transaction:', txn.hash, error);
          return total;
        }
      }, 0);

      // Calculate address age
      const addressAge = await calculateAddressAge(account.address.toStringLong());

      // Calculate credit score
      const creditScore = calculateCreditScore({
        addressAge,
        transactionCount: transactions.length,
        balance: totalBalanceUSD,
        gasSpent: totalGasSpent / Math.pow(10, 8),
        nftCount: nftData.length,
        liquidations: 0
      });

      // Update state
      setOnChainData({
        overallScore: creditScore,
        addressAge,
        totalBalance: `$${totalBalanceUSD.toLocaleString()}`,
        transactions: transactions.length,
        liquidations: 0,
        yieldGenerated: '$0',
        repaymentHistory: transactions.length > 0 ? '100%' : '0%',
        gasSpent: (totalGasSpent / Math.pow(10, 8)).toFixed(4),
        nftCount: nftData.length,
        activeProtocols: 1
      });

      setTokens(portfolioData.tokenBalances);
      setNFTs(nftData);

    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch dashboard data",
      });
    } finally {
      setIsLoading(false);
    }
  }, [account?.address, aptPrice, calculateAddressAge, fetchCompleteBalance, fetchNFTs]);

  // Calculate dynamic credit factors based on real data
  const getDynamicCreditFactors = (): CreditFactor[] => {
    const transactionScore = Math.min((onChainData.transactions / 100) * 100, 100);
    const balanceScore = Math.min((parseFloat(onChainData.totalBalance.replace(/[$,]/g, '')) / 1000) * 100, 100);
    const ageScore = Math.min((onChainData.addressAge / 365) * 100, 100);
    
    return [
      { 
        factor: 'Payment History', 
        score: onChainData.transactions > 0 ? 100 : 0, 
        impact: 'positive', 
        icon: CheckCircle 
      },
      { 
        factor: 'Address Age', 
        score: Math.round(ageScore), 
        impact: ageScore > 50 ? 'positive' : 'neutral', 
        icon: Clock 
      },
      { 
        factor: 'Transaction Volume', 
        score: Math.round(transactionScore), 
        impact: transactionScore > 60 ? 'positive' : 'neutral', 
        icon: Activity 
      },
      { 
        factor: 'Liquidation Risk', 
        score: 100,
        impact: 'positive', 
        icon: Shield 
      },
      { 
        factor: 'Portfolio Balance', 
        score: Math.round(balanceScore), 
        impact: balanceScore > 50 ? 'positive' : 'neutral', 
        icon: Wallet 
      }
    ];
  };

  // Effects
  useEffect(() => {
    fetchAptPrice();
    const interval = setInterval(fetchAptPrice, 60000);
    return () => clearInterval(interval);
  }, [fetchAptPrice]);

  useEffect(() => {
    if (account?.address && aptPrice > 0) {
      fetchDashboardData();
      const interval = setInterval(fetchDashboardData, 30000);
      return () => clearInterval(interval);
    }
  }, [account?.address, aptPrice, fetchDashboardData]);

  const creditFactors = getDynamicCreditFactors();
  const tabOptions: ('On Chain' | 'Off Chain')[] = ['On Chain', 'Off Chain'];

  // Calculate trends
  const getBalanceTrend = () => {
    return parseFloat(onChainData.totalBalance.replace(/[$,]/g, '')) > 1000 ? 'up' : 'neutral';
  };

  const getTransactionTrend = () => {
    return onChainData.transactions > 50 ? 'up' : 'neutral';
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    if (parent) {
      target.style.display = 'none';
      const fallbackDiv = parent.querySelector('.fallback-image');
      if (fallbackDiv) {
        (fallbackDiv as HTMLElement).style.display = 'flex';
      }
    }
  };

  if (!connected) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
        <HeroHeader />
        <div className="text-center pt-32">
          <h1 className="text-4xl font-bold text-white mb-4">Your INFT Credit Profile</h1>
          <p className="text-zinc-400 text-lg mb-8">Connect your wallet to view your credit dashboard</p>
          <Button variant="outline" className="border-zinc-700">
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black">
      <HeroHeader />
      
      {/* Main Content */}
      <div className="w-full md:w-5/6 mx-auto px-4 md:px-0 pt-24 md:pt-32 pb-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-12">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Your INFT Credit Profile</h1>
            <p className="text-zinc-400 text-sm md:text-lg">AI-powered identity card that evolves with your Web3 activity</p>
            
            {/* SBT Status Indicator */}
            {!isSBTLoading && (
              <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
                {finalHasMintedSBT ? (
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">
                      {isContractDeployer ? "Contract Admin - All Features Unlocked" : "SBT Holder - All Features Unlocked"}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <AlertCircle className="h-4 w-4 text-orange-400" />
                    <span className="text-orange-400 text-sm font-medium">Mint SBT to Unlock Premium Features</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => setShowKanaSwap(!showKanaSwap)}
              disabled={!connected || !finalHasMintedSBT}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all border-0"
            >
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              🔥 Swap Tokens
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowDeFiActions(!showDeFiActions)}
              disabled={!finalHasMintedSBT}
              className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            >
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              {showDeFiActions ? 'Hide' : 'Show'} DeFi Actions
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowAIInsights(!showAIInsights)}
              disabled={!finalHasMintedSBT}
              className="border-zinc-700"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {showAIInsights ? 'Hide' : 'Show'} AI Insights
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchDashboardData}
              disabled={isLoading}
              className="border-zinc-700"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetchSBTStatus()}
              disabled={isSBTLoading}
              className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isSBTLoading ? 'animate-spin' : ''}`} />
              Check SBT
            </Button>
          </div>

          {/* Mobile Action Buttons */}
          <div className="grid grid-cols-2 md:hidden gap-2">
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => setShowKanaSwap(!showKanaSwap)}
              disabled={!connected || !finalHasMintedSBT}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all border-0"
            >
              <ArrowRightLeft className="h-4 w-4 mr-1" />
              Swap
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowDeFiActions(!showDeFiActions)}
              disabled={!finalHasMintedSBT}
              className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            >
              <ArrowRightLeft className="h-4 w-4 mr-1" />
              DeFi
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowAIInsights(!showAIInsights)}
              disabled={!finalHasMintedSBT}
              className="border-zinc-700"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              AI
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchDashboardData}
              disabled={isLoading}
              className="border-zinc-700"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetchSBTStatus()}
              disabled={isSBTLoading}
              className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${isSBTLoading ? 'animate-spin' : ''}`} />
              SBT
            </Button>
          </div>
        </div>

        {/* SBT Status Loading */}
        {isSBTLoading && (
          <div className="mb-8">
            <Card className="border-2 border-zinc-400/30 bg-zinc-950/20">
              <CardContent className="flex items-center justify-center py-8">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 animate-spin text-zinc-400" />
                  <span className="text-zinc-400">Checking SBT status...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}


        {/* SBT Minting Section - Show if user hasn't minted SBT */}
        {!finalHasMintedSBT && !isSBTLoading && (
          <div className="mb-8">
            <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2 text-xl md:text-2xl text-white">
                  <Shield className="h-6 w-6 text-blue-400" />
                  Mint Your Credit Score SBT
                </CardTitle>
                <CardDescription className="text-zinc-400 text-base md:text-lg">
                  Unlock advanced features by minting your Credit Score Soulbound Token
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="max-w-2xl mx-auto">
                  <SBTMint />
                </div>
                <div className="mt-6 p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1 text-sm text-zinc-300">
                      <p className="font-semibold mb-1 text-white">Unlock Premium Features</p>
                      <p className="text-zinc-400">
                        Once you mint your SBT, you&apos;ll gain access to AI insights, DeFi actions, 
                        and token swapping features. Your SBT serves as your identity card in the INFTs ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tabs */}
        <div className="w-full border-b border-zinc-800/50 mb-6 md:mb-8">
          <div className="flex flex-wrap gap-2 mb-4 pb-2 w-full md:w-1/3">
            {tabOptions.map((tab) => (
              <Button 
                key={tab} 
                variant="ghost" 
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] md:min-w-[120px] rounded-lg px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium justify-center transition-all duration-200 ${
                  activeTab === tab 
                    ? 'text-white bg-zinc-800/70 shadow-lg border border-zinc-700/50' 
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'On Chain' ? (
          <div className="space-y-6 md:space-y-8">
            {/* Swap Widget - Show at top when active */}
            {showKanaSwap && (
              <div>
                <SimpleSwapWidget onClose={() => setShowKanaSwap(false)} />
              </div>
            )}

            {/* DeFi Actions Chat - Show at top when active */}
            {showDeFiActions && (
              <div>
                <DeFiActionChat 
                  creditScore={onChainData.overallScore}
                  userAddress={account?.address.toString()}
                />
              </div>
            )}

            {/* AI Insights Panel - Show at top when active */}
            {showAIInsights && (
              <div>
                <AIInsightsPanel 
                  creditScore={onChainData.overallScore}
                  userAddress={account?.address.toString()}
                  recentActivity={`${onChainData.transactions} transactions, ${onChainData.totalBalance} portfolio value, ${onChainData.addressAge} days account age`}
                />
              </div>
            )}

            {/* Credit Score Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Main Credit Score */}
              <div className="lg:col-span-1">
                <Card className="bg-zinc-900/50 border-zinc-800/50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg md:text-xl text-white">Overall Credit Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CreditScoreRing 
                      score={onChainData.overallScore} 
                      maxScore={100} 
                      label="Credit Rating" 
                      color={onChainData.overallScore > 70 ? "emerald" : onChainData.overallScore > 40 ? "yellow" : "red"} 
                    />
                  </CardContent>
                  <CardFooter>
                    <div className={`w-full p-4 rounded-lg border ${
                      onChainData.overallScore > 70 
                        ? 'bg-emerald-400/10 border-emerald-400/20' 
                        : onChainData.overallScore > 40
                        ? 'bg-yellow-400/10 border-yellow-400/20'
                        : 'bg-red-400/10 border-red-400/20'
                    }`}>
                      <p className={`font-medium ${
                        onChainData.overallScore > 70 
                          ? 'text-emerald-400' 
                          : onChainData.overallScore > 40
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}>
                        {onChainData.overallScore > 70 ? 'Excellent Credit' : 
                         onChainData.overallScore > 40 ? 'Good Credit' : 'Building Credit'}
                      </p>
                      <p className={`text-xs mt-1 ${
                        onChainData.overallScore > 70 
                          ? 'text-emerald-400/70' 
                          : onChainData.overallScore > 40
                          ? 'text-yellow-400/70'
                          : 'text-red-400/70'
                      }`}>
                        {onChainData.overallScore > 70 
                          ? 'Eligible for premium lending rates'
                          : onChainData.overallScore > 40
                          ? 'Eligible for standard rates'
                          : 'Continue building your credit history'}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              {/* Key Metrics */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <MetricCard
                  title="Address Age"
                  value={`${onChainData.addressAge} days`}
                  change={onChainData.addressAge > 30 ? "+mature" : "new"}
                  trend={onChainData.addressAge > 30 ? "up" : "neutral"}
                  icon={Clock}
                  subtitle="Account maturity"
                />
                <MetricCard
                  title="Total Portfolio"
                  value={onChainData.totalBalance}
                  change={Number(onChainData.totalBalance.replace(/[$,]/g, '')) > 100 ? "+strong" : "building"}
                  trend={getBalanceTrend()}
                  icon={Wallet}
                  subtitle="Aptos network"
                />
                <MetricCard
                  title="Transaction Count"
                  value={onChainData.transactions.toLocaleString()}
                  change={onChainData.transactions > 10 ? "+active" : "low"}
                  trend={getTransactionTrend()}
                  icon={Activity}
                  subtitle="On-chain activity"
                />
                <MetricCard
                  title="Gas Spent"
                  value={`${onChainData.gasSpent} APT`}
                  change={parseFloat(onChainData.gasSpent) > 1 ? "+high usage" : "efficient"}
                  trend="neutral"
                  icon={Zap}
                  subtitle="Network fees paid"
                />
              </div>
            </div>

            {/* Holdings Section */}
            <Card className="bg-zinc-900/50 border-zinc-800/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">Aptos Network Holdings</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Total Portfolio: <span className="text-white font-medium">{onChainData.totalBalance}</span> • 
                      {tokens.length} Tokens • {nfts.length} NFTs
                    </CardDescription>
                  </div>
                  
                  {/* Holdings Tab Switcher */}
                  <div className="flex bg-zinc-800/50 rounded-lg p-1">
                    {(['Tokens', 'NFTs'] as const).map((tab) => (
                      <Button
                        key={tab}
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveHoldingsTab(tab)}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          activeHoldingsTab === tab
                            ? 'text-white bg-zinc-700/70 shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {tab === 'Tokens' ? <Coins className="w-4 h-4" /> : <Image className="w-4 h-4" />}
                          {tab} ({tab === 'Tokens' ? tokens.length : nfts.length})
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Holdings Content */}
                {activeHoldingsTab === 'Tokens' ? (
                  <div className="space-y-3">
                    {tokens.length > 0 ? (
                      tokens.map((token, index) => (
                        <Card key={index} className="bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                                  token.isNative ? 'bg-blue-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                                }`}>
                                  {token.icon}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="text-white font-medium">{token.symbol}</p>
                                    {token.isStaked && (
                                      <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">
                                        Staked
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-zinc-400">{token.name}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-white font-medium">{token.balanceFormatted} {token.symbol}</p>
                                <p className="text-sm text-zinc-400">{token.usdFormatted}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <Coins className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                        <p className="text-zinc-400">No tokens found</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nfts.length > 0 ? (
                      nfts.map((nft, index) => (
                        <Card key={index} className="bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="aspect-square bg-zinc-700/50 rounded-lg mb-3 overflow-hidden relative">
                              {nft.imageUrl ? (
                                <img 
                                  src={nft.imageUrl} 
                                  alt={nft.name}
                                  className="w-full h-full object-cover"
                                  onError={handleImageError}
                                />
                              ) : null}
                              <div className={`fallback-image w-full h-full flex items-center justify-center absolute top-0 left-0 ${nft.imageUrl ? 'hidden' : 'flex'}`}>
                                <Image className="w-12 h-12 text-zinc-500" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-white font-medium text-sm mb-1 truncate">{nft.name}</h3>
                              <p className="text-xs text-zinc-400 mb-2 truncate">{nft.collection}</p>
                              {nft.description && (
                                <p className="text-xs text-zinc-500 line-clamp-2">{nft.description}</p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <Image className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                        <p className="text-zinc-400">No NFTs found</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Credit Factors Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/50 border-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Credit Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {creditFactors.map((factor: CreditFactor, index: number) => (
                      <CreditFactorItem key={index} {...factor} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="text-white font-medium">No Liquidations Detected</p>
                          <p className="text-emerald-400/70 text-sm">Clean transaction history</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-xl">{onChainData.liquidations}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="text-white font-medium">Transaction Success Rate</p>
                          <p className="text-emerald-400/70 text-sm">Reliable network participant</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-xl">{onChainData.repaymentHistory}</span>
                    </div>

                    <div className="p-4 bg-blue-400/10 border border-blue-400/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-400 font-medium">AI Insights</span>
                      </div>
                      <p className="text-zinc-300 text-sm">
                        {onChainData.overallScore > 70 
                          ? `Excellent credit profile with ${onChainData.transactions} transactions and ${onChainData.addressAge} days of history. Consider exploring DeFi protocols to increase yield generation.`
                          : onChainData.overallScore > 40
                          ? `Good foundation with ${onChainData.transactions} transactions. Increase transaction frequency and portfolio balance to improve your score.`
                          : `Building credit profile. Continue using the network consistently and consider increasing your portfolio balance.`}
                      </p>
                    </div>

                    {/* Additional metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <div className="text-lg font-bold text-blue-400">{onChainData.nftCount}</div>
                        <p className="text-xs text-zinc-400">NFTs Owned</p>
                      </div>
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">{tokens.length}</div>
                        <p className="text-xs text-zinc-400">Token Types</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          // Off Chain Tab
          <div className="flex flex-col items-center justify-center py-32">
            <Card className="bg-zinc-900/50 border-zinc-800/50 max-w-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-400/10 border border-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Off-Chain Score</CardTitle>
                <div className="text-6xl font-bold text-zinc-600 my-4">--/100</div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-400/20 rounded-full text-orange-400 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zinc-400 leading-relaxed">
                  Off-chain credit scoring will integrate traditional financial data, social signals, 
                  and external reputation systems to provide a comprehensive credit profile.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;