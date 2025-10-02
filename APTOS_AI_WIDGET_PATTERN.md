# Aptos AI Widget Pattern Analysis (Learning from the Pros)

So I analyzed the `aptos-ai` Next.js project to understand how they implement interactive widgets in their AI chat. Here's what I learned and how it could apply to my project.

## The Architecture (The Three-Layer Pattern)

They use a really clean three-layer pattern:

### 1. AI Tools (Backend)
Tools are defined using Vercel AI SDK with Zod schemas for validation. Each tool fetches blockchain data and returns structured results.

```typescript
export const getAptosBalance = tool({
  description: 'Get APT balance',
  parameters: z.object({
    address: z.string().optional(),
  }),
  execute: async ({ address }) => {
    const aptos = new Aptos(config);
    const balance = await aptos.getAccountAPTAmount({ address });
    
    return {
      address,
      balance: (balance / 100000000).toString(),
      currency: 'APT',
      network: 'Aptos Testnet',
      accountInfo: { /* ... */ }
    };
  },
});
```

**What I learned**: This is a really clean way to define AI tools. The Zod schema provides type safety and validation, and the execute function handles the actual data fetching.

### 2. View Messages (Router)
The view component maps tool names to specific widgets:

```typescript
{toolInvocations.map((invocation) => {
  if (invocation.toolName === 'getAptosBalance') {
    return <GetBalanceAptos RecievedResult={invocation.result} />;
  }
  if (invocation.toolName === 'transferAptos') {
    return <TransferAptos RecievedResult={invocation.result} />;
  }
})}
```

**What I learned**: This is a smart way to handle different tool invocations. Each tool gets its own widget, and the data flows cleanly from the tool to the widget.

### 3. Widgets (UI)
Each widget receives structured data and displays it:

```typescript
export function GetBalanceAptos({ RecievedResult }: { RecievedResult: any }) {
  const { address, balance, currency, network } = RecievedResult;
  
  return (
    <div className="balance-widget">
      <h3>APT Balance</h3>
      <p>Address: {address}</p>
      <p>Balance: {balance} {currency}</p>
      <p>Network: {network}</p>
    </div>
  );
}
```

**What I learned**: The widgets are simple and focused. They just display the data they receive, making them easy to test and maintain.

## How I Could Apply This (The Implementation)

### 1. Define AI Tools for My Project

```typescript
// lib/ai-tools.ts

export const getCreditScore = tool({
  description: 'Get user credit score and SBT status',
  parameters: z.object({
    address: z.string(),
  }),
  execute: async ({ address }) => {
    const client = getAptosClient();
    const contractConfig = getContractConfig();
    
    // Check if user has minted SBT
    const hasMinted = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
        functionArguments: [address],
      },
    });
    
    if (!hasMinted[0]) {
      return {
        hasMinted: false,
        score: 0,
        message: 'User has not minted an SBT yet.'
      };
    }
    
    // Get SBT data
    const userSbt = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
        functionArguments: [address],
      },
    });
    
    // Extract score and other data
    const score = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_score`,
        functionArguments: [String(userSbt[0])],
      },
    });
    
    return {
      hasMinted: true,
      score: Number(score[0]),
      address,
      network: 'Aptos Testnet',
      message: 'Credit score retrieved successfully.'
    };
  },
});

export const getWalletBalance = tool({
  description: 'Get wallet APT balance',
  parameters: z.object({
    address: z.string(),
  }),
  execute: async ({ address }) => {
    const client = getAptosClient();
    const balance = await client.getAccountAPTAmount({ accountAddress: address });
    
    return {
      address,
      balance: (balance / 100000000).toString(),
      currency: 'APT',
      network: 'Aptos Testnet',
      explorerUrl: `https://explorer.aptoslabs.com/account/${address}`
    };
  },
});
```

### 2. Create Widget Components

```typescript
// components/ai-widgets/CreditScoreWidget.tsx

export function CreditScoreWidget({ result }: { result: any }) {
  const { hasMinted, score, address, network } = result;
  
  if (!hasMinted) {
    return (
      <div className="credit-score-widget bg-zinc-900/50 border-zinc-800/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-2">Credit Score Status</h3>
        <p className="text-zinc-400">User has not minted an SBT yet.</p>
        <p className="text-sm text-zinc-500 mt-2">Address: {address}</p>
      </div>
    );
  }
  
  return (
    <div className="credit-score-widget bg-zinc-900/50 border-zinc-800/50 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-2">Credit Score</h3>
      <div className="text-2xl font-bold text-primary mb-2">{score}</div>
      <p className="text-zinc-400">Network: {network}</p>
      <p className="text-sm text-zinc-500 mt-2">Address: {address}</p>
    </div>
  );
}

