# INFTs Credit Score Platform

A decentralized credit scoring platform built on Aptos blockchain with AI-powered insights and DeFi integrations.

## Overview

This platform allows users to mint Soulbound Tokens (SBTs) representing their on-chain credit score. The score is calculated based on various blockchain activities and can be used across the Aptos DeFi ecosystem.

## Features

### Core Functionality
- **Credit Score SBTs**: Non-transferable tokens that represent user creditworthiness
- **On-chain Analytics**: Real-time tracking of wallet activity and holdings
- **AI-Powered Insights**: Credit behavior analysis and personalized recommendations using IO Intelligence
- **DeFi Integration**: Direct access to Kana Labs DEX aggregator for token swaps

### Key Components
- **Dashboard**: Comprehensive view of credit profile and on-chain metrics
- **SBT Minting**: Create your credit score token with custom metadata
- **AI Assistant**: Chat-based interface for wallet queries and DeFi actions
- **Swap Integration**: Embedded Kana Labs widget for seamless token swapping

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Blockchain**: Aptos (Move smart contracts)
- **AI**: IO Intelligence API
- **Storage**: Nodit for SBT images
- **DeFi**: Kana Labs DEX aggregator

## Getting Started

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Configure environment variables (see `.env.example`):
```bash
NEXT_PUBLIC_APTOS_API_KEY=your_aptos_key
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_io_key
NEXT_PUBLIC_NODIT_API_KEY=your_nodit_key
```

3. Run development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Documentation

Detailed guides are available in the `/docs` folder:

- `CREDIT_SCORE_INTEGRATION.md` - Smart contract integration
- `IO_INTELLIGENCE_SETUP.md` - AI features setup
- `KANA_LABS_SWAP_INTEGRATION.md` - DeFi swap integration
- `NODIT_INTEGRATION.md` - Image storage setup

## Smart Contract

The INFTs credit score contract is deployed on Aptos testnet. See `contract/` directory for Move source code and deployment details.

## Contributing

This is a personal project, but suggestions and feedback are welcome.

## License

See LICENSE file for details.
