# Kana Labs Swap Integration (The DeFi Magic)

So I wanted to add token swapping to my dashboard, and Kana Labs seemed like the perfect choice. Here's how I integrated their DEX aggregator and what I learned along the way.

## What I Built

A one-click swap button on the dashboard that opens an embedded Kana Labs widget. The user's wallet is automatically connected, making swaps fast and straightforward. No more jumping between different DEXs!

## The Implementation

### The Swap Button (The Eye-Catcher)

I added a prominent "Swap Tokens" button in the dashboard header. It uses an orange-to-pink gradient to stand out and includes a fire emoji because why not:

```typescript
<Button 
  onClick={() => setShowKanaSwap(!showKanaSwap)}
  disabled={!connected}
  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
>
  🔥 Swap Tokens
</Button>
```

The button is disabled when no wallet is connected, preventing those annoying errors.

### The Widget (The Magic Iframe)

When clicked, an iframe opens with the Kana Labs swap interface:

```typescript
<iframe
  src={`https://app.kanalabs.io/swap?wallet=${account?.address}`}
  className="w-full h-[650px] border-0 rounded-lg"
  allow="clipboard-write; payment"
  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
  title="Kana Labs Swap"
/>
```

The key part is passing the wallet address as a URL parameter - this auto-connects the user's wallet in Kana Labs. No more manual wallet connection!

## Why Kana Labs? (The Research)

I chose Kana Labs because they aggregate liquidity from multiple Aptos DEXs (Liquidswap, PancakeSwap, Thala) to find the best swap rates. Users get:
- **Better prices** through DEX aggregation (saves money)
- **Lower slippage** (less price impact)
- **Optimal routing** (finds the best path)
- **Gas-efficient swaps** (saves on fees)

## No API Key Required (The Easy Part)

The best part? No API key needed! Kana Labs provides a public widget that you can embed directly. Just pass the wallet address and you're good to go.

## The User Experience

### Before (The Old Way)
1. User wants to swap tokens
2. Go to different DEX websites
3. Connect wallet on each site
4. Compare prices manually
5. Execute swap
6. Hope for the best

### After (The New Way)
1. User clicks "Swap Tokens" button
2. Widget opens with wallet already connected
3. Best prices automatically found
4. Execute swap
5. Done!

## Technical Details

### State Management
I use React state to control the widget visibility:

```typescript
const [showKanaSwap, setShowKanaSwap] = useState(false);

// Toggle function
const toggleKanaSwap = () => {
  setShowKanaSwap(!showKanaSwap);
};
```

### Responsive Design
The widget is responsive and works on mobile:

```typescript
<div className={`w-full transition-all duration-300 ${showKanaSwap ? 'block' : 'hidden'}`}>
  <iframe
    src={`https://app.kanalabs.io/swap?wallet=${account?.address}`}
    className="w-full h-[650px] md:h-[700px] border-0 rounded-lg"
    // ... other props
  />
</div>
```

### Error Handling
I added error handling for edge cases:

```typescript
const handleIframeError = () => {
  console.error('Kana Labs widget failed to load');
  // Could show a fallback message or retry button
};

<iframe
  onError={handleIframeError}
  // ... other props
/>
```

## Integration with SBT Gating

The swap button is part of the SBT gating system:

```typescript
<Button 
  onClick={() => setShowKanaSwap(!showKanaSwap)}
  disabled={!connected || !hasMintedSBT} // Disabled if no SBT
  className="..."
>
  🔥 Swap Tokens
</Button>
```

Only users who have minted an SBT can access the swap feature. This creates a nice incentive for users to mint their credit score SBT.

## Mobile Responsiveness

The widget works great on mobile devices:

```typescript
<div className="w-full md:w-5/6 mx-auto px-4 md:px-0">
  <iframe
    className="w-full h-[600px] md:h-[700px] border-0 rounded-lg"
    // ... other props
  />
</div>
```

## Security Considerations

I made sure the iframe is properly sandboxed:

```typescript
<iframe
  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
  // ... other props
/>
```

This prevents the iframe from accessing sensitive data while still allowing it to function properly.

## Performance Optimization

The widget only loads when needed:

```typescript
{showKanaSwap && (
  <iframe
    src={`https://app.kanalabs.io/swap?wallet=${account?.address}`}
    // ... other props
  />
)}
```

This prevents unnecessary network requests when the widget isn't visible.

## Testing the Integration

### Manual Testing
1. **Connect wallet** - Make sure wallet is connected
2. **Click swap button** - Widget should open
3. **Check auto-connection** - Wallet should be connected in Kana Labs
4. **Test swap** - Try a small swap to verify it works
5. **Test mobile** - Check on mobile devices

### Edge Cases
- **No wallet connected** - Button should be disabled
- **No SBT minted** - Button should be disabled
- **Network issues** - Should handle gracefully
- **Mobile view** - Should be responsive

## Common Issues I Ran Into

### 1. Wallet Not Auto-Connecting
- **Problem**: Wallet address not being passed correctly
- **Solution**: Check the URL parameter format and wallet address format

### 2. Iframe Not Loading
- **Problem**: CORS or sandbox issues
- **Solution**: Adjust sandbox permissions and check iframe src

### 3. Mobile Layout Issues
- **Problem**: Widget not responsive on mobile
- **Solution**: Adjust iframe height and container width

### 4. SBT Gating Not Working
- **Problem**: Button not disabled when no SBT
- **Solution**: Check SBT status logic and button disabled state

## The Result

The integration is working great! Users can:
- **Swap tokens** directly from the dashboard
- **Get best prices** through DEX aggregation
- **Auto-connect wallet** without manual steps
- **Use on mobile** with responsive design

## Future Improvements

I'm thinking about adding:
- **Swap history** - Track previous swaps
- **Price alerts** - Notify when prices change
- **Custom tokens** - Add support for custom tokens
- **Analytics** - Track swap volume and patterns

## Best Practices I Learned

1. **Always test on mobile** - Mobile users are important
2. **Handle edge cases** - Things will break
3. **Use proper sandboxing** - Security matters
4. **Optimize for performance** - Don't load unnecessary resources
5. **Provide clear feedback** - Users need to know what's happening

## The Bottom Line

Kana Labs integration was surprisingly smooth. The widget approach is much easier than building a custom swap interface, and users get access to the best prices across multiple DEXs. The auto-wallet connection is a nice touch that makes the experience seamless.

*The swap feature is now one of the most popular features on the dashboard. Users love being able to swap tokens without leaving the platform.*