#!/bin/bash

# Fix Turbopack Runtime Error Script
# This script resolves the "Cannot find module '../chunks/ssr/[turbopack]_runtime.js'" error

echo "🔧 Fixing Turbopack Runtime Error..."

# Stop any running Next.js processes
echo "1. Stopping Next.js processes..."
pkill -f "next" 2>/dev/null || true

# Remove corrupted build files
echo "2. Removing corrupted .next directory..."
rm -rf .next

# Remove cache files
echo "3. Clearing cache files..."
rm -rf node_modules/.cache

# Reinstall dependencies (optional, but ensures clean state)
echo "4. Reinstalling dependencies..."
pnpm install

# Start development server
echo "5. Starting development server..."
echo "✅ Server should now start without Turbopack errors!"
echo "🌐 Open http://localhost:3000 in your browser"

pnpm run dev
