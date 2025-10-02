# DeFi Action Chat Guide (The AI-Powered Wallet Assistant)

So I built this cool chat interface that lets users interact with their wallet using natural language. It's like having a DeFi assistant that understands what you want to do. Here's how it works.

## What It Does (The Cool Features)

The DeFi Action Chat lets users interact with their wallet and perform DeFi actions through natural language. It combines IO Intelligence AI with Kana Labs DEX integration to create a seamless experience.

## Supported Commands (What Users Can Ask)

### Wallet Balance
Users can ask about their wallet balance in natural language:
- "What's my wallet balance?"
- "Check my APT balance"
- "Show my balance"
- "How much APT do I have?"

### Transaction History
Users can get information about their transaction history:
- "Show my transactions"
- "Transaction history"
- "What are my recent transactions?"
- "Last 10 transactions"

### Token Swaps
Users can request token swaps:
- "Swap APT to USDT"
- "Exchange 10 APT for USDC"
- "Trade APT to DAI"
- "Convert 5 APT to USDT"

## How It Works (The Technical Magic)

The AI processes commands in three steps:

1. **Intent Recognition** - Identifies what the user wants (balance check, swap, etc.)
2. **Parameter Extraction** - Pulls out relevant details (token names, amounts)
3. **Action Execution** - Fetches data or shows the appropriate widget

## The AI System Prompt (The Brain)

I configured the AI to be Aptos-specific and understand DeFi concepts:

```
You are an Aptos blockchain assistant. All responses must reference 
Aptos features, DEXs, and ecosystem.

SUPPORTED ACTIONS:
1. WALLET_BALANCE - Check APT and token balances
2. WALLET_INFO - View transactions, NFTs, account info  
3. TOKEN_SWAPS - Exchange tokens via Aptos DEXs

Always mention Aptos-specific features like Aptos Explorer, 
Liquidswap, PancakeSwap, Thala.

When users ask about swaps, provide information about:
- Available DEXs on Aptos
- Token pairs and liquidity
- Gas fees and transaction costs
- Best practices for trading

Always include a DYOR disclaimer for financial advice.
```

## Implementation (The Code Part)

### Chat Interface Component

```typescript
// components/DeFiActionChat.tsx

export function DeFiActionChat({ userAddress }: { userAddress: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await handleDeFiAction(input, userAddress);
      const aiMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="defi-chat h-[400px] md:h-[500px]">
      <div className="messages h-[300px] md:h-[400px] overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">
              {message.content}
            </div>
            <div className="message-timestamp">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      
      <div className="input-area p-3 md:p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about DeFi actions..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
```

### AI Response Handling

```typescript
const handleDeFiAction = async (message: string, userAddress: string) => {
  const prompt = `User wants to: ${message}. Their Aptos wallet is ${userAddress}. 
                  Help them understand what they can do and provide relevant DeFi actions.
                  Focus on Aptos ecosystem and include DYOR disclaimer.`;

  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return formatAIResponse(response.choices[0].message.content);
};
```

## Intent Recognition (The Smart Part)

The AI recognizes different types of user intents:

### Balance Check Intent
```typescript
const isBalanceIntent = (message: string) => {
  const balanceKeywords = ['balance', 'how much', 'amount', 'check'];
  return balanceKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
};
```

### Swap Intent
```typescript
const isSwapIntent = (message: string) => {
  const swapKeywords = ['swap', 'exchange', 'trade', 'convert'];
  return swapKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
};
```

### Transaction Intent
```typescript
const isTransactionIntent = (message: string) => {
  const transactionKeywords = ['transaction', 'history', 'recent', 'last'];
  return transactionKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
};
```

## Parameter Extraction (The Details)

The AI extracts relevant parameters from user messages:

### Token Extraction
```typescript
const extractTokens = (message: string) => {
  const tokens = ['APT', 'USDT', 'USDC', 'DAI', 'WETH'];
  const foundTokens = tokens.filter(token => 
    message.toUpperCase().includes(token)
  );
  return foundTokens;
};
```

### Amount Extraction
```typescript
const extractAmount = (message: string) => {
  const amountRegex = /(\d+(?:\.\d+)?)/;
  const match = message.match(amountRegex);
  return match ? parseFloat(match[1]) : null;
};
```

## Action Execution (The Results)

Based on the recognized intent, the AI takes appropriate actions:

