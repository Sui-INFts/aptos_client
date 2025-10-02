"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createNoditClient, validateImageFile } from "@/lib/nodit-utils";
import { useToast } from "@/components/ui/use-toast";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

interface UploadResult {
  success: boolean;
  url?: string;
  fileId?: string;
  error?: string;
  storage?: string;
}

export default function TestUploadPage() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);

  const noditClient = createNoditClient();

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
    setUploadResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      const result = await noditClient.uploadImage(selectedFile, {
        test: true,
        timestamp: Date.now(),
      });

      setUploadResult(result);

      if (result.success) {
        toast({
          title: "Upload Successful",
          description: result.url?.startsWith('data:') 
            ? "Image stored locally (Nodit unavailable)" 
            : "Image uploaded to Nodit",
        });
      } else {
        toast({
          title: "Upload Failed",
          description: result.error || "Unknown error",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Test Image Upload</h1>
        <p className="text-xl text-muted-foreground">
          Test the Nodit integration with fallback storage
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Test
            </CardTitle>
            <CardDescription>
              Test image upload with Nodit integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full p-2 border rounded"
              />
            </div>

            {selectedFile && (
              <div className="p-3 bg-muted rounded">
                <p className="text-sm font-medium">Selected File:</p>
                <p className="text-xs text-muted-foreground">
                  {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>
            )}

            <Button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full"
            >
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>

            {uploadResult && (
              <div className={`p-4 rounded-lg ${
                uploadResult.success 
                  ? 'bg-green-50 dark:bg-green-950' 
                  : 'bg-red-50 dark:bg-red-950'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {uploadResult.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    uploadResult.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {uploadResult.success ? "Upload Successful" : "Upload Failed"}
                  </span>
                </div>
                
                {uploadResult.success && (
                  <div className="space-y-2">
                    <div className="text-xs">
                      <strong>Storage Type:</strong> {uploadResult.url?.startsWith('data:') ? 'Local Fallback' : 'Nodit'}
                    </div>
                    <div className="text-xs">
                      <strong>File ID:</strong> {uploadResult.fileId}
                    </div>
                    {!uploadResult.url?.startsWith('data:') && (
                      <div className="text-xs break-all">
                        <strong>URL:</strong> {uploadResult.url}
                      </div>
                    )}
                  </div>
                )}
                
                {!uploadResult.success && (
                  <div className="text-xs text-red-700 dark:text-red-300">
                    <strong>Error:</strong> {uploadResult.error}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
