# Aptos AI Widget Pattern Analysis

I analyzed the `aptos-ai` Next.js project to understand how they implement interactive widgets in their AI chat. Here's what I learned and how it could apply to this project.

## Architecture

They use a three-layer pattern:

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

### 3. Widgets (UI)
Each widget receives structured data and displays it:

```typescript
export const GetBalanceAptos = ({ RecievedResult }) => {
  if (!RecievedResult) return null;
  if (RecievedResult.error) return <ErrorUI />;
  
  return (
    <div className="border border-zinc-700 bg-zinc-900 p-4 rounded-lg">
      <h3>{RecievedResult.currency} Balance</h3>
      <p className="text-2xl font-bold">{RecievedResult.balance} APT</p>
      <Button onClick={copyAddress}>Copy Address</Button>
    </div>
  );
};
```

## Key Takeaways

### What Works Well

**Automatic Widget Rendering**: The AI SDK handles tool invocations automatically. When a tool returns data, the corresponding widget renders without manual state management.

**Type Safety**: Zod schemas validate parameters, and TypeScript interfaces ensure type safety throughout.

**Loading States**: Built-in support for showing skeletons while tools execute.

**Error Handling**: Consistent error state handling across all widgets.

### Widget Design Patterns

**Balance Widget**:
- Shows wallet address with copy button
- Displays balance prominently
- Collapsible account details
- Network indicator badge

**Transfer Widget** (Interactive):
- Transaction preview before approval
- Wallet integration for signing
- Transaction hash display after success
- Aptos Explorer link
- Loading and error states

## Comparison to My Implementation

### Current Approach
I manually manage widget visibility with state:

```typescript
{showWalletInfo && walletData && (
  <Card>
    <WalletBalanceWidget data={walletData} />
  </Card>
)}
```

**Pros**: Simple, full control, no extra dependencies
**Cons**: Manual state management, doesn't scale well

### Their Approach
Automatic rendering based on tool invocations:

```typescript
{toolInvocations.map(invocation => 
  <WidgetComponent result={invocation.result} />
)}
```

**Pros**: Automatic, scalable, type-safe
**Cons**: Requires Vercel AI SDK setup

## Potential Improvements

Could adopt their widget design patterns:

1. **Better Props Structure**:
```typescript
interface WalletBalanceResult {
  address: string;
  balance: string;
  tokens: Array<{ symbol: string; balance: string }>;
  network: string;
  error?: string;
}
```

2. **Enhanced Error States**:
```typescript
if (result.error) {
  return (
    <div className="border border-red-700 bg-red-900/20 p-4">
      <h3>Error</h3>
      <p>{result.error}</p>
      <Button onClick={copyError}>Copy Error</Button>
    </div>
  );
}
```

3. **Loading Skeletons**:
```typescript
{isLoading && (
  <div className="skeleton animate-pulse">
    <div className="h-20 bg-zinc-800 rounded" />
  </div>
)}
```

## Decision

For this project, I'm keeping the current simple approach since:
- It works well for the use cases
- Doesn't require additional SDK setup
- Gives me full control over widget behavior

However, I'm adopting their design patterns for better UX:
- Collapsible sections
- Copy-to-clipboard functionality
- Proper error states
- Loading skeletons
