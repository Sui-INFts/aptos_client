// Nodit integration utilities for image storage
export interface NoditConfig {
  apiKey: string;
  baseUrl: string;
  projectId: string;
}

export interface NoditUploadResponse {
  success: boolean;
  url?: string;
  error?: string;
  fileId?: string;
}

export class NoditClient {
  private config: NoditConfig;

  constructor(config: NoditConfig) {
    this.config = config;
  }

  /**
   * Upload an image file to Nodit storage
   * @param file - The image file to upload
   * @param metadata - Optional metadata for the file
   * @returns Promise with upload response
   */
  async uploadImage(file: File, metadata?: Record<string, any>): Promise<NoditUploadResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      if (metadata) {
        formData.append('metadata', JSON.stringify(metadata));
      }

      const response = await fetch(`${this.config.baseUrl}/api/v1/files/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Project-ID': this.config.projectId,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        url: result.url,
        fileId: result.fileId,
      };
    } catch (error) {
      console.error('Nodit upload error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Upload multiple images in batch
   * @param files - Array of image files
   * @param metadata - Optional metadata for each file
   * @returns Promise with upload responses
   */
  async uploadImages(files: File[], metadata?: Record<string, any>[]): Promise<NoditUploadResponse[]> {
    const uploadPromises = files.map((file, index) => 
      this.uploadImage(file, metadata?.[index])
    );
    
    return Promise.all(uploadPromises);
  }

  /**
   * Delete an image from Nodit storage
   * @param fileId - The file ID to delete
   * @returns Promise with deletion response
   */
  async deleteImage(fileId: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${this.config.baseUrl}/api/v1/files/${fileId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Project-ID': this.config.projectId,
        },
      });

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Nodit delete error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Get file information
   * @param fileId - The file ID
   * @returns Promise with file information
   */
  async getFileInfo(fileId: string): Promise<any> {
    try {
      const response = await fetch(`${this.config.baseUrl}/api/v1/files/${fileId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Project-ID': this.config.projectId,
        },
      });

      if (!response.ok) {
        throw new Error(`Get file info failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Nodit get file info error:', error);
      throw error;
    }
  }
}

// Default Nodit configuration
export const getNoditConfig = (): NoditConfig => {
  return {
    apiKey: process.env.NEXT_PUBLIC_NODIT_API_KEY || '',
    baseUrl: process.env.NEXT_PUBLIC_NODIT_BASE_URL || 'https://api.nodit.io',
    projectId: process.env.NEXT_PUBLIC_NODIT_PROJECT_ID || '',
  };
};

// Create a default Nodit client instance
export const createNoditClient = (): NoditClient => {
  const config = getNoditConfig();
  return new NoditClient(config);
};

// Utility function to validate image file
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only JPEG, PNG, GIF, and WebP images are allowed' };
  }
  
  return { valid: true };
};

// Utility function to generate image metadata for SBT
export const generateSBTImageMetadata = (userAddress: string, creditScore: number) => {
  return {
    type: 'credit_score_sbt',
    userAddress,
    creditScore,
    timestamp: Date.now(),
    description: `Credit Score SBT for ${userAddress} with score ${creditScore}`,
  };
};
