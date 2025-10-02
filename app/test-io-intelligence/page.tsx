"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createIOIntelligenceClient, IO_MODELS } from "@/lib/io-intelligence-utils";
import { Loader2, CheckCircle, XCircle, Sparkles } from "lucide-react";

export default function TestIOIntelligencePage() {
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [apiKeyStatus, setApiKeyStatus] = useState<string>("");

  const testAPI = async () => {
    setIsLoading(true);
    setIsSuccess(null);
    setResult("");
    
    try {
      // Check if API key is configured
      const apiKey = process.env.NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY;
      if (!apiKey) {
        throw new Error("IO Intelligence API key is not configured in environment variables");
      }
      
      setApiKeyStatus(`API Key: ${apiKey.substring(0, 20)}...${apiKey.substring(apiKey.length - 10)}`);
      
      const client = createIOIntelligenceClient();
      
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_3_70B,
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant. Be concise and friendly."
          },
          {
            role: "user",
            content: "Say 'IO Intelligence is successfully integrated with the INFTs Credit Score application!' and add a short congratulations message."
          }
        ],
        temperature: 0.7,
        max_tokens: 100,
      });
      
      setResult(response.choices[0].message.content);
      setIsSuccess(true);
    } catch (error) {
      console.error("IO Intelligence API Error:", error);
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const testCreditScoreAnalysis = async () => {
    setIsLoading(true);
    setIsSuccess(null);
    setResult("");
    
    try {
      const client = createIOIntelligenceClient();
      
      const response = await client.chatCompletion({
        model: IO_MODELS.LLAMA_3_1_70B,
        messages: [
          {
            role: "system",
            content: "You are a DeFi credit scoring expert. Provide brief, actionable insights."
          },
          {
            role: "user",
            content: "A user has a credit score of 750/1000. Give them 3 quick tips to improve their score."
          }
        ],
        temperature: 0.8,
        max_tokens: 200,
      });
      
      setResult(response.choices[0].message.content);
      setIsSuccess(true);
    } catch (error) {
      console.error("IO Intelligence API Error:", error);
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="h-8 w-8 text-purple-500" />
          <h1 className="text-4xl font-bold">IO Intelligence Test</h1>
        </div>
        <p className="text-muted-foreground">
          Test your IO Intelligence API integration
        </p>
      </div>

      <div className="grid gap-6">
        {/* API Configuration Status */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration Status</CardTitle>
            <CardDescription>Check if your API key is properly configured</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">API Key:</span>
              <Badge variant={process.env.NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY ? "default" : "destructive"}>
                {process.env.NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY ? "Configured ✓" : "Not Configured ✗"}
              </Badge>
            </div>
            {apiKeyStatus && (
              <div className="p-2 bg-muted rounded text-xs font-mono">
                {apiKeyStatus}
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Base URL:</span>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                {process.env.NEXT_PUBLIC_IO_INTELLIGENCE_BASE_URL || "https://api.intelligence.io.solutions"}
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Model:</span>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                {IO_MODELS.LLAMA_3_3_70B}
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Test Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>API Tests</CardTitle>
            <CardDescription>Run different tests to verify the integration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={testAPI}
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Test Basic Connection
                </>
              )}
            </Button>

            <Button
              onClick={testCreditScoreAnalysis}
              disabled={isLoading}
              variant="outline"
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Test Credit Score Analysis
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <Card className={
            isSuccess 
              ? "border-green-500 bg-green-50 dark:bg-green-950/20" 
              : "border-red-500 bg-red-50 dark:bg-red-950/20"
          }>
            <CardHeader>
              <div className="flex items-center gap-2">
                {isSuccess ? (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                )}
                <CardTitle className={isSuccess ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}>
                  {isSuccess ? "Success!" : "Error"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`p-4 rounded-lg ${isSuccess ? "bg-white dark:bg-green-900/20" : "bg-white dark:bg-red-900/20"}`}>
                <p className="whitespace-pre-wrap text-sm">{result}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        {!result && (
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                  📝 Setup Instructions
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li>Make sure you've added your API key to <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">.env.local</code></li>
                  <li>Restart your dev server: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">pnpm run dev</code></li>
                  <li>Click "Test Basic Connection" to verify it works</li>
                  <li>Try "Test Credit Score Analysis" for a practical example</li>
                </ol>
                <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded">
                  <p className="text-xs font-mono text-blue-900 dark:text-blue-100">
                    NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=io-v2-eyJh...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Documentation Links */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">📚 Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a
                href="/QUICKSTART_IO_INTELLIGENCE.md"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
              >
                → Quick Start Guide
              </a>
              <a
                href="/IO_INTELLIGENCE_SETUP.md"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
              >
                → Full Setup Guide
              </a>
              <a
                href="https://docs.io.net/docs/io-intelligence"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                → IO Intelligence Docs ↗
              </a>
              <a
                href="https://intelligence.io.solutions"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                → Get API Key ↗
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

