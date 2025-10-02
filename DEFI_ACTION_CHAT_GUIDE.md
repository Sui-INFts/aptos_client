# DeFi Action Chat Documentation

The DeFi Action Chat lets users interact with their wallet and perform DeFi actions through natural language. It combines IO Intelligence AI with Kana Labs DEX integration.

## Features

### Supported Commands

**Wallet Balance**:
- "What's my wallet balance?"
- "Check my APT balance"
- "Show my balance"

**Transaction History**:
- "Show my transactions"
- "Transaction history"
- "What are my recent transactions?"

**Token Swaps**:
- "Swap APT to USDT"
- "Exchange 10 APT for USDC"
- "Trade APT to DAI"

### How It Works

The AI processes commands in three steps:

1. **Intent Recognition**: Identifies what the user wants (balance check, swap, etc.)
2. **Parameter Extraction**: Pulls out relevant details (token names, amounts)
3. **Action Execution**: Fetches data or shows the appropriate widget

## Implementation

### AI System Prompt

I configured the AI to be Aptos-specific:

```
You are an Aptos blockchain assistant. All responses must reference 
Aptos features, DEXs, and ecosystem.

SUPPORTED ACTIONS:
1. WALLET_BALANCE - Check APT and token balances
2. WALLET_INFO - View transactions, NFTs, account info  
3. TOKEN_SWAPS - Exchange tokens via Aptos DEXs

Always mention Aptos-specific features like Aptos Explorer, 
Liquidswap, PancakeSwap, Thala.
```

### Command Processing

When a user sends a message, the AI responds with structured commands:

```
User: "wallet balance"
AI: WALLET_BALANCE: TOKEN=[ALL]

User: "show transactions"  
AI: WALLET_INFO: TYPE=[transactions]

User: "swap APT to USDT"
AI: SWAP_ACTION: FROM=[APT] TO=[USDT] AMOUNT=[NONE]
```

The code then parses these commands and executes the appropriate action.

### Wallet Balance

```typescript
const handleWalletBalance = async (token: string) => {
  const aptosClient = getAptosClient();
  const accountResources = await aptosClient.account.getAccountResources({
    accountAddress: userAddress,
  });
  
  const aptCoin = accountResources.find(
    (r) => r.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>'
  );
  
  const balance = (Number(aptCoin.data.coin.value) / 100000000).toFixed(4);
  
  // Show balance widget
  setWalletData({ balance, tokens: [...] });
  setShowWalletInfo(true);
};
```

### Transaction History

```typescript
const handleWalletInfo = async (infoType: string) => {
  const transactions = await aptosClient.transaction.getAccountTransactions({
    accountAddress: userAddress,
    options: { limit: 5 }
  });
  
  setWalletData({ transactions: transactions.length });
  setShowWalletInfo(true);
};
```

### Token Swaps

For swaps, I show a confirmation message with the swap details, then open the Kana Labs widget when confirmed.

## Widgets

### Balance Widget

Shows APT balance with USD value, plus a link to Aptos Explorer:

```
┌─────────────────────────────────┐
│  💼 Aptos Wallet Information   │
│                                 │
│  📈 APT Balance                │
│  12.5000 APT    ≈ $125.00 USD  │
│                                 │
│  [View on Aptos Explorer ↗]    │
└─────────────────────────────────┘
```

### Transaction Widget

Displays recent transaction count with explorer link:

```
┌─────────────────────────────────┐
│  💼 Aptos Wallet Information   │
│                                 │
│  📊 Recent Transactions        │
│  5 transactions                │
│                                 │
│  [View on Aptos Explorer ↗]    │
└─────────────────────────────────┘
```

## Usage

The chat appears when users click "Show DeFi Actions" on the dashboard:

1. Type a command like "wallet balance"
2. AI processes and identifies the action
3. Widget displays with relevant data
4. User can close widget or perform another action

## Integration Points

- **IO Intelligence**: Processes natural language commands
- **Aptos SDK**: Fetches on-chain data
- **Kana Labs**: Handles token swaps
- **Aptos Explorer**: Links for detailed transaction views

## Example Flow

```
User: "What's my wallet balance?"

→ AI identifies: WALLET_BALANCE action
→ Fetch balance from Aptos blockchain
→ Display widget with:
  - APT balance: 12.5000
  - USD value: ≈ $125.00
  - Explorer link

User: "Swap 5 APT to USDT"

→ AI identifies: SWAP_ACTION
→ Extract: FROM=APT, TO=USDT, AMOUNT=5
→ Show confirmation
→ User clicks "Confirm Swap"
→ Open Kana Labs widget
```

## Files

- `/components/DeFiActionChat.tsx` - Main chat component
- `/lib/io-intelligence-utils.ts` - AI client
- `/lib/aptos-utils.ts` - Aptos SDK utilities
