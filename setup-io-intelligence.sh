#!/bin/bash

# IO Intelligence Setup Script
# This script add IO Intelligence API key to .env

echo "🚀 Setting up IO Intelligence API Key..."

# Create or update .env
if [ ! -f .env ]; then
    echo "Creating new .env file..."
    cat > .env << 'EOF'
# Aptos Configuration
NEXT_PUBLIC_APTOS_API_KEY=aptoslabs_ZEqHVtzhURY_HgUFmpfaYUykA2NcoxejSkvKnSm5p9pUq

# Nodit Configuration
NEXT_PUBLIC_NODIT_API_KEY=-58_oHHDSYdzBAJ9wg7grQWFkgA_9ZHzw
NEXT_PUBLIC_NODIT_BASE_URL=https://api.nodit.io

# IO Intelligence Configuration
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=io-v2-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6IjcwZjBiYWNjLTAxNDUtNGM4Mi04Y2NhLTJjNzJiODdiZWEzNCIsImV4cCI6NDkxMzAyMzA2OH0.f9HKiJWp7mBIC0ZY4ux7T1ik7O7FGonnO_myRVNCfuMV7kGV9yNtrOlUi-7knCa6si0SfHqMPvBCRV5XN16m5A
NEXT_PUBLIC_IO_INTELLIGENCE_BASE_URL=https://api.intelligence.io.solutions
EOF
    echo "✅ Created .env with IO Intelligence API key"
else
    echo "Updating existing .env file..."
    
    # Check if IO Intelligence keys already exist
    if grep -q "NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY" .env; then
        echo "⚠️  IO Intelligence keys already exist in .env"
        echo "Please manually update them if needed."
    else
        echo "" >> .env
        echo "# IO Intelligence Configuration" >> .env
        echo "NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=io-v2-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6IjcwZjBiYWNjLTAxNDUtNGM4Mi04Y2NhLTJjNzJiODdiZWEzNCIsImV4cCI6NDkxMzAyMzA2OH0.f9HKiJWp7mBIC0ZY4ux7T1ik7O7FGonnO_myRVNCfuMV7kGV9yNtrOlUi-7knCa6si0SfHqMPvBCRV5XN16m5A" >> .env
        echo "NEXT_PUBLIC_IO_INTELLIGENCE_BASE_URL=https://api.intelligence.io.solutions" >> .env
        echo "✅ Added IO Intelligence API key to .env"
    fi
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Restart your dev server: pnpm run dev"
echo "2. Test the integration at: http://localhost:3000/test-io-intelligence"
echo ""
echo "📚 Read the documentation:"
echo "   - Quick Start: QUICKSTART_IO_INTELLIGENCE.md"
echo "   - Full Guide: IO_INTELLIGENCE_SETUP.md"
echo ""

