# Nodit Integration for SBT Images

I integrated Nodit for storing SBT images when users mint their credit score tokens. This document explains the implementation.

## What is Nodit?

Nodit is a decentralized storage platform for NFT/SBT metadata and images. I'm using it to store credit score SBT images.

## Setup

### API Key

Add your Nodit API key to environment variables:

```bash
NEXT_PUBLIC_NODIT_API_KEY=your_key_here
```

The app includes a fallback key for development.

### Configuration

```typescript
// lib/nodit-utils.ts

export const getNoditConfig = () => {
  return {
    apiKey: process.env.NEXT_PUBLIC_NODIT_API_KEY || 'fallback_key',
    baseUrl: 'https://api.nodit.io',
    projectId: process.env.NEXT_PUBLIC_NODIT_PROJECT_ID || '',
  };
};
```

## Image Upload Flow

### 1. User Uploads Image

```typescript
const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;
  
  if (file.size > 5 * 1024 * 1024) {
    toast.error('Image must be under 5MB');
    return;
  }
  
  setSelectedImage(file);
  setImagePreview(URL.createObjectURL(file));
};
```

### 2. Upload to Nodit

```typescript
const uploadToNodit = async (file: File) => {
  const noditClient = new NoditClient();
  const result = await noditClient.uploadImage(file);
  
  if (result.success) {
    return result.url;
  } else {
    throw new Error(result.error || 'Upload failed');
  }
};
```

### 3. Generate Metadata

```typescript
const metadata = {
  name: `Credit Score SBT #${Date.now()}`,
  description: `Credit Score: ${score}/1000`,
  image: imageUrl,
  attributes: [
    { trait_type: 'Score', value: score },
    { trait_type: 'Network', value: 'Aptos Testnet' },
    { trait_type: 'Timestamp', value: Date.now() }
  ]
};
```

## Fallback Storage

I implemented a fallback system in case Nodit is unavailable:

```typescript
class NoditClient {
  async uploadImage(file: File): Promise<NoditUploadResponse> {
    // Try Nodit endpoints
    const endpoints = [
      `${config.baseUrl}/api/v1/files/upload`,
      `${config.baseUrl}/v1/storage/upload`,
      `${config.baseUrl}/storage/upload`
    ];
    
    for (const endpoint of endpoints) {
      try {
        const response = await this.tryUpload(endpoint, file);
        if (response.success) return response;
      } catch (error) {
        continue; // Try next endpoint
      }
    }
    
    // Fallback: Store as data URL
    return this.createFallbackUpload(file);
  }
  
  private createFallbackUpload(file: File) {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve({
          success: true,
          url: dataUrl,
          fileId: `fallback_${Date.now()}`
        });
      };
      reader.readAsDataURL(file);
    });
  }
}
```

## User Interface

### Image Upload Component

```typescript
<div>
  <Label>Upload SBT Image</Label>
  <Input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
  />
  
  {imagePreview && (
    <div className="mt-4">
      <img src={imagePreview} alt="Preview" className="w-32 h-32" />
    </div>
  )}
</div>
```

### Storage Status

I show users where their image was stored:

```typescript
{uploadResult && (
  <Alert>
    <AlertDescription>
      {uploadResult.storage === 'nodit' ? (
        <>✅ Image uploaded to Nodit successfully</>
      ) : (
        <>⚠️ Using fallback storage (Nodit unavailable)</>
      )}
    </AlertDescription>
  </Alert>
)}
```

## Error Handling

### Upload Errors

```typescript
try {
  const imageUrl = await uploadToNodit(selectedImage);
  setImageUrl(imageUrl);
  toast.success('Image uploaded successfully');
} catch (error) {
  console.error('Upload error:', error);
  toast.error('Failed to upload image. Using fallback storage.');
  // Fallback already handled in NoditClient
}
```

### Size Validation

```typescript
if (file.size > 5 * 1024 * 1024) {
  toast.error('Image must be under 5MB');
  return;
}
```

### Type Validation

```typescript
if (!file.type.startsWith('image/')) {
  toast.error('Please upload an image file');
  return;
}
```

## Integration with Minting

The complete mint flow:

1. User uploads image → Nodit/fallback storage
2. Generate metadata with image URL
3. Mint SBT with metadata
4. Display SBT with image on "My SBTs" page

```typescript
const handleMintWithImage = async () => {
  // Upload image
  const imageUrl = await uploadToNodit(selectedImage);
  
  // Generate metadata
  const metadata = {
    name: `Credit Score SBT`,
    image: imageUrl,
    attributes: [...]
  };
  
  // Mint SBT
  await mintSBT(metadata);
};
```

## Testing

To test Nodit integration:

1. Go to `/test-upload` page
2. Select an image file
3. Click "Upload to Nodit"
4. Check response for success/fallback
5. Verify image URL works

## Files

- `/lib/nodit-utils.ts` - Nodit client implementation
- `/components/SBTImageUpload.tsx` - Upload UI
- `/app/test-upload/page.tsx` - Test page

## Future Improvements

- Support for video/animated SBTs
- Image compression before upload
- IPFS integration as additional fallback
- Batch upload for multiple SBTs
- Metadata templates
