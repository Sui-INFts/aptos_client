# Nodit Integration for SBT Images (The Storage Solution)

So I needed a way to store SBT images when users mint their credit score tokens, and Nodit seemed like a good choice for decentralized storage. Here's how I integrated it and what I learned.

## What is Nodit?

Nodit is a decentralized storage platform for NFT/SBT metadata and images. I'm using it to store credit score SBT images because it's reliable and doesn't require complex setup.

## The Setup Process

### Getting Your API Key

1. Go to [Nodit](https://nodit.io) and sign up
2. Get your API key from the dashboard
3. Add it to your environment variables:

```bash
NEXT_PUBLIC_NODIT_API_KEY=your_key_here
```

**Note**: I have a fallback key for development, but you should use your own for production.

### My Configuration

I created a utility file to handle the Nodit client setup:

```typescript
// lib/nodit-utils.ts

export const getNoditConfig = () => {
  return {
    apiKey: process.env.NEXT_PUBLIC_NODIT_API_KEY || 'fallback_key',
    baseUrl: 'https://api.nodit.io',
    projectId: process.env.NEXT_PUBLIC_NODIT_PROJECT_ID || '',
  };
};

export const createNoditClient = () => {
  const config = getNoditConfig();
  return new NoditClient({
    apiKey: config.apiKey,
    baseUrl: config.baseUrl,
  });
};
```

## The Image Upload Flow

### 1. User Uploads Image (The Old Way)

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

### 2. Upload to Nodit (The Storage Part)

```typescript
const uploadToNodit = async (file: File, metadata: any) => {
  try {
    const client = createNoditClient();
    
    const result = await client.uploadImage(file, {
      name: `sbt-${Date.now()}`,
      description: 'INFTs Credit Score SBT',
      attributes: metadata,
    });
    
    if (result.success) {
      return result.url;
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    console.error('Nodit upload error:', error);
    throw error;
  }
};
```

### 3. Generate Metadata (The JSON Part)

```typescript
const generateMetadata = (imageUrl: string, userAddress: string, score: number) => {
  return {
    name: 'INFTs Credit Score SBT',
    description: `Credit Score SBT for ${userAddress}`,
    image: imageUrl,
    attributes: [
      {
        trait_type: 'Credit Score',
        value: score,
      },
      {
        trait_type: 'Wallet Address',
        value: userAddress,
      },
      {
        trait_type: 'Mint Date',
        value: new Date().toISOString(),
      },
    ],
  };
};
```

## The New Approach (Permanent Image)

After dealing with upload issues, I switched to a permanent image approach:

### 1. Static Image Import

```typescript
import sbtImageSrc from "@/assets/image/SBT.png";

// Use the image
<img src={sbtImageSrc.src} alt="INFTs SBT Image" />
```

### 2. Fallback System

```typescript
const handleUploadImage = async () => {
  try {
    // Try to upload to Nodit
    const result = await uploadToNodit(file, metadata);
    
    if (result.success) {
      setUploadedImageUrl(result.url); // Use Nodit URL
    } else {
      setUploadedImageUrl(sbtImageSrc.src); // Fallback to permanent
    }
  } catch (error) {
    setUploadedImageUrl(sbtImageSrc.src); // Fallback to permanent
  }
};
```

### 3. Always Available Minting

```typescript
const handleMintSBT = async () => {
  // Ensure we always have an image URL
  if (!uploadedImageUrl) {
    setUploadedImageUrl(sbtImageSrc.src);
  }
  
  // Proceed with minting
  const metadata = generateMetadata(uploadedImageUrl, userAddress, score);
  await mintSBT(metadata);
};
```

## Error Handling (Because Things Break)

I added comprehensive error handling for various failure scenarios:

```typescript
const handleNoditError = (error: any) => {
  console.error('Nodit Error:', error);
  
  if (error.status === 401) {
    return 'API key is invalid. Please check your configuration.';
  } else if (error.status === 413) {
    return 'Image file is too large. Please use a smaller image.';
  } else if (error.status === 429) {
    return 'Rate limit exceeded. Please try again later.';
  } else if (error.status >= 500) {
    return 'Nodit service is temporarily unavailable.';
  } else {
    return 'An error occurred while uploading your image.';
  }
};
```

## File Validation (Prevent Issues)

I added validation to prevent common issues:

```typescript
const validateImageFile = (file: File) => {
  // Check file size
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be under 5MB');
  }
  
  // Check file type
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }
  
  // Check file extension
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  
  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error('Unsupported image format');
  }
  
  return true;
};
```

## The Upload Component (The UI Part)

I created a component to handle the upload process:

```typescript
// components/SBTImageUpload.tsx
export function SBTImageUpload({ onImageUploaded }: { onImageUploaded: (url: string) => void }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      validateImageFile(file);
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const url = await uploadToNodit(selectedFile, {});
      setUploadedUrl(url);
      onImageUploaded(url);
      toast.success('Image uploaded successfully!');
    } catch (error) {
      toast.error(handleNoditError(error));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="sbt-image-upload">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        id="image-upload"
      />
      <label htmlFor="image-upload" className="upload-button">
        Select Image
      </label>
      
      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="Preview" className="preview-image" />
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="upload-button"
          >
            {uploading ? 'Uploading...' : 'Upload to Nodit'}
          </button>
        </div>
      )}
      
      {uploadedUrl && (
        <div className="success-message">
          ✅ Image uploaded successfully!
        </div>
      )}
    </div>
  );
}
```

## Testing the Integration

### Manual Testing
1. **Upload valid image** - Should work without issues
2. **Upload invalid file** - Should show error message
3. **Upload large file** - Should show size error
4. **Test fallback** - Should use permanent image if upload fails
5. **Test metadata** - Should generate correct JSON

### Edge Cases
- **No internet connection** - Should fallback gracefully
- **Nodit service down** - Should use permanent image
- **Invalid API key** - Should show error message
- **Rate limiting** - Should handle gracefully

## Common Issues I Ran Into

### 1. API Key Not Working
- **Problem**: 401 Unauthorized errors
- **Solution**: Check your API key and make sure it's properly set

### 2. File Size Issues
- **Problem**: Images too large for upload
- **Solution**: Added file size validation and compression

### 3. CORS Issues
- **Problem**: Browser blocking requests
- **Solution**: Check Nodit CORS settings and request headers

### 4. Metadata Format Issues
- **Problem**: Invalid JSON metadata
- **Solution**: Added proper validation and formatting

## The Fallback System (The Smart Part)

I implemented a three-level fallback system:

1. **Nodit Upload Success** → Use Nodit URL (best case)
2. **Nodit Upload Fails** → Use permanent image URL (still works)
3. **No Upload Attempted** → Use permanent image URL (always works)

This ensures users can always mint their SBT, even if Nodit is having issues.

## Performance Optimization

I added several optimizations:

```typescript
// Image compression before upload
const compressImage = (file: File, maxSize: number = 1024 * 1024) => {
  return new Promise<File>((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const ratio = Math.sqrt(maxSize / (img.width * img.height));
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        resolve(new File([blob], file.name, { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.8);
    };
    
    img.src = URL.createObjectURL(file);
  });
};
```

## The Result

The Nodit integration is working well! Users can:
- **Upload custom images** for their SBTs
- **Fallback to permanent image** if upload fails
- **Always mint their SBT** regardless of upload status
- **Get proper error messages** when things go wrong

## Best Practices I Learned

1. **Always have a fallback** - Things will break
2. **Validate everything** - Prevent issues before they happen
3. **Handle errors gracefully** - Users need clear feedback
4. **Optimize for performance** - Compress images before upload
5. **Test edge cases** - Network issues, service outages, etc.

## The Bottom Line

Nodit integration was useful for storing custom images, but the permanent image approach is more reliable. The fallback system ensures users can always mint their SBT, which is the most important thing.

*The combination of Nodit for custom images and permanent image fallback gives users the best of both worlds - customization when possible, reliability always.*