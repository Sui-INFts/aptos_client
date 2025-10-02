"use client";

import { useState, useRef } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { getAptosClient, getContractConfig, CreditScoreDataOrNull } from "@/lib/aptos-utils";
import { createNoditClient, validateImageFile, generateSBTImageMetadata } from "@/lib/nodit-utils";
import { Loader2, Upload, Image as ImageIcon, Shield, X } from "lucide-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";

export function SBTImageUpload() {
  const { account, signTransaction } = useWallet();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const contractConfig = getContractConfig();
  const noditClient = createNoditClient();

  // Fetch user's credit score data
  const { data: creditScoreData, isLoading } = useQuery<CreditScoreDataOrNull>({
    queryKey: ["creditScore", account?.address],
    queryFn: async () => {
      if (!account) return null;
      
      const client = getAptosClient();
      
      try {
        // Convert account address to proper format
        const userAddress = AccountAddress.from(account.address);
        const addressString = userAddress.toString();
        
        const hasMinted = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
            functionArguments: [addressString],
          },
        });

        if (!hasMinted[0]) {
          return {
            score: 0,
            lastUpdated: 0,
            mintTimestamp: 0,
            hasMinted: false,
          };
        }

        const userSbt = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
            functionArguments: [addressString],
          },
        });

        if (userSbt[0]) {
          const tokenObj = userSbt[0];
          
          const score = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_score`,
              functionArguments: [tokenObj],
            },
          });

          const lastUpdated = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_last_updated`,
              functionArguments: [tokenObj],
            },
          });

          const mintTimestamp = await client.view({
            payload: {
              function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_mint_timestamp`,
              functionArguments: [tokenObj],
            },
          });

          return {
            score: Number(score[0]),
            lastUpdated: Number(lastUpdated[0]),
            mintTimestamp: Number(mintTimestamp[0]),
            hasMinted: true,
            tokenObject: String(tokenObj),
          };
        }

        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      } catch (error) {
        console.error("Error fetching credit score:", error);
        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      }
    },
    enabled: !!account,
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validation = validateImageFile(file);
    if (!validation.valid) {
      toast({
        title: "Invalid File",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadImage = async () => {
    if (!selectedFile || !account) return;

    setIsUploading(true);
    try {
      const metadata = generateSBTImageMetadata(
        account.address.toStringLong(),
        creditScoreData?.score || 0
      );

      const result = await noditClient.uploadImage(selectedFile, metadata);
      
      if (result.success && result.url) {
        setUploadedImageUrl(result.url);
        const isFallback = result.url.startsWith('data:');
        toast({
          title: "Success!",
          description: isFallback 
            ? "Image uploaded using fallback storage (Nodit unavailable)" 
            : "Image uploaded to Nodit successfully",
          variant: isFallback ? "default" : "default",
        });
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload image to Nodit",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleMintSBT = async () => {
    if (!account || !signTransaction) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsMinting(true);
    try {
      const client = getAptosClient();
      const contractConfig = getContractConfig();
      
      console.log("Contract config:", contractConfig);
      console.log("Account address:", account.address);
      console.log("Account address type:", typeof account.address);
      console.log("Account address toString:", account.address.toString());
      
      // First, verify the contract exists by calling a view function
      try {
        const admin = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_admin`,
            functionArguments: [],
          },
        });
        console.log("Contract is accessible, admin:", admin);
      } catch (viewError) {
        console.error("Contract view function failed:", viewError);
        throw new Error(`Contract not accessible: ${viewError instanceof Error ? viewError.message : 'Unknown error'}`);
      }
      
      // Build transaction - user pays the fee
      console.log("Building transaction with:", {
        sender: account.address,
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
        functionArguments: [],
      });

      let transaction;
      try {
        transaction = await client.transaction.build.simple({
          sender: account.address.toString(),
          data: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
            functionArguments: [],
          },
          options: {
            maxGasAmount: 10_000,
          },
        });
        console.log("Generated transaction:", transaction);
        console.log("Transaction type:", typeof transaction);
        console.log("Transaction keys:", transaction ? Object.keys(transaction) : "transaction is null/undefined");
      } catch (buildError) {
        console.error("Transaction build error:", buildError);
        throw new Error(`Failed to build transaction: ${buildError instanceof Error ? buildError.message : 'Unknown error'}`);
      }

      if (!transaction) {
        throw new Error("Failed to generate transaction - transaction is null/undefined");
      }

      // Sign transaction
      console.log("Signing transaction...");
      const signedTransaction = await signTransaction({
        transactionOrPayload: transaction,
      });

      console.log("Signed transaction:", signedTransaction);
      console.log("Signed transaction type:", typeof signedTransaction);
      console.log("Signed transaction keys:", signedTransaction ? Object.keys(signedTransaction) : "signedTransaction is null/undefined");

      // Check if signedTransaction has the authenticator property
      if (!signedTransaction || typeof signedTransaction !== 'object') {
        throw new Error("Invalid signed transaction structure");
      }

      // Submit transaction manually using the authenticator
      console.log("Submitting transaction...");
      const committedTransaction = await client.transaction.submit.simple({
        transaction,
        senderAuthenticator: (signedTransaction as { authenticator?: unknown }).authenticator || signedTransaction,
      });

      console.log("Committed transaction:", committedTransaction);
      console.log("Transaction hash:", committedTransaction?.hash);

      // Check if we have a valid hash
      if (!committedTransaction?.hash) {
        throw new Error("Transaction hash is undefined. Transaction may not have been submitted successfully.");
      }

      // Wait for transaction completion
      const executedTransaction = await client.waitForTransaction({
        transactionHash: committedTransaction.hash,
      });

      console.log("Executed transaction:", executedTransaction);

      toast({
        title: "Success!",
        description: "Credit Score SBT minted successfully",
      });

      // Invalidate and refetch data
      queryClient.invalidateQueries({ queryKey: ["creditScore", account.address] });
    } catch (error) {
      console.error("Error minting SBT:", error);
      toast({
        title: "Error",
        description: `Failed to mint Credit Score SBT: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          SBT Image Upload & Mint
        </CardTitle>
        <CardDescription>
          Upload an image for your Credit Score SBT and mint it
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Credit Score Display */}
        {creditScoreData?.hasMinted && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Current Credit Score</span>
              <Badge variant="secondary" className="text-lg font-bold">
                {creditScoreData.score}/1000
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Last updated: {new Date(creditScoreData.lastUpdated * 1000).toLocaleDateString()}
            </div>
          </div>
        )}

        {/* File Upload Section */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            {!selectedFile ? (
              <div className="space-y-4">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Upload SBT Image</p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF, or WebP (max 10MB)
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={creditScoreData?.hasMinted}
                >
                  Choose File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={creditScoreData?.hasMinted}
                />
              </div>
            ) : (
              <div className="space-y-4">
                {previewUrl && (
                  <div className="relative inline-block">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full max-h-48 rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                      onClick={handleRemoveFile}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                <div className="text-sm">
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handleRemoveFile}
                    disabled={isUploading}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={handleUploadImage}
                    disabled={isUploading || !selectedFile}
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload to Nodit
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Upload Status */}
          {uploadedImageUrl && (
            <div className={`p-4 rounded-lg ${
              uploadedImageUrl.startsWith('data:') 
                ? 'bg-yellow-50 dark:bg-yellow-950' 
                : 'bg-green-50 dark:bg-green-950'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Shield className={`h-4 w-4 ${
                  uploadedImageUrl.startsWith('data:') 
                    ? 'text-yellow-600' 
                    : 'text-green-600'
                }`} />
                <span className={`text-sm font-medium ${
                  uploadedImageUrl.startsWith('data:') 
                    ? 'text-yellow-800 dark:text-yellow-200' 
                    : 'text-green-800 dark:text-green-200'
                }`}>
                  {uploadedImageUrl.startsWith('data:') 
                    ? 'Image Stored Locally (Nodit Unavailable)' 
                    : 'Image Uploaded Successfully'}
                </span>
              </div>
              <div className={`text-xs break-all ${
                uploadedImageUrl.startsWith('data:') 
                  ? 'text-yellow-700 dark:text-yellow-300' 
                  : 'text-green-700 dark:text-green-300'
              }`}>
                {uploadedImageUrl.startsWith('data:') 
                  ? 'Using local storage fallback' 
                  : uploadedImageUrl}
              </div>
            </div>
          )}

          {/* Mint SBT Button */}
          {!creditScoreData?.hasMinted && (
            <div className="pt-4 border-t">
              <Button
                onClick={handleMintSBT}
                disabled={isMinting || !uploadedImageUrl}
                className="w-full"
                size="lg"
              >
                {isMinting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Minting SBT...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    Mint Credit Score SBT
                  </>
                )}
              </Button>
              {!uploadedImageUrl && (
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Upload an image first to mint your SBT
                </p>
              )}
            </div>
          )}

          {creditScoreData?.hasMinted && (
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
              <Shield className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                SBT Already Minted
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                You have already minted your Credit Score SBT
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
