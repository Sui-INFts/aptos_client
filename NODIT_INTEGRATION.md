# Nodit Integration for SBT Image Storage

This document explains how to integrate Nodit for storing images when users mint Credit Score SBTs.

## Overview

The integration allows users to:
1. Upload custom images for their Credit Score SBTs
2. Store images securely on Nodit
3. Mint SBTs with image metadata
4. View and manage their SBTs with associated images

## Setup Instructions

### 1. Nodit Account Setup

1. **Sign up for Nodit**: Visit [https://id.lambda256.io/signup](https://id.lambda256.io/signup)
2. **Create a project**: Your first project "My First Project" will be created automatically
3. **Get your API Key**: Navigate to the project overview to find your API Key
4. **Get your Project ID**: Note down your project ID from the dashboard

### 2. Environment Variables

Create a `.env.local` file in your `aptos_client` directory with the following variables:

```env
# Aptos Configuration
NEXT_PUBLIC_APP_NETWORK=testnet
NEXT_PUBLIC_APTOS_API_KEY=your_aptos_api_key_here

# Nodit Configuration
NEXT_PUBLIC_NODIT_API_KEY=your_nodit_api_key_here
NEXT_PUBLIC_NODIT_BASE_URL=https://api.nodit.io
NEXT_PUBLIC_NODIT_PROJECT_ID=your_nodit_project_id_here
```

### 3. Install Dependencies

The required dependencies are already included in the project:
- `@aptos-labs/ts-sdk` - For Aptos blockchain interactions
- `@aptos-labs/wallet-adapter-react` - For wallet connections

## Integration Files

### 1. Nodit Utilities (`lib/nodit-utils.ts`)

Contains the `NoditClient` class with methods for:
- `uploadImage()` - Upload single image to Nodit
- `uploadImages()` - Upload multiple images in batch
- `deleteImage()` - Delete image from Nodit
- `getFileInfo()` - Get file information

### 2. SBT Image Upload Component (`components/SBTImageUpload.tsx`)

Main component that provides:
- File selection and validation
- Image preview
- Upload to Nodit
- SBT minting with image metadata
- Progress indicators and error handling

### 3. SBT Mint Page (`app/sbt-mint/page.tsx`)

Dedicated page for the complete SBT minting flow with image upload.

## Usage Flow

### 1. User Experience

1. **Navigate to Mint SBT page**: `/sbt-mint`
2. **Connect wallet**: Use the wallet selector
3. **Upload image**: Select and upload an image file
4. **Upload to Nodit**: Image is stored on Nodit infrastructure
5. **Mint SBT**: Mint the Credit Score SBT with image metadata
6. **View result**: SBT is minted and associated with the uploaded image

### 2. Technical Flow

```typescript
// 1. User selects image file
const file = event.target.files[0];

// 2. Validate file
const validation = validateImageFile(file);

// 3. Upload to Nodit
const noditClient = createNoditClient();
const result = await noditClient.uploadImage(file, metadata);

// 4. Mint SBT with image URL
const transaction = await getAptosClient().transaction.build.simple({
  sender: account.address,
  data: formatFunctionCall("mint_sbt"),
});
```

## API Integration

### Nodit API Endpoints

The integration uses these Nodit API endpoints:

- **Upload**: `POST /api/v1/files/upload`
- **Delete**: `DELETE /api/v1/files/{fileId}`
- **Get Info**: `GET /api/v1/files/{fileId}`

### Authentication

All API calls include:
- `Authorization: Bearer {API_KEY}`
- `X-Project-ID: {PROJECT_ID}`

## Image Metadata

When uploading images, the following metadata is included:

```typescript
{
  type: 'credit_score_sbt',
  userAddress: '0x...',
  creditScore: 750,
  timestamp: 1234567890,
  description: 'Credit Score SBT for 0x... with score 750'
}
```

## File Validation

Images are validated for:
- **File size**: Maximum 10MB
- **File types**: JPEG, PNG, GIF, WebP
- **File format**: Standard image formats

## Error Handling

The integration includes comprehensive error handling for:
- File validation errors
- Upload failures
- Network issues
- Contract interaction errors
- Wallet connection problems

## Security Considerations

1. **API Keys**: Store securely in environment variables
2. **File Validation**: Validate all uploaded files
3. **Size Limits**: Enforce file size restrictions
4. **Type Checking**: Only allow image file types
5. **User Authentication**: Require wallet connection

## Testing

### Test the Integration

1. **Set up environment variables**
2. **Start the development server**: `npm run dev`
3. **Navigate to**: `http://localhost:3000/sbt-mint`
4. **Connect your wallet**
5. **Upload an image**
6. **Mint an SBT**

### Debug Steps

1. Check browser console for errors
2. Verify environment variables are set
3. Test Nodit API connectivity
4. Check wallet connection
5. Verify contract deployment

## Troubleshooting

### Common Issues

1. **"Cannot find module '@thalalabs/surf'"**
   - Solution: Run `npm install @thalalabs/surf`

2. **"Nodit upload failed"**
   - Check API key and project ID
   - Verify network connectivity
   - Check file size and type

3. **"Wallet not connected"**
   - Ensure wallet is connected to testnet
   - Check wallet adapter configuration

4. **"Contract interaction failed"**
   - Verify contract is deployed
   - Check gas limits
   - Ensure sufficient balance

## Next Steps

1. **Batch Upload**: Implement batch image uploads
2. **Image Processing**: Add image resizing/optimization
3. **Metadata Enhancement**: Add more detailed metadata
4. **Analytics**: Track upload and mint statistics
5. **Mobile Optimization**: Improve mobile experience

## Support

For issues with:
- **Nodit**: Check [Nodit documentation](https://developer.nodit.io)
- **Aptos**: Check [Aptos documentation](https://aptos.dev)
- **This integration**: Check the code comments and error messages
