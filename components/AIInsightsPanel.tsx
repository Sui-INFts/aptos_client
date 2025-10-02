"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  createIOIntelligenceClient, 
  IO_MODELS 
} from "@/lib/io-intelligence-utils";
import { Loader2, Sparkles, Brain, TrendingUp, Info } from "lucide-react";

interface AIInsightsPanelProps {
  creditScore: number;
  userAddress?: string;
  recentActivity?: string;
}

export function AIInsightsPanel({ creditScore, userAddress, recentActivity }: AIInsightsPanelProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState<string>("");
  const [recommendations, setRecommendations] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'insights' | 'recommendations' | 'explanation'>('insights');

  const client = createIOIntelligenceClient();

  // Format AI response to be more readable
  const formatAIResponse = (text: string): string => {
    return text
      .replace(/\*\*/g, '') // Remove bold markdown
      .replace(/^\s*[-•]\s*/gm, '') // Remove bullet points and dashes
      .replace(/^\s*\d+\.\s*/gm, '') // Remove numbered lists
      .replace(/\n{3,}/g, '\n\n') // Remove excessive line breaks
      .trim();
  };

  const handleGetInsights = async () => {
    setIsLoading(true);
    setActiveTab('insights');
    
    try {
      const activity = recentActivity || `User has ${creditScore >= 700 ? 'consistent' : 'limited'} Aptos blockchain activity`;
      
      // Personalized context with wallet address
      const walletContext = userAddress 
        ? `\n\nWallet Address: ${userAddress}\nView on Aptos Explorer: https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`
        : '';
      
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_3_70B,
        messages: [
          {
            role: 'system',
            content: 'You are a financial AI advisor specializing in Aptos blockchain credit scoring and DeFi behavior analysis. Provide clear, actionable insights in natural paragraphs without bullet points, dashes, or numbered lists. When given a wallet address, personalize the advice and reference their specific on-chain activity. Focus on Aptos ecosystem.',
          },
          {
            role: 'user',
            content: `Analyze this user's Aptos blockchain activity and provide personalized insights on their credit score:
            
Current Credit Score: ${creditScore}/1000
Recent Activity: ${activity}${walletContext}

Provide a comprehensive, personalized assessment in 2-3 natural paragraphs. Reference their wallet address and actual on-chain behavior. Cover their financial patterns on Aptos, specific recommendations to improve their score, and any risk factors. Mention that they can verify their activity on Aptos Explorer. Write in a conversational, friendly tone without using bullet points or lists. Make it feel personal and specific to their wallet.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 600,
      });
      
      setInsights(formatAIResponse(response.choices[0].message.content));
    } catch (error) {
      console.error("Error getting AI insights:", error);
      setInsights("Unable to generate insights. Please check your IO Intelligence API key configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setActiveTab('recommendations');
    
    try {
      const history = recentActivity || "New user in Aptos DeFi ecosystem";
      
      // Personalized context with wallet address
      const walletContext = userAddress 
        ? `\n\nWallet Address: ${userAddress}\nYou can verify their transaction history at: https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`
        : '';
      
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_1_70B,
        messages: [
          {
            role: 'system',
            content: 'You are an expert Aptos blockchain DeFi analyst with deep knowledge of the Aptos ecosystem. Conduct a thorough analysis of DeFi opportunities on Aptos and provide personalized, actionable recommendations. Write in natural, flowing paragraphs without bullet points or numbered lists. Always end with a DYOR (Do Your Own Research) disclaimer.',
          },
          {
            role: 'user',
            content: `Conduct a deep analysis of Aptos DeFi landscape and provide personalized recommendations:

USER PROFILE:
Credit Score: ${creditScore}/1000
Aptos Activity: ${history}${walletContext}

ANALYSIS REQUIREMENTS:
1. Research current Aptos DeFi ecosystem (Liquidswap, Thala, PancakeSwap on Aptos, Aries Markets, Tortuga Finance, Amnis Finance)
2. Analyze lending protocols, AMMs, liquid staking, and yield opportunities
3. Consider user's current credit score level and activity
4. Provide specific protocols and strategies suitable for their risk profile
5. Mention APT staking options and governance participation
6. Reference real DeFi metrics and opportunities

Write 3-4 natural paragraphs with:
- Deep dive into suitable Aptos DeFi protocols for this user
- Specific strategies to improve credit score through DeFi participation
- Risk considerations and portfolio diversification advice
- Concrete next steps with protocol names and reasons

IMPORTANT: End with this exact disclaimer: "⚠️ This is an AI-generated recommendation based on current Aptos DeFi landscape. Always Do Your Own Research (DYOR) before investing or interacting with any protocol. Past performance doesn't guarantee future results."

Be conversational, personal, and reference their wallet if provided. Make recommendations specific to Aptos blockchain.`,
          },
        ],
        temperature: 0.8,
        max_tokens: 700,
      });
      
      const formattedResponse = formatAIResponse(response.choices[0].message.content);
      
      // Ensure DYOR disclaimer is always present
      const dyorDisclaimer = "\n\n⚠️ This is an AI-generated recommendation based on current Aptos DeFi landscape. Always Do Your Own Research (DYOR) before investing or interacting with any protocol. Past performance doesn't guarantee future results.";
      
      const finalResponse = formattedResponse.includes('DYOR') || formattedResponse.includes('Do Your Own Research')
        ? formattedResponse
        : formattedResponse + dyorDisclaimer;
      
      setRecommendations(finalResponse);
    } catch (error) {
      console.error("Error getting recommendations:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setRecommendations(`We encountered an issue generating recommendations: ${errorMessage}. Please ensure your IO Intelligence API key is properly configured in your environment variables. Check the console for more details.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetExplanation = async () => {
    setIsLoading(true);
    setActiveTab('explanation');
    
    try {
      // Personalized context with wallet address
      const walletContext = userAddress 
        ? `\n\nUser's Wallet: ${userAddress}\nThey can view their full transaction history at: https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`
        : '';
      
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_2_3B,
        messages: [
          {
            role: 'system',
            content: 'You are an Aptos blockchain credit scoring expert. Explain credit score factors in simple, natural paragraphs without bullet points or lists. When given a wallet address, personalize the explanation. Keep it conversational and actionable.',
          },
          {
            role: 'user',
            content: `Explain what factors contribute to a credit score of ${creditScore}/1000 in the Aptos decentralized credit system.${walletContext}

Write in 2-3 simple, friendly paragraphs explaining how the score works specifically for this user. If wallet address is provided, mention they can verify all their transactions on Aptos Explorer. Explain what the user can do to improve their score. No bullet points or numbered lists. Make it personal and relevant to their situation.`,
          },
        ],
        temperature: 0.6,
        max_tokens: 350,
      });
      
      setExplanation(formatAIResponse(response.choices[0].message.content));
    } catch (error) {
      console.error("Error getting explanation:", error);
      setExplanation("Unable to generate explanation. Please check your IO Intelligence API key configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColorClass = (score: number) => {
    if (score >= 800) return "text-green-600 dark:text-green-400";
    if (score >= 600) return "text-blue-600 dark:text-blue-400";
    if (score >= 400) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-500" />
              AI-Powered Credit Insights
            </CardTitle>
            <CardDescription className="mt-1">
              Powered by IO Intelligence AI Models
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950">
            {IO_MODELS.LLAMA_3_3_70B.split('/')[1]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Score Display */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Your Credit Score</div>
          <div className={`text-3xl font-bold ${getScoreColorClass(creditScore)}`}>
            {creditScore} / 1000
          </div>
        </div>

        {/* Wallet Address Display */}
        {userAddress && (
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                  Your Wallet Address
                </div>
                <div className="text-xs font-mono text-blue-800 dark:text-blue-200 break-all mb-2">
                  {userAddress}
                </div>
                <a
                  href={`https://explorer.aptoslabs.com/account/${userAddress}?network=testnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Full Transaction History on Aptos Explorer
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Button
            onClick={handleGetInsights}
            disabled={isLoading}
            variant={activeTab === 'insights' ? 'default' : 'outline'}
            className="w-full"
          >
            {isLoading && activeTab === 'insights' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Brain className="h-4 w-4 mr-2" />
            )}
            Analyze Behavior
          </Button>

          <Button
            onClick={handleGetRecommendations}
            disabled={isLoading}
            variant={activeTab === 'recommendations' ? 'default' : 'outline'}
            className="w-full"
          >
            {isLoading && activeTab === 'recommendations' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <TrendingUp className="h-4 w-4 mr-2" />
            )}
            Get Recommendations
          </Button>

          <Button
            onClick={handleGetExplanation}
            disabled={isLoading}
            variant={activeTab === 'explanation' ? 'default' : 'outline'}
            className="w-full"
          >
            {isLoading && activeTab === 'explanation' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Info className="h-4 w-4 mr-2" />
            )}
            Explain Score
          </Button>
        </div>

        {/* Results Display */}
        {(insights || recommendations || explanation) && (
          <div className="mt-4">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {activeTab === 'insights' && insights && (
                    <div className="prose prose-base dark:prose-invert max-w-none">
                      <div className="text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
                        {insights.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === 'recommendations' && recommendations && (
                    <div className="space-y-4">
                      <div className="prose prose-base dark:prose-invert max-w-none">
                        <div className="text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
                          {recommendations.split('\n\n').map((paragraph, index) => {
                            // Check if this paragraph contains the DYOR warning
                            const isDYORParagraph = paragraph.includes('⚠️') || paragraph.includes('DYOR') || paragraph.includes('Do Your Own Research');
                            
                            if (isDYORParagraph) {
                              return (
                                <div key={index} className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg">
                                  <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-0">
                                    {paragraph}
                                  </p>
                                </div>
                              );
                            }
                            
                            return (
                              <p key={index} className="mb-4 last:mb-0">
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'explanation' && explanation && (
                    <div className="prose prose-base dark:prose-invert max-w-none">
                      <div className="text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
                        {explanation.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-xs text-blue-900 dark:text-blue-100">
              <p className="font-medium mb-1">About AI Insights</p>
              <p>
                AI insights are tailored for the Aptos ecosystem, generated using IO Intelligence&apos;s 
                open-source LLMs running on decentralized GPU infrastructure. All recommendations are 
                specific to Aptos blockchain and DeFi protocols. Learn more at{' '}
                <a 
                  href="https://docs.io.net/docs/io-intelligence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700 dark:hover:text-blue-300"
                >
                  docs.io.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

