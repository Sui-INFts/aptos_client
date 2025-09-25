"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toast } from "@/components/ui/use-toast";
import { HeroHeader } from "@/components/header";
// import { aptosClient } from "@/app/utils/aptosClient";
import { getNetworkVariables } from "@/contract";

// Define the NFT form data structure
interface NFTFormData {
  name: string;
  description: string;
  file: File | null;
  externalLink: string;
}

export default function CreateNFT() {
  const { connected, account, signAndSubmitTransaction } = useWallet();
  const networkVariables = getNetworkVariables();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<NFTFormData>({
    name: "",
    description: "",
    file: null,
    externalLink: "",
  });
  const [atomaModelId, setAtomaModelId] = useState<string>("default-model");
  const router = useRouter();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, file });
      
      // Create a preview URL for the selected file
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Upload file to IPFS or similar decentralized storage
  const uploadToStorage = async (file: File): Promise<string> => {
    try {
      console.log("Starting upload to storage...");
      console.log("File details:", {
        name: file.name,
        type: file.type,
        size: file.size
      });

      // For now, we'll use a placeholder URL
      // In a real implementation, you would upload to IPFS, Arweave, or similar
      const placeholderUrl = `https://placeholder.com/400x400?text=${encodeURIComponent(file.name)}`;
      
      console.log("Upload completed. URL:", placeholderUrl);
      return placeholderUrl;
    } catch (error) {
      console.error("Error in uploadToStorage:", error);
      throw error;
    }
  };

  // Create public metadata for the NFT
  const createPublicMetadata = () => {
    const metadata = {
      name: formData.name,
      description: formData.description,
      externalLink: formData.externalLink,
      creationDate: new Date().toISOString(),
      creator: account?.address,
    };
    return metadata;
  };

  // Create private metadata for the NFT
  const createPrivateMetadata = () => {
    // This could contain additional private information
    const metadata = {
      creatorNotes: "Private notes for this NFT",
      creationDetails: {
        application: "INFT Protocol",
        version: "1.0.0",
        timestamp: new Date().toISOString()
      }
    };
    return metadata;
  };

  // Mint NFT on the Aptos blockchain
  const mintNFT = async () => {
    if (!connected || !formData.file || !account) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please connect your wallet and select a file",
      });
      return;
    }

    console.log("Connected account address:", account?.address);
    if (!account?.address) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Wallet is not connected properly.",
      });
      return;
    }

    setIsLoading(true);
    toast({
      title: "Preparing your NFT...",
      description: "Please wait while we prepare your Intelligent NFT",
    });
    
    try {
      // 1. Upload media to storage
      toast({
        title: "Uploading to storage...",
        description: "Uploading your media file",
      });
      console.log("Starting storage upload...");
      const imageUrl = await uploadToStorage(formData.file);
      console.log("Media uploaded successfully:", imageUrl);

      // 2. Create and upload public metadata
      toast({
        title: "Creating public metadata...",
        description: "Preparing metadata for your NFT",
      });
      const publicMetadata = createPublicMetadata();
      console.log("Public metadata:", publicMetadata);
      const publicMetadataJson = JSON.stringify(publicMetadata);
      const publicMetadataUrl = await uploadToStorage(
        new File([publicMetadataJson], "public_metadata.json", { type: "application/json" })
      );
      console.log("Public metadata uploaded:", publicMetadataUrl);

      // 3. Create and upload private metadata
      toast({
        title: "Creating private metadata...",
        description: "Preparing private metadata",
      });
      const privateMetadata = createPrivateMetadata();
      console.log("Private metadata:", privateMetadata);
      const privateMetadataJson = JSON.stringify(privateMetadata);
      const privateMetadataUrl = await uploadToStorage(
        new File([privateMetadataJson], "private_metadata.json", { type: "application/json" })
      );
      console.log("Private metadata uploaded:", privateMetadataUrl);

      // 4. Create and execute the transaction
      console.log("Creating transaction with module address:", networkVariables.MODULE_ADDRESS);
      
      // Note: This is a placeholder transaction structure
      // You would need to implement the actual Move function call based on your smart contract
      const payload = {
        type: "entry_function_payload",
        function: `${networkVariables.MODULE_ADDRESS}::inft_core::mint_nft`,
        type_arguments: [],
        arguments: [
          formData.name,
          formData.description,
          imageUrl,
          publicMetadataUrl,
          privateMetadataUrl,
          atomaModelId,
        ],
      };

      console.log("Transaction payload:", payload);
      toast({
        title: "Waiting for wallet approval...",
        description: "Please approve the transaction in your wallet",
      });

      const result = await signAndSubmitTransaction(payload);

      console.log("Transaction result:", result);
      toast({
        title: "Success",
        description: "Intelligent NFT minted successfully!",
      });
      router.push("/profile");
      
    } catch (error) {
      console.error("Error minting NFT:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: `Error minting NFT: ${error instanceof Error ? error.message : 'Unknown error'}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <HeroHeader />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 pt-27 pb-24">
          <h1 className="text-3xl font-bold mb-2 text-white">Create an Intelligent NFT</h1>
          <p className="text-gray-400 mb-8">Your INFT will evolve as users interact with it. Gas fees on Aptos testnet apply for minting.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Upload Area */}
            <div className="flex flex-col">
              <div
                className="border-2 border-dashed border-gray-700 rounded-lg h-96 flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                {previewUrl ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={previewUrl}
                      alt="NFT Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Drag and drop media</p>
                    <p className="text-gray-600 mt-1">or browse files</p>
                    <p className="text-xs text-gray-600 mt-4">Max size: 50MB</p>
                    <p className="text-xs text-gray-600">JPG, PNG, GIF, SVG, MP4</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/gif,image/svg+xml,video/mp4"
                className="hidden"
              />
            </div>

            {/* Right Side - Form Fields */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name your Intelligent NFT"
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="atomaModelId" className="block text-white text-sm font-medium mb-2">
                  Atoma AI Model *
                </label>
                <select
                  id="atomaModelId"
                  value={atomaModelId}
                  onChange={(e) => setAtomaModelId(e.target.value)}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="default-model">Default Model</option>
                  <option value="creative-model">Creative Model</option>
                  <option value="analytical-model">Analytical Model</option>
                  <option value="companion-model">Companion Model</option>
                  <option value="IO-model">IO Model</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-white text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter a description for your Intelligent NFT"
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none text-white"
                />
              </div>

              <div className="pt-4">
                <Button
                  onClick={mintNFT}
                  disabled={!formData.file || !formData.name || isLoading || !connected}
                  className="w-auto px-51 py-2 bg-white hover:bg-gray-100 text-black rounded-md float-right"
                >
                  {isLoading ? "Minting..." : "Mint INFT"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}