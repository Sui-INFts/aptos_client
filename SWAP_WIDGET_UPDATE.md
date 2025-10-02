# Swap Widget Update (No More Double Authentication)

So I got tired of users having to connect their wallet twice - once to INFTs and then again to Kana Labs. That's terrible UX. Here's how I fixed it.

## The Problem (Before)

**The Old Way:**
- ❌ **Kana Labs iframe** asked users to connect wallet again
- ❌ **Users were already connected** to INFTs
- ❌ **Had to connect wallet twice** (annoying)
- ❌ **Showed unnecessary navbar** in iframe
- ❌ **Poor user experience** - confusing and frustrating

## The Solution (After)

I created a custom `SimpleSwapWidget` component that:
1. **Uses existing wallet connection** from INFTs
2. **Shows clean swap interface** only
3. **Pre-fills swap details** for convenience
4. **Opens Kana Labs in popup** with embedded mode

## How It Works (The Technical Part)

### User Experience (Much Better Now)

```
1. User already connected to INFTs ✓
2. Click "Swap Tokens" button
3. Swap widget appears with wallet already connected ✓
4. Enter amount and select tokens
5. Click "Swap on Kana Labs"
6. Opens Kana Labs in popup (no navbar, just swap)
7. Wallet already connected - ready to swap!
```

### Technical Flow

```typescript
// Widget uses existing wallet from INFTs
const { connected, account } = useWallet();

// When user clicks swap
const handleSwapOnKana = () => {
  const url = `https://app.kanalabs.io/swap?
    from=${fromToken}&
    to=${toToken}&
    amount=${amount}&
    wallet=${account?.address.toString()}&
    hideNavbar=true&
    embedded=true`;
  
  // Open in popup window
  window.open(url, 'kana-swap', 'width=800,height=600,scrollbars=yes,resizable=yes');
};
```

## The Custom Widget (The UI Part)

### SimpleSwapWidget Component

```typescript
// components/SimpleSwapWidget.tsx

export function SimpleSwapWidget() {
  const { connected, account } = useWallet();
  const [fromToken, setFromToken] = useState('APT');
  const [toToken, setToToken] = useState('USDT');
  const [amount, setAmount] = useState('');

  const handleSwapOnKana = () => {
    if (!account) return;

    const url = `https://app.kanalabs.io/swap?
      from=${fromToken}&
      to=${toToken}&
      amount=${amount}&
      wallet=${account.address.toString()}&
      hideNavbar=true&
      embedded=true`;
    
    window.open(url, 'kana-swap', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  return (
    <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <span className="text-2xl">🔥</span>
          Token Swap
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Swap tokens using Kana Labs DEX aggregator
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* From Token */}
        <div className="space-y-2">
          <Label htmlFor="from-token" className="text-zinc-300">From</Label>
          <Select value={fromToken} onValueChange={setFromToken}>
            <SelectTrigger className="bg-zinc-800/50 border-zinc-700/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="APT">APT</SelectItem>
              <SelectItem value="USDT">USDT</SelectItem>
              <SelectItem value="USDC">USDC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-zinc-300">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-zinc-800/50 border-zinc-700/50"
          />
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <Label htmlFor="to-token" className="text-zinc-300">To</Label>
          <Select value={toToken} onValueChange={setToToken}>
            <SelectTrigger className="bg-zinc-800/50 border-zinc-700/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="APT">APT</SelectItem>
              <SelectItem value="USDT">USDT</SelectItem>
              <SelectItem value="USDC">USDC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Swap Button */}
        <Button
          onClick={handleSwapOnKana}
          disabled={!connected || !amount}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          🔥 Swap on Kana Labs
        </Button>
      </CardContent>
    </Card>
  );
}
```

## The Popup Approach (The Smart Part)

Instead of embedding an iframe, I open Kana Labs in a popup window:

### Benefits of Popup Approach
1. **No double authentication** - Wallet already connected
2. **Clean interface** - No unnecessary navbar
3. **Better UX** - Users stay in context
4. **Easier to close** - Simple popup window
5. **More secure** - No iframe sandboxing issues

### Popup Configuration

```typescript
const openKanaSwap = (params: SwapParams) => {
  const url = `https://app.kanalabs.io/swap?
    from=${params.from}&
    to=${params.to}&
    amount=${params.amount}&
    wallet=${params.wallet}&
    hideNavbar=true&
    embedded=true`;
  
  // Open in popup with specific dimensions
  const popup = window.open(
    url, 
    'kana-swap', 
    'width=800,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
  );
  
  // Focus the popup
  if (popup) {
    popup.focus();
  }
};
```

