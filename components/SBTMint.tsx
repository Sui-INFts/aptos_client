"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { getAptosClient, getContractConfig, CreditScoreDataOrNull } from "@/lib/aptos-utils";
import { createNoditClient, generateSBTImageMetadata } from "@/lib/nodit-utils";
import { Loader2, Shield, CheckCircle, ExternalLink } from "lucide-react";
import { formatAddressForContract } from "@/lib/address-utils";
import sbtImageSrc from "@/assets/image/SBT.png";

export function SBTMint() {
  const { account, signTransaction } = useWallet();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
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
        const addressString = formatAddressForContract(account.address);
        
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

        // Get user's SBT object
        const userSbt = await client.view({
          payload: {
            function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
            functionArguments: [addressString],
          },
        });

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
          const tokenObjString = String(tokenObj); // Convert tokenObj to string

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

          return {
            score: Number(score[0]),
            lastUpdated: Number(lastUpdated[0]),
            mintTimestamp: Number(mintTimestamp[0]),
            hasMinted: true,
            tokenObject: tokenObjString,
          };
        }

        return {
          score: 0,
          lastUpdated: 0,
          mintTimestamp: 0,
          hasMinted: false,
        };
      } catch (error) {
        console.error("Error fetching credit score data:", error);
        return null;
      }
    },
    enabled: !!account,
    retry: false,
  });

  const handleUploadImage = async () => {
    if (!account) return;

    setIsUploading(true);
    try {
      // Convert the permanent SBT image to a File object for upload
      const response = await fetch(sbtImageSrc.src);
      const blob = await response.blob();
      const file = new File([blob], 'sbt-image.png', { type: 'image/png' });

      const metadata = generateSBTImageMetadata(
        account.address.toStringLong(),
        creditScoreData?.score || 0
      );

      const result = await noditClient.uploadImage(file, metadata);
      
      if (result.success && result.url) {
        setUploadedImageUrl(result.url);
        const isFallback = result.url.startsWith('data:');
        toast({
          title: "Success!",
          description: isFallback 
            ? "SBT image ready (using fallback storage)" 
            : "SBT image uploaded to Nodit successfully",
          variant: "default",
        });
      } else {
        // Even if upload fails, we can still mint with the permanent image
        setUploadedImageUrl(sbtImageSrc.src);
        toast({
          title: "Image Ready",
          description: "Using permanent SBT image (upload failed but minting still available)",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      // Set fallback to permanent image
      setUploadedImageUrl(sbtImageSrc.src);
      toast({
        title: "Using Permanent Image",
        description: "Upload failed, but you can still mint with the permanent SBT image",
        variant: "default",
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

    // Ensure we have an image URL (either uploaded or permanent)
    if (!uploadedImageUrl) {
      setUploadedImageUrl(sbtImageSrc.src);
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
      } catch (buildError) {
        console.error("Transaction build failed:", buildError);
        throw new Error(`Failed to build transaction: ${buildError instanceof Error ? buildError.message : 'Unknown error'}`);
      }

      if (!transaction) {
        throw new Error("Transaction build returned null");
      }

      console.log("Transaction built successfully:", transaction);
      
      // Sign the transaction
      const signedTransaction = await signTransaction({ transactionOrPayload: transaction });
      console.log("Transaction signed:", signedTransaction);
      
      // Submit the transaction
      const committedTransaction = await client.transaction.submit.simple({
        transaction,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        senderAuthenticator: (signedTransaction as any).authenticator || signedTransaction,
      });
      
      if (!committedTransaction?.hash) {
        throw new Error("Transaction submission failed - no hash returned");
      }
      
      console.log("Transaction submitted:", committedTransaction.hash);
      
      // Wait for transaction to complete
      await client.waitForTransaction({ transactionHash: committedTransaction.hash });
      
      toast({
        title: "Success!",
        description: "Credit Score SBT minted successfully",
      });
      
      // Invalidate and refetch the credit score data
      queryClient.invalidateQueries({ queryKey: ["creditScore", account.address] });
      
      // Also try to refetch immediately
      setTimeout(() => {
        queryClient.refetchQueries({ queryKey: ["creditScore", account.address] });
      }, 2000); // Wait 2 seconds for transaction to be indexed
      
    } catch (error) {
      console.error("Mint SBT error:", error);
      toast({
        title: "Mint Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsMinting(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (!account) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">Please connect your wallet to mint an SBT</p>
        </CardContent>
      </Card>
    );
  }

  if (creditScoreData?.hasMinted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Credit Score SBT Already Minted
          </CardTitle>
          <CardDescription>
            You have already minted your Credit Score SBT
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          
          <div className="text-center">
            <img
              src={sbtImageSrc.src}
              alt="Your SBT"
              className="max-w-full max-h-48 rounded-lg mx-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Your Credit Score SBT with permanent INFTs image
            </p>
            <Button
              variant="outline"
              onClick={() => window.open(`https://explorer.aptoslabs.com/account/${account.address.toString()}?network=testnet`, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Aptos Explorer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Credit Score SBT Mint
        </CardTitle>
        <CardDescription>
          Mint your Credit Score SBT with the permanent INFTs image
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* SBT Image Preview */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            <div className="space-y-4">
              <div className="relative inline-block">
                <img
                  src={sbtImageSrc.src}
                  alt="INFTs SBT Image"
                  className="max-w-full max-h-48 rounded-lg mx-auto"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">INFTs Credit Score SBT</p>
                <p className="text-xs text-muted-foreground">
                  Permanent image for all Credit Score SBTs
                </p>
              </div>
              <Button
                onClick={handleUploadImage}
                disabled={isUploading}
                variant="outline"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Preparing Image...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    Prepare SBT Image
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Upload Status */}
        {uploadedImageUrl && (
          <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">SBT Image Ready</span>
            </div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">
              {uploadedImageUrl.startsWith('data:') 
                ? "Using fallback storage (Nodit unavailable)" 
                : "Image uploaded to Nodit successfully"}
            </p>
          </div>
        )}

        {/* Mint Button */}
        <div className="space-y-4">
          <Button
            onClick={handleMintSBT}
            disabled={isMinting}
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
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Mint fee: {Number(contractConfig.defaultMintFee)} APT
            </p>
            <p className="text-xs text-muted-foreground">
              This will create a non-transferable Soulbound Token
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
