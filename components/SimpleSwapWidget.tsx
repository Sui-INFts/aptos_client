"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, ExternalLink, AlertCircle } from "lucide-react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

interface SimpleSwapWidgetProps {
  onClose: () => void;
}

export function SimpleSwapWidget({ onClose }: SimpleSwapWidgetProps) {
  const { connected, account } = useWallet();
  const [fromToken, setFromToken] = useState("APT");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("");

  const tokens = [
    { symbol: "APT", name: "Aptos" },
    { symbol: "USDT", name: "Tether USD" },
    { symbol: "USDC", name: "USD Coin" },
    { symbol: "DAI", name: "DAI Stablecoin" },
  ];

  const swapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const handleSwapOnKana = () => {
    // Open Kana Labs with pre-filled data and embedded view
    const url = `https://app.kanalabs.io/swap?from=${fromToken}&to=${toToken}&amount=${amount}&wallet=${account?.address.toString()}&hideNavbar=true&embedded=true`;
    window.open(url, '_blank', 'width=500,height=700');
  };

  return (
    <Card className="border-2 border-orange-400/30 bg-gradient-to-br from-orange-950/20 to-pink-950/20">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle className="flex items-center gap-2 text-lg md:text-2xl">
            <ArrowRightLeft className="h-5 w-5 md:h-6 md:w-6 text-orange-400" />
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Swap Tokens
            </span>
          </CardTitle>
          <CardDescription className="mt-2 text-sm md:text-base">
            Best rates via Kana Labs DEX aggregation on Aptos
          </CardDescription>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onClose}
          className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 w-full sm:w-auto"
        >
          Close
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Wallet Status */}
        {connected && account ? (
          <div className="p-3 bg-green-950/20 border border-green-400/30 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-green-400">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Wallet Connected: {account.address.toString().slice(0, 6)}...{account.address.toString().slice(-4)}</span>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-red-950/20 border border-red-400/30 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="w-4 h-4" />
              <span>Please connect your wallet to swap</span>
            </div>
          </div>
        )}

        {/* From Token */}
        <div className="space-y-2">
          <Label className="text-zinc-300">From</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-zinc-800/50 border-zinc-700 text-white"
            />
            <Select value={fromToken} onValueChange={setFromToken}>
              <SelectTrigger className="w-[140px] bg-zinc-800/50 border-zinc-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={swapTokens}
            className="rounded-full border-zinc-700 hover:bg-zinc-800"
          >
            <ArrowRightLeft className="h-4 w-4 text-zinc-400" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <Label className="text-zinc-300">To</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              disabled
              className="flex-1 bg-zinc-800/50 border-zinc-700 text-zinc-400"
            />
            <Select value={toToken} onValueChange={setToToken}>
              <SelectTrigger className="w-[140px] bg-zinc-800/50 border-zinc-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <Button
          onClick={handleSwapOnKana}
          disabled={!connected || !amount || parseFloat(amount) <= 0}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold"
          size="lg"
        >
          {!connected ? (
            "Connect Wallet to Swap"
          ) : !amount || parseFloat(amount) <= 0 ? (
            "Enter Amount"
          ) : (
            <>
              <ExternalLink className="w-4 h-4 mr-2" />
              Swap on Kana Labs
            </>
          )}
        </Button>

        {/* Info Banner */}
        <div className="p-4 bg-blue-950/20 border border-blue-400/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 text-sm text-blue-200">
              <p className="font-semibold mb-1">Powered by Kana Labs</p>
              <p className="text-blue-300/80 text-xs">
                Your wallet connection is maintained. Kana Labs aggregates the best rates from Liquidswap, 
                PancakeSwap, and Thala on Aptos.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

