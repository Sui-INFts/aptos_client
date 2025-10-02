#!/bin/bash

# Fix Next.js build issues
echo "🔧 Fixing Next.js build issues..."

# Remove corrupted build cache
echo "📁 Removing .next directory..."
rm -rf .next

# Remove node_modules and reinstall (if needed)
echo "📦 Cleaning node_modules..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# Reinstall dependencies
echo "⬇️ Installing dependencies..."
pnpm install

# Build the project
echo "🏗️ Building project..."
pnpm run build

echo "✅ Build fix complete!"
echo "🚀 You can now run: pnpm run dev"