### Balance Check Action
```typescript
const handleBalanceCheck = async (userAddress: string) => {
  try {
    const client = getAptosClient();
    const balance = await client.getAccountAPTAmount({ accountAddress: userAddress });
    
    return `Your current APT balance is ${balance / 100000000} APT. 
            You can check your full token portfolio on Aptos Explorer: 
            https://explorer.aptoslabs.com/account/${userAddress}`;
  } catch (error) {
    return 'Sorry, I couldn\'t fetch your balance. Please try again.';
  }
};
```

### Swap Action
```typescript
const handleSwapAction = (fromToken: string, toToken: string, amount: number) => {
  return `I can help you swap ${amount} ${fromToken} to ${toToken}. 
          On Aptos, you can use DEXs like Liquidswap, PancakeSwap, or Thala.
          Click the "Swap Tokens" button to open the swap interface.
          
          ⚠️ Disclaimer: This is an AI recommendation. Always do your own research (DYOR) before making any financial decisions.`;
};
```

## Error Handling (When Things Go Wrong)

I added comprehensive error handling for various scenarios:

```typescript
const handleChatError = (error: any) => {
  console.error('Chat error:', error);
  
  if (error.status === 401) {
    return 'AI service authentication failed. Please check your API key.';
  } else if (error.status === 429) {
    return 'AI service rate limit exceeded. Please try again later.';
  } else if (error.status >= 500) {
    return 'AI service is temporarily unavailable. Please try again later.';
  } else {
    return 'An error occurred while processing your request. Please try again.';
  }
};
```

## Rate Limiting (Don't Get Banned)

I implemented rate limiting to avoid hitting API limits:

```typescript
const rateLimiter = {
  lastRequest: 0,
  minInterval: 2000, // 2 seconds between requests

  canMakeRequest() {
    const now = Date.now();
    if (now - this.lastRequest < this.minInterval) {
      return false;
    }
    this.lastRequest = now;
    return true;
  }
};
```

## The DYOR Disclaimer (The Legal Part)

I added a disclaimer to all AI responses:

```typescript
const addDYORDisclaimer = (response: string) => {
  const disclaimer = `
    <div className="dyor-disclaimer">
      <strong>⚠️ Disclaimer:</strong> This is an AI recommendation. 
      You can always do your own research (DYOR) before making any financial decisions.
    </div>
  `;
  
  return response + disclaimer;
};
```

## Testing the Chat (Make Sure It Works)

### Manual Testing
1. **Ask about balance** - "What's my wallet balance?"
2. **Request transaction history** - "Show my transactions"
3. **Ask about swaps** - "Swap APT to USDT"
4. **Test error handling** - Try with invalid inputs
5. **Check rate limiting** - Send multiple rapid requests

### Edge Cases
- **No wallet connected** - Should handle gracefully
- **Invalid commands** - Should provide helpful responses
- **Network issues** - Should show error messages
- **Empty messages** - Should ignore empty inputs

## Common Issues I Ran Into

### 1. AI Not Understanding Commands
- **Problem**: AI giving generic responses
- **Solution**: Improved system prompt with specific examples

### 2. Parameter Extraction Issues
- **Problem**: AI not extracting amounts or tokens correctly
- **Solution**: Added regex patterns and validation

### 3. Rate Limiting
- **Problem**: Hitting API rate limits
- **Solution**: Implemented rate limiting and request queuing

### 4. Error Handling
- **Problem**: Chat breaking on errors
- **Solution**: Added comprehensive error handling

## The Result (What Users Get)

The DeFi Action Chat now provides:
- ✅ **Natural language interface** - Users can ask questions naturally
- ✅ **Aptos-specific responses** - AI understands the Aptos ecosystem
- ✅ **Helpful guidance** - Provides relevant information and links
- ✅ **Error handling** - Graceful handling of failures
- ✅ **Rate limiting** - Prevents API abuse

## Best Practices I Learned

1. **Be specific in prompts** - AI needs clear instructions
2. **Handle errors gracefully** - Users need clear feedback
3. **Implement rate limiting** - Don't get banned
4. **Add disclaimers** - Legal protection for financial advice
5. **Test thoroughly** - Chat interfaces can be tricky

## The Bottom Line

The DeFi Action Chat is a great way to make the platform more interactive and user-friendly. Users can ask questions naturally and get helpful responses about their wallet and DeFi actions. The AI understands the Aptos ecosystem and provides relevant information.

*It's pretty cool to see users chatting with an AI that understands their wallet and can provide personalized DeFi advice. The natural language interface makes the platform feel more modern and accessible.*