# Documentation Index

Complete documentation for the INFTs Credit Score platform.

## Getting Started

- **README.md** - Project overview and quick start
- **CREDIT_SCORE_INTEGRATION.md** - Smart contract integration guide

## Features

### AI & Analytics
- **AI_FEATURES.md** - AI-powered insights and chat functionality
- **IO_INTELLIGENCE_SETUP.md** - IO Intelligence configuration
- **IO_API_KEY_INFO.md** - API key quick reference

### DeFi Integration
- **KANA_LABS_SWAP_INTEGRATION.md** - Token swapping with Kana Labs
- **DEFI_ACTION_CHAT_GUIDE.md** - Natural language DeFi commands

### Storage & Media
- **NODIT_INTEGRATION.md** - Image storage for SBTs

### Architecture
- **APTOS_AI_WIDGET_PATTERN.md** - Widget design patterns from aptos-ai

## Core Components

### Smart Contract
- Module: `infts_credit_score`
- Network: Aptos Testnet
- Functions: Minting, score updates, view operations

### Frontend
- Framework: Next.js 15
- UI: Tailwind CSS, shadcn/ui
- State: React Query for data fetching

### AI Integration
- Provider: IO Intelligence
- Models: Llama 3.3 70B, Llama 3.1 70B/8B
- Features: Analysis, recommendations, chat

### Storage
- Images: Nodit (with fallback)
- Metadata: On-chain (Aptos)

## Environment Setup

Required environment variables:

```bash
# Aptos
NEXT_PUBLIC_APTOS_API_KEY=your_aptos_key

# AI
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_io_key

# Storage
NEXT_PUBLIC_NODIT_API_KEY=your_nodit_key
```

## Key Files

### Configuration
- `/contract/contracts_testnet.ts` - Contract addresses
- `/lib/aptos-utils.ts` - Aptos SDK setup
- `/lib/io-intelligence-utils.ts` - AI client
- `/lib/nodit-utils.ts` - Storage client

### Components
- `/components/AIInsightsPanel.tsx` - AI insights
- `/components/DeFiActionChat.tsx` - DeFi chat
- `/components/CreditScoreMint.tsx` - SBT minting
- `/app/dashboard/page.tsx` - Main dashboard

## Development Workflow

1. Clone repository
2. Install dependencies: `pnpm install`
3. Configure environment variables
4. Run dev server: `pnpm run dev`
5. Test features at `localhost:3000`

## Testing Pages

- `/test-contract` - Contract connectivity
- `/test-io-intelligence` - AI features
- `/test-upload` - Image upload

## Deployment Checklist

- [ ] Set production API keys
- [ ] Deploy smart contract to mainnet
- [ ] Update contract addresses in config
- [ ] Test all integrations
- [ ] Monitor API usage and costs

## Support

For issues or questions:
1. Check relevant documentation file
2. Review error logs in browser console
3. Verify API keys are configured
4. Test on testnet before mainnet

## Updates

When adding features:
1. Update relevant .md file
2. Add entry to this index
3. Test thoroughly
4. Document any new environment variables