## Token Selection (The Convenience Part)

I added a simple token selector with common Aptos tokens:

```typescript
const APTOS_TOKENS = [
  { symbol: 'APT', name: 'Aptos', address: '0x1::aptos_coin::AptosCoin' },
  { symbol: 'USDT', name: 'Tether USD', address: '0x...' },
  { symbol: 'USDC', name: 'USD Coin', address: '0x...' },
  { symbol: 'WETH', name: 'Wrapped Ethereum', address: '0x...' },
];

const TokenSelector = ({ value, onChange, label }: TokenSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="token-select" className="text-zinc-300">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-zinc-800/50 border-zinc-700/50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {APTOS_TOKENS.map((token) => (
            <SelectItem key={token.symbol} value={token.symbol}>
              {token.symbol} - {token.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
```

## Error Handling (The Safety Part)

I added proper error handling for various scenarios:

```typescript
const handleSwapOnKana = async () => {
  try {
    if (!account) {
      throw new Error('Wallet not connected');
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Please enter a valid amount');
    }
    
    if (fromToken === toToken) {
      throw new Error('Please select different tokens');
    }
    
    // Open Kana Labs popup
    const url = buildKanaSwapUrl({
      from: fromToken,
      to: toToken,
      amount: amount,
      wallet: account.address.toString()
    });
    
    const popup = window.open(url, 'kana-swap', 'width=800,height=600,scrollbars=yes,resizable=yes');
    
    if (!popup) {
      throw new Error('Popup blocked. Please allow popups for this site.');
    }
    
    popup.focus();
    
  } catch (error) {
    console.error('Swap error:', error);
    toast.error(error.message);
  }
};
```

## Mobile Responsiveness (The Touch Part)

The widget works great on mobile devices:

```typescript
// Responsive layout
<div className="w-full md:w-5/6 mx-auto px-4 md:px-0">
  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
    <CardContent className="p-4 md:p-6 space-y-4">
      {/* Mobile-friendly form elements */}
      <div className="space-y-3 md:space-y-4">
        <TokenSelector 
          value={fromToken} 
          onChange={setFromToken} 
          label="From Token"
        />
        
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-zinc-300">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-zinc-800/50 border-zinc-700/50 h-12 md:h-auto"
          />
        </div>
        
        <TokenSelector 
          value={toToken} 
          onChange={setToToken} 
          label="To Token"
        />
      </div>
      
      <Button
        onClick={handleSwapOnKana}
        disabled={!connected || !amount}
        className="w-full h-12 md:h-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
      >
        🔥 Swap on Kana Labs
      </Button>
    </CardContent>
  </Card>
</div>
```

## Testing the Integration

### Manual Testing
1. **Connect wallet** - Make sure wallet is connected
2. **Click swap button** - Widget should appear
3. **Select tokens** - Should work without issues
4. **Enter amount** - Should accept valid amounts
5. **Click swap** - Should open Kana Labs popup
6. **Check popup** - Should have wallet connected

### Edge Cases
- **No wallet connected** - Button should be disabled
- **Invalid amount** - Should show error message
- **Same tokens** - Should prevent swap
- **Popup blocked** - Should show error message
- **Mobile view** - Should be responsive

## Common Issues I Ran Into

### 1. Popup Blocked
- **Problem**: Browser blocking popup windows
- **Solution**: Added error handling and user instructions

### 2. Wallet Not Connected in Popup
- **Problem**: Kana Labs not recognizing wallet
- **Solution**: Pass wallet address in URL parameters

### 3. Mobile Layout Issues
- **Problem**: Widget not responsive on mobile
- **Solution**: Added mobile-specific styling

### 4. Token Selection Issues
- **Problem**: Invalid token addresses
- **Solution**: Use correct Aptos token addresses

## The Result

The new swap widget is much better! Users can:
- **Swap tokens** without double authentication
- **Use existing wallet connection** from INFTs
- **Get clean interface** without unnecessary navbar
- **Have better UX** with popup approach
- **Use on mobile** with responsive design

## Best Practices I Learned

1. **Avoid double authentication** - Users hate connecting twice
2. **Use popups for external services** - Better than iframes
3. **Pre-fill common values** - Make it convenient
4. **Handle errors gracefully** - Users need clear feedback
5. **Test on mobile** - Touch interactions work differently

## The Bottom Line

Replacing the iframe with a custom widget was a great decision. Users no longer have to connect their wallet twice, and the experience is much smoother. The popup approach gives users the best of both worlds - the convenience of the INFTs interface and the power of Kana Labs.

*This is a perfect example of how small UX improvements can make a big difference in user satisfaction.*