// components/ai-widgets/WalletBalanceWidget.tsx

export function WalletBalanceWidget({ result }: { result: any }) {
  const { address, balance, currency, network, explorerUrl } = result;
  
  return (
    <div className="wallet-balance-widget bg-zinc-900/50 border-zinc-800/50 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-2">Wallet Balance</h3>
      <div className="text-2xl font-bold text-primary mb-2">{balance} {currency}</div>
      <p className="text-zinc-400">Network: {network}</p>
      <a 
        href={explorerUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-sm mt-2 inline-block"
      >
        View on Explorer →
      </a>
    </div>
  );
}
```

### 3. Implement the Router Pattern

```typescript
// components/AIWidgetRouter.tsx

export function AIWidgetRouter({ toolInvocations }: { toolInvocations: any[] }) {
  return (
    <div className="ai-widgets space-y-4">
      {toolInvocations.map((invocation, index) => {
        if (invocation.toolName === 'getCreditScore') {
          return <CreditScoreWidget key={index} result={invocation.result} />;
        }
        if (invocation.toolName === 'getWalletBalance') {
          return <WalletBalanceWidget key={index} result={invocation.result} />;
        }
        
        // Fallback for unknown tools
        return (
          <div key={index} className="unknown-widget bg-zinc-900/50 border-zinc-800/50 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Unknown Tool</h3>
            <p className="text-zinc-400">Tool: {invocation.toolName}</p>
            <pre className="text-xs text-zinc-500 mt-2 overflow-auto">
              {JSON.stringify(invocation.result, null, 2)}
            </pre>
          </div>
        );
      })}
    </div>
  );
}
```

## The Benefits (Why This Pattern Is Great)

### 1. **Separation of Concerns**
- **Tools** handle data fetching and business logic
- **Router** handles tool-to-widget mapping
- **Widgets** handle display and user interaction

### 2. **Type Safety**
- **Zod schemas** provide runtime validation
- **TypeScript** provides compile-time type checking
- **Structured data** flows from tools to widgets

### 3. **Reusability**
- **Tools** can be used by different AI models
- **Widgets** can be reused in different contexts
- **Router** can handle new tools easily

### 4. **Testability**
- **Tools** can be tested independently
- **Widgets** can be tested with mock data
- **Router** can be tested with different tool invocations

## How I Could Integrate This (The Implementation Plan)

### 1. **Add Vercel AI SDK**
```bash
pnpm add ai @ai-sdk/openai zod
```

### 2. **Define Tools for My Use Cases**
- **Credit score checking** - Get SBT status and score
- **Wallet balance** - Get APT and token balances
- **Transaction history** - Get recent transactions
- **DeFi recommendations** - Get personalized advice

### 3. **Create Widget Components**
- **CreditScoreWidget** - Display credit score and SBT status
- **WalletBalanceWidget** - Display wallet balances
- **TransactionWidget** - Display transaction history
- **RecommendationWidget** - Display DeFi recommendations

### 4. **Integrate with Existing Chat**
- **Add tool invocations** to chat responses
- **Render widgets** when tools are called
- **Handle errors** gracefully

## The Result (What This Would Give Me)

### Better User Experience
- **Interactive widgets** instead of just text responses
- **Structured data** displayed in a user-friendly way
- **Real-time information** from the blockchain

### Better Developer Experience
- **Type-safe tools** with validation
- **Reusable components** for different use cases
- **Clean separation** of concerns

### Better Maintainability
- **Easy to add new tools** and widgets
- **Easy to test** individual components
- **Easy to debug** issues

## The Bottom Line

The Aptos AI widget pattern is really well thought out. It provides a clean way to handle AI tool invocations and display structured data. I could definitely apply this pattern to my project to make the AI chat more interactive and useful.

*The key insight is that AI tools should return structured data, and widgets should just display that data. This makes the whole system more maintainable and testable.*

## Quick Reference

### The Pattern
1. **Define tools** with Zod schemas
2. **Map tool names** to widgets in router
3. **Create widgets** that display structured data

### Benefits
- **Type safety** with Zod and TypeScript
- **Separation of concerns** between data and display
- **Reusability** of tools and widgets
- **Testability** of individual components

*This pattern would make my AI chat much more powerful and user-friendly.*