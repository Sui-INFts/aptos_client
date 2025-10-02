# Kana Labs Swap Integration

This document explains how I integrated the Kana Labs DEX aggregator into the dashboard for seamless token swapping.

## What I Built

A one-click swap button on the dashboard that opens an embedded Kana Labs widget. The user's wallet is automatically connected, making swaps fast and straightforward.

## Implementation

### The Swap Button

I added a prominent "Swap Tokens" button in the dashboard header. It uses an orange-to-pink gradient to stand out and includes a fire emoji for visual appeal.

```typescript
<Button 
  onClick={() => setShowKanaSwap(!showKanaSwap)}
  disabled={!connected}
  className="bg-gradient-to-r from-orange-500 to-pink-500..."
>
  🔥 Swap Tokens
</Button>
```

The button is disabled when no wallet is connected, preventing errors.

### The Widget

When clicked, an iframe opens with the Kana Labs swap interface:

```typescript
<iframe
  src={`https://app.kanalabs.io/swap?wallet=${account?.address}`}
  className="w-full h-[650px]"
  allow="clipboard-write; payment"
  sandbox="allow-same-origin allow-scripts allow-forms allow-popups..."
/>
```

The key part is passing the wallet address as a URL parameter - this auto-connects the user's wallet in Kana Labs.

## Why Kana Labs?

Kana Labs aggregates liquidity from multiple Aptos DEXs (Liquidswap, PancakeSwap, Thala) to find the best swap rates. Users get:
- Better prices through DEX aggregation
- Lower slippage
- Optimal routing
- Gas-efficient swaps

## No API Key Required

The iframe integration doesn't need an API key. It works immediately using Kana Labs' public web interface. An API key would only be needed for:
- Backend API integration
- Custom branding
- Advanced analytics
- White-label solutions

## User Flow

1. User clicks "🔥 Swap Tokens" on dashboard
2. Widget opens with wallet already connected
3. User selects tokens and amount
4. Kana Labs shows best available rate
5. User approves transaction
6. Swap completes on Aptos blockchain

This is much faster than the previous AI chat flow which required multiple steps.

## Security

The iframe uses sandbox restrictions for security:
- Limited to essential permissions
- User maintains full wallet control
- All transactions require wallet approval
- No access to sensitive data

## Future Improvements

Possible enhancements:
- Pre-fill swap details from AI chat commands
- Quick action buttons for common swaps
- Transaction history display
- Portfolio rebalancing tools
- Price alerts

## Files Modified

- `/app/dashboard/page.tsx` - Added swap button and widget
- Added state: `const [showKanaSwap, setShowKanaSwap] = useState(false)`

## Testing

To test:
1. Run dev server and go to dashboard
2. Connect your Aptos wallet
3. Click "🔥 Swap Tokens"
4. Widget should open with wallet connected
5. Try swapping tokens
