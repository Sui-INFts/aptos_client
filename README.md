# INFTs Credit Score Platform

Hey there! 👋 This is my personal project - a decentralized credit scoring platform I built on the Aptos blockchain. It's pretty cool if I do say so myself!

## What This Actually Does

So I got tired of traditional credit scoring systems and thought, "Why not put this on the blockchain?" This platform lets users mint these things called Soulbound Tokens (SBTs) that represent their on-chain credit score. Think of it as your DeFi identity card that can't be transferred or sold.

## The Cool Stuff I Built

### The Main Features
- **Credit Score SBTs**: These are non-transferable tokens that basically say "Hey, this person is trustworthy" based on their blockchain activity
- **Real-time Analytics**: I track everything happening in your wallet - transactions, holdings, the works
- **AI-Powered Insights**: I integrated IO Intelligence to give personalized recommendations and analyze your credit behavior
- **DeFi Integration**: You can swap tokens directly through Kana Labs DEX without leaving the platform

### What You Can Actually Do
- **Dashboard**: See your entire credit profile and on-chain metrics in one place
- **SBT Minting**: Create your credit score token with custom metadata (though I made it simple with a permanent image)
- **AI Assistant**: Chat with an AI that knows about your wallet and can help with DeFi actions
- **Token Swapping**: Built-in Kana Labs widget for seamless token swaps

## The Tech Stack I Chose

I went with modern tools because why not:
- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Blockchain**: Aptos (Move smart contracts)
- **AI**: IO Intelligence API
- **Storage**: Nodit for SBT images
- **DeFi**: Kana Labs DEX aggregator

## Getting Started (If You Want to Run This)

1. Install the dependencies:
```bash
npm install
# or if you're cool like me
pnpm install
```

2. Set up your environment variables (copy `.env.example`):
```bash
NEXT_PUBLIC_APTOS_API_KEY=your_aptos_key
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_io_key
NEXT_PUBLIC_NODIT_API_KEY=your_nodit_key
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) and see what I built!

## Documentation (The Boring Stuff)

I wrote some guides in the `/docs` folder if you're into that:

- `CREDIT_SCORE_INTEGRATION.md` - How I integrated the smart contract
- `IO_INTELLIGENCE_SETUP.md` - Setting up the AI features
- `KANA_LABS_SWAP_INTEGRATION.md` - The DeFi swap integration
- `NODIT_INTEGRATION.md` - Image storage setup

## The Smart Contract

I deployed the INFTs credit score contract on Aptos testnet. Check out the `contract/` directory if you want to see the Move source code and deployment details.

## Contributing

This is my personal project, but if you have suggestions or find bugs, feel free to let me know! I'm always open to feedback.

## License

Check the LICENSE file for the legal stuff.

---

*Built with ❤️ and a lot of coffee*