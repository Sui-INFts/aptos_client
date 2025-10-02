"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { createIOIntelligenceClient, IO_MODELS } from "@/lib/io-intelligence-utils";
import { Loader2, Send, Bot, User, Sparkles, ArrowRightLeft, AlertCircle, Wallet, TrendingUp, Activity } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAptosClient } from "@/lib/aptos-utils";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  action?: SwapAction;
}

interface SwapAction {
  type: 'swap';
  fromToken: string;
  toToken: string;
  amount?: string;
  confirmed: boolean;
}

interface WalletBalanceAction {
  type: 'wallet_balance';
  token?: string;
}

interface WalletInfoAction {
  type: 'wallet_info';
  infoType: 'transactions' | 'nfts' | 'general';
}

type DeFiAction = SwapAction | WalletBalanceAction | WalletInfoAction;

interface DeFiActionChatProps {
  creditScore: number;
  userAddress?: string;
}

export function DeFiActionChat({ creditScore, userAddress }: DeFiActionChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your Aptos DeFi assistant. I can help you with:\n• Check wallet balance (e.g., 'What's my wallet balance?')\n• Swap tokens (e.g., 'Swap APT to USDT')\n• View transactions (e.g., 'Show my transactions')\n• And more! Just ask me anything about your Aptos wallet.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingSwap, setPendingSwap] = useState<SwapAction | null>(null);
  const [showWidget, setShowWidget] = useState(false);
  const [showWalletInfo, setShowWalletInfo] = useState(false);
  const [walletData, setWalletData] = useState<{
    balance?: string;
    tokens?: Array<{ symbol: string; balance: string; value: string }>;
    transactions?: number;
    nfts?: number;
  } | null>(null);

  const client = createIOIntelligenceClient();

  const handleWalletBalance = async (token: string, aiResponse: string) => {
    if (!userAddress) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Please connect your Aptos wallet first to check your balance.",
        },
      ]);
      return;
    }

    try {
      const aptosClient = getAptosClient();
      
      // Get account resources to fetch balance
      const accountResources = await aptosClient.account.getAccountResources({
        accountAddress: userAddress,
      });

      // Find APT balance
      const aptCoin = accountResources.find(
        (r) => r.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>'
      );

      const balance = aptCoin && 'coin' in aptCoin.data 
        ? (Number((aptCoin.data as { coin: { value: string } }).coin.value) / 100000000).toFixed(4)
        : '0';

      setWalletData({
        balance,
        tokens: [
          { symbol: 'APT', balance, value: `$${(Number(balance) * 10).toFixed(2)}` }
        ],
      });
      
      setShowWalletInfo(true);

      const cleanResponse = aiResponse.replace(/WALLET_BALANCE:.*/, '').trim();
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `${cleanResponse || 'Let me check your Aptos wallet balance...'}\n\n✅ Your APT balance: ${balance} APT (≈ $${(Number(balance) * 10).toFixed(2)} USD)\n\nView full details on Aptos Explorer: https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`,
        },
      ]);
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "I encountered an error while checking your Aptos wallet balance. Please try again.",
        },
      ]);
    }
  };

  const handleWalletInfo = async (infoType: 'transactions' | 'nfts' | 'general', aiResponse: string) => {
    if (!userAddress) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Please connect your Aptos wallet first to view your information.",
        },
      ]);
      return;
    }

    try {
      const aptosClient = getAptosClient();
      
      if (infoType === 'transactions') {
        const transactions = await aptosClient.transaction.getAccountTransactions({
          accountAddress: userAddress,
          options: { limit: 5 }
        });

        const txCount = transactions.length;
        setWalletData({ transactions: txCount });
        
        const cleanResponse = aiResponse.replace(/WALLET_INFO:.*/, '').trim();
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `${cleanResponse || 'Let me check your Aptos transaction history...'}\n\n✅ Recent transactions found: ${txCount}\n\nView full transaction history on Aptos Explorer:\nhttps://explorer.aptoslabs.com/account/${userAddress}?network=testnet`,
          },
        ]);
      } else {
        const cleanResponse = aiResponse.replace(/WALLET_INFO:.*/, '').trim();
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `${cleanResponse || 'Here is your Aptos wallet information:'}\n\n📊 Aptos Wallet Address: ${userAddress}\n🔗 View on Aptos Explorer: https://explorer.aptoslabs.com/account/${userAddress}?network=testnet\n\nYou can check your full activity including NFTs, tokens, and transactions on Aptos Explorer.`,
          },
        ]);
      }
      
      setShowWalletInfo(true);
    } catch (error) {
      console.error("Error fetching wallet info:", error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "I encountered an error while fetching your Aptos wallet information. Please try again.",
        },
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      // Call AI to understand the intent
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_3_70B,
        messages: [
          {
            role: 'system',
            content: `You are an Aptos blockchain assistant. Your job is to help users interact with the Aptos ecosystem.

IMPORTANT: ALL your responses MUST be specifically about Aptos blockchain. When providing information, always reference Aptos features, Aptos DEXs, Aptos wallets, and Aptos ecosystem.

SUPPORTED ACTIONS:
1. WALLET BALANCE - Check APT and token balances
   Examples: "wallet balance", "what's my balance", "show my APT", "check my wallet"
   Response format: WALLET_BALANCE: TOKEN=[specific token or ALL]

2. WALLET INFO - View transactions, NFTs, account info
   Examples: "show transactions", "my NFTs", "account info", "transaction history"
   Response format: WALLET_INFO: TYPE=[transactions|nfts|general]

3. TOKEN SWAPS - Exchange tokens via Aptos DEXs
   Examples: "swap APT to USDT", "exchange 10 APT for USDC"
   Response format: SWAP_ACTION: FROM=[token] TO=[token] AMOUNT=[number or NONE]

ANALYZE THE USER MESSAGE:
- Identify the primary intent (balance, info, or swap)
- Extract relevant parameters
- Always mention that you're checking their Aptos wallet
- Reference Aptos-specific features (Aptos Explorer, Aptos DEXs like Liquidswap, PancakeSwap, Thala)
- If unclear, ask for clarification while mentioning Aptos capabilities

USER APTOS WALLET: ${userAddress || 'Not connected'}
CREDIT SCORE ON APTOS: ${creditScore}/1000

Be conversational, Aptos-focused, and helpful. Keep responses brief but informative about Aptos.`,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      });

      const aiResponse = response.choices[0].message.content;

      // Parse AI response for wallet balance action
      if (aiResponse.includes('WALLET_BALANCE:')) {
        const tokenMatch = aiResponse.match(/TOKEN=\[([^\]]+)\]/);
        const token = tokenMatch ? tokenMatch[1].toUpperCase() : 'ALL';
        
        await handleWalletBalance(token, aiResponse);
      }
      // Parse AI response for wallet info action
      else if (aiResponse.includes('WALLET_INFO:')) {
        const typeMatch = aiResponse.match(/TYPE=\[([^\]]+)\]/);
        const infoType = typeMatch ? typeMatch[1].toLowerCase() as 'transactions' | 'nfts' | 'general' : 'general';
        
        await handleWalletInfo(infoType, aiResponse);
      }
      // Parse AI response for swap action
      else if (aiResponse.includes('SWAP_ACTION:')) {
        const fromMatch = aiResponse.match(/FROM=\[([^\]]+)\]/);
        const toMatch = aiResponse.match(/TO=\[([^\]]+)\]/);
        const amountMatch = aiResponse.match(/AMOUNT=\[([^\]]+)\]/);

        if (fromMatch && toMatch) {
          const swapAction: SwapAction = {
            type: 'swap',
            fromToken: fromMatch[1].toUpperCase(),
            toToken: toMatch[1].toUpperCase(),
            amount: amountMatch && amountMatch[1] !== 'NONE' ? amountMatch[1] : undefined,
            confirmed: false,
          };

          setPendingSwap(swapAction);

          const confirmMessage = `I understand you want to swap ${swapAction.amount || 'some'} ${swapAction.fromToken} to ${swapAction.toToken} on Aptos. Let me prepare the Kana Labs DEX aggregator widget for you. Click "Confirm Swap" below to proceed.`;

          setMessages(prev => [
            ...prev,
            {
              role: 'assistant',
              content: confirmMessage,
              action: swapAction,
            },
          ]);
        } else {
          setMessages(prev => [
            ...prev,
            {
              role: 'assistant',
              content: "I understood you want to swap tokens on Aptos, but I need more details. Please specify which tokens, for example: 'Swap APT to USDT'",
            },
          ]);
        }
      } else {
        // Regular AI response
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: aiResponse,
          },
        ]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I encountered an error processing your request. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmSwap = (action: SwapAction) => {
    setPendingSwap({ ...action, confirmed: true });
    setShowWidget(true);
    setMessages(prev => [
      ...prev,
      {
        role: 'assistant',
        content: `Great! Opening Kana Labs swap widget for ${action.fromToken} → ${action.toToken}. You can now complete your swap using the widget below.`,
      },
    ]);
  };

  const handleCancelSwap = () => {
    setPendingSwap(null);
    setMessages(prev => [
      ...prev,
      {
        role: 'assistant',
        content: "Swap cancelled. How else can I help you?",
      },
    ]);
  };

  return (
    <div className="space-y-4">
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-500" />
                DeFi Action Assistant
              </CardTitle>
              <CardDescription className="mt-1">
                Chat with your SBT to perform DeFi actions on Aptos
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Chat Messages */}
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>

                    {/* Swap Action Buttons */}
                    {message.action && !message.action.confirmed && (
                      <div className="mt-3 flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleConfirmSwap(message.action!)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <ArrowRightLeft className="h-3 w-3 mr-1" />
                          Confirm Swap
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancelSwap}
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Try: 'wallet balance' or 'swap APT to USDT' or 'show transactions'"
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              size="icon"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Info Banner */}
          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="text-xs text-blue-900 dark:text-blue-100">
                <p className="font-medium mb-1">Powered by Kana Labs DEX Aggregator</p>
                <p>
                  Swaps are executed through Kana Labs, which aggregates liquidity across 
                  Aptos DEXs for best rates. Learn more at{' '}
                  <a
                    href="https://docs.kanalabs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    docs.kanalabs.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Info Widget */}
      {showWalletInfo && walletData && (
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-blue-500" />
              Aptos Wallet Information
            </CardTitle>
            <CardDescription>
              Your wallet details on Aptos blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6">
              <div className="space-y-4">
                {walletData.balance && (
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">APT Balance</p>
                          <p className="text-2xl font-bold">{walletData.balance} APT</p>
                        </div>
                      </div>
                      {walletData.tokens?.[0] && (
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">USD Value</p>
                          <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                            {walletData.tokens[0].value}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {walletData.transactions !== undefined && (
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Recent Transactions</p>
                        <p className="text-xl font-bold">{walletData.transactions} transactions</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <a
                    href={`https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors w-full justify-center"
                  >
                    View on Aptos Explorer
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setShowWalletInfo(false);
                  setWalletData(null);
                }}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Kana Labs Widget */}
      {showWidget && pendingSwap && (
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-green-500" />
              Kana Labs Swap Widget
            </CardTitle>
            <CardDescription>
              Complete your swap: {pendingSwap.fromToken} → {pendingSwap.toToken}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg p-6">
              <div className="text-center space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Kana Labs Widget Integration</p>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                    <p className="font-semibold text-lg mb-2">
                      {pendingSwap.fromToken} → {pendingSwap.toToken}
                    </p>
                    {pendingSwap.amount && (
                      <p className="text-sm text-muted-foreground">
                        Amount: {pendingSwap.amount} {pendingSwap.fromToken}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://app.kanalabs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Open Kana Labs to Swap
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground">
                  Widget integration coming soon. For now, you can complete your swap on Kana Labs.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setShowWidget(false);
                  setPendingSwap(null);
                }}
                className="w-full"
              >
                Close Widget
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

