'use client'

import React from "react";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Network } from "@aptos-labs/ts-sdk";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AptosWalletAdapterProvider
        autoConnect={true}
        dappConfig={{ 
          network: (process.env.NEXT_PUBLIC_APP_NETWORK as Network) ?? Network.TESTNET,
          aptosApiKeys: {
            [process.env.NEXT_PUBLIC_APP_NETWORK as string]: process.env.NEXT_PUBLIC_APTOS_API_KEY
          }
        }}
        onError={(error: Error) => {
          console.error("Wallet error:", error);
        }}
      >
        {children}
        <Toaster />
      </AptosWalletAdapterProvider>
    </QueryClientProvider>
  );
}
