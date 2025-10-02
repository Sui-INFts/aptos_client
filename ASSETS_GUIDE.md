# Assets Folder Guide (The Image Management System)

So I needed a better way to organize all the images and assets in my project. Here's how I set it up and what you need to know.

## The Folder Structure (The Organization)

```
aptos_client/assets/
├── images/          # New folder for general images
├── icons/           # New folder for icon files
├── logos/           # New folder for logo files
├── image/           # Existing folder with hero images
│   ├── Hero.png
│   ├── Hero0.png
│   ├── hero1.png
│   ├── hero2.png
│   ├── hero3.png
│   ├── hero5.png
│   ├── Hero6.png
│   └── nfthero.png
├── logo/            # Existing folder with logos
│   ├── DarkLogo.png
│   └── Logo.png
└── README.md
```

## What I Created (The New Stuff)

### New Folders

1. **`/assets/images/`** - For new general images
2. **`/assets/icons/`** - For icon files (SVG, PNG icons)
3. **`/assets/logos/`** - For new logo variants

### Existing Folders (What I Kept)

1. **`/assets/image/`** - Contains existing hero images
2. **`/assets/logo/`** - Contains existing logo files

## How to Use It (The Examples)

### 1. Import from Existing Hero Images

```typescript
import heroImage from '@/assets/image/Hero.png';
import nftHero from '@/assets/image/nfthero.png';

// In your component
<img src={heroImage} alt="Hero" />
<img src={nftHero} alt="NFT Hero" />
```

### 2. Import from New Images Folder

```typescript
import newImage from '@/assets/images/new-image.png';

// In your component
<img src={newImage} alt="New Image" />
```

### 3. Import Icons

```typescript
import customIcon from '@/assets/icons/custom-icon.svg';

// In your component
<img src={customIcon} alt="Custom Icon" />
```

### 4. Import Logos

```typescript
import newLogo from '@/assets/logos/new-logo.png';

// In your component
<img src={newLogo} alt="New Logo" />
```

## The SBT Image System (The Special Case)

I created a permanent SBT image system:

### SBT Image Location
```
/assets/image/SBT.png
```

### How It Works
```typescript
import sbtImageSrc from "@/assets/image/SBT.png";

// Display the image
<img src={sbtImageSrc.src} alt="INFTs SBT Image" />

// Use for upload (converts to File object)
const response = await fetch(sbtImageSrc.src);
const blob = await response.blob();
const file = new File([blob], 'sbt-image.png', { type: 'image/png' });
```

## Image Optimization (The Performance Part)

### Next.js Image Component
```typescript
import Image from 'next/image';
import heroImage from '@/assets/image/Hero.png';

// Optimized image loading
<Image
  src={heroImage}
  alt="Hero Image"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

### Static Import Benefits
- **Build-time optimization** - Images are processed during build
- **Automatic compression** - Next.js optimizes images
- **Lazy loading** - Images load when needed
- **Responsive images** - Different sizes for different screens

## File Naming Conventions (The Organization)

### Images
- **Hero images**: `Hero.png`, `Hero0.png`, `hero1.png`, etc.
- **SBT images**: `SBT.png`
- **General images**: `descriptive-name.png`

### Icons
- **SVG icons**: `icon-name.svg`
- **PNG icons**: `icon-name.png`

### Logos
- **Main logos**: `Logo.png`, `DarkLogo.png`
- **Variants**: `logo-variant.png`

## Best Practices (What I Learned)

### 1. Use Static Imports
```typescript
// Good - Static import
import imageSrc from '@/assets/image/hero.png';

// Bad - Dynamic import (not optimized)
const imageSrc = '/assets/image/hero.png';
```

### 2. Optimize Images
- **Compress before adding** - Use tools like TinyPNG
- **Use appropriate formats** - PNG for graphics, JPG for photos
- **Consider WebP** - Better compression for modern browsers

### 3. Organize by Type
- **Hero images** in `/image/` folder
- **General images** in `/images/` folder
- **Icons** in `/icons/` folder
- **Logos** in `/logos/` folder

### 4. Use Descriptive Names
```typescript
// Good - Descriptive names
import heroImage from '@/assets/image/hero-main.png';
import sbtImage from '@/assets/image/sbt-default.png';

// Bad - Generic names
import image1 from '@/assets/image/img1.png';
import image2 from '@/assets/image/img2.png';
```

## The Build Process (How It Works)

### Static Imports
When you import an image statically, Next.js:
1. **Processes the image** during build time
2. **Optimizes it** for different screen sizes
3. **Generates multiple versions** (WebP, different sizes)
4. **Bundles it** with your app

### Dynamic Imports
For dynamic images, you need to handle optimization manually:
```typescript
// Dynamic image handling
const [imageSrc, setImageSrc] = useState('');

useEffect(() => {
  // Load image dynamically
  import('@/assets/image/dynamic-image.png').then((module) => {
    setImageSrc(module.default);
  });
}, []);
```

## Common Issues (And How to Fix Them)

### 1. Image Not Loading
- **Problem**: Image path is wrong
- **Solution**: Check the import path and file location

### 2. Build Errors
- **Problem**: Image file corrupted or wrong format
- **Solution**: Re-save the image in a supported format

### 3. Performance Issues
- **Problem**: Images too large
- **Solution**: Compress images before adding them

### 4. TypeScript Errors
- **Problem**: Type definitions missing
- **Solution**: Add type definitions for image imports

## The SBT Image Fallback System (The Smart Part)

I implemented a fallback system for SBT images:

### Three Levels of Fallback
1. **Nodit Upload Success** → Use Nodit URL
2. **Nodit Upload Fails** → Use permanent image URL
3. **No Upload Attempted** → Use permanent image URL

### Implementation
```typescript
const handleImageUpload = async () => {
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

## Testing the Assets (Make Sure They Work)

### Manual Testing
1. **Check imports** - Make sure all images import correctly
2. **Test display** - Verify images show up in components
3. **Check optimization** - Look at network tab for image loading
4. **Test fallbacks** - Verify fallback system works

### Build Testing
```bash
# Test build with assets
pnpm run build

# Check for asset-related errors
pnpm run lint
```

## The Result (What I Achieved)

The assets system now:
- ✅ **Organized properly** - Easy to find and manage
- ✅ **Optimized for performance** - Fast loading and good compression
- ✅ **Fallback ready** - Works even when external services fail
- ✅ **Type safe** - TypeScript support for all imports
- ✅ **Build optimized** - Images processed during build

## Best Practices Summary

1. **Use static imports** - Better performance and optimization
2. **Organize by type** - Keep related assets together
3. **Use descriptive names** - Easy to find and understand
4. **Optimize images** - Compress before adding
5. **Test thoroughly** - Make sure everything works

## The Bottom Line

Having a well-organized assets system makes development much easier. Images load faster, the code is cleaner, and it's easier to maintain. The fallback system ensures reliability, and the optimization keeps performance good.

*The assets system is now much more professional and maintainable. It's one of those things that doesn't seem important until you need it, but when you do, you're glad it's there.*