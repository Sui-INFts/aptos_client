"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toast } from "@/components/ui/use-toast";

// Types for our NFT and its data structure
interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
  evolution_stage: number;
  interaction_count: number;
  atoma_model_id: string;
}

export default function MintedNFTs() {
  const { account } = useWallet();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!account?.address) {
        setNfts([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Placeholder implementation for Aptos NFT fetching
        // You would need to implement the actual NFT fetching logic based on your Aptos smart contract
        console.log("NFT fetching not yet implemented for Aptos");
        
        // For now, return empty array
        setNfts([]);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setError("Failed to fetch NFTs");
        toast({
          title: "Error",
          description: "Failed to fetch your minted NFTs",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchNFTs();
  }, [account?.address]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-white">Loading your minted NFTs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-800 flex items-center justify-center">
          <Image
            src="/figmaAssets/bold---astronomy---star-circle-4.svg"
            alt="No NFTs"
            width={32}
            height={32}
            className="opacity-50"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No NFTs Found</h3>
        <p className="text-zinc-400">You haven&apos;t minted any NFTs yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <div key={nft.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <div className="aspect-square relative">
            <Image
              src={nft.image_url}
              alt={nft.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{nft.name}</h3>
            <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{nft.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Stage: {nft.evolution_stage}</span>
              <span className="text-zinc-400">Interactions: {nft.interaction_count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}