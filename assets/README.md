# Assets Folder

This folder contains static assets for the INFTs application.

## Structure

```
assets/
├── images/          # Image files (PNG, JPG, SVG, etc.)
├── icons/           # Icon files
├── logos/           # Logo files
└── README.md        # This file
```

## Usage

### Importing Images in Components

```typescript
import myImage from '@/assets/images/my-image.png';

// In your component
<img src={myImage.src} alt="Description" />
```

### Using Next.js Image Component

```typescript
import Image from 'next/image';
import myImage from '@/assets/images/my-image.png';

// In your component
<Image 
  src={myImage} 
  alt="Description"
  width={500}
  height={300}
/>
```

### Direct Path Reference

```typescript
// If image is in public folder
<img src="/images/my-image.png" alt="Description" />
```

## Best Practices

1. **Naming**: Use kebab-case for file names (e.g., `user-profile.png`)
2. **Optimization**: Compress images before adding them
3. **Formats**: 
   - Use SVG for icons and logos
   - Use PNG for images with transparency
   - Use JPG for photos
   - Use WebP for better compression
4. **Organization**: Group related images in subfolders

## Image Types

### `/images/`
General images used throughout the application:
- Backgrounds
- Hero images
- Feature images
- Illustrations

### `/icons/`
Small icon files:
- UI icons
- Social media icons
- Feature icons

### `/logos/`
Brand and partner logos:
- INFTs logo variants
- Partner logos
- Blockchain logos

## TypeScript Support

If you need TypeScript support for image imports, ensure you have proper type declarations:

```typescript
// types/images.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
```

## Notes

- Images in this folder are bundled with your application
- For public assets accessible via URL, use the `/public` folder instead
- This folder is imported via webpack/Next.js module system
- Consider using Next.js Image optimization for better performance

