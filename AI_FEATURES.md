# AI Features Documentation (The Smart Stuff)

So I wanted to add some AI magic to my project, and here's what I built using IO Intelligence. It's pretty cool to see AI understand DeFi concepts and provide personalized advice.

## Features Overview

### 1. Credit Score Analysis
Analyzes user behavior patterns based on their credit score and on-chain activity. The AI actually understands what a credit score means in the DeFi context.

### 2. Financial Recommendations
Provides personalized DeFi strategy suggestions based on credit score and Aptos activity. It's like having a DeFi advisor that knows your wallet.

### 3. Score Factor Explanations
Explains what factors influence the credit score and how to improve it. Educational and helpful for users.

### 4. DeFi Action Chat
Natural language interface for wallet queries and DeFi actions. You can literally chat with the AI about your wallet.

## AI Insights Panel (The Main Feature)

Location: Dashboard and "My SBTs" page

### Credit Behavior Analysis

The AI examines spending patterns and provides insights:

```typescript
const handleAnalyzeBehavior = async () => {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{
      role: 'system',
      content: `Analyze credit behavior on Aptos for user with score ${creditScore}.
                Reference their wallet: ${userAddress}
                Link to explorer: https://explorer.aptoslabs.com/account/${userAddress}`
    }],
    temperature: 0.7,
  });
  
  setBehaviorAnalysis(formatAIResponse(response.choices[0].message.content));
};
```

### Financial Recommendations

The AI suggests DeFi strategies on Aptos:

```typescript
const handleGetRecommendations = async () => {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{
      role: 'system',
      content: `Based on this Aptos wallet activity: ${recentActivity}, 
                provide DeFi recommendations for wallet ${userAddress}. 
                Focus on Aptos ecosystem and include DYOR disclaimer.`
    }],
    temperature: 0.7,
  });
  
  setRecommendations(formatAIResponse(response.choices[0].message.content));
};
```

## DeFi Action Chat (The Interactive Part)

This is probably the coolest feature. Users can chat with the AI about their wallet and DeFi actions.

### Chat Interface

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
    <div className="defi-chat">
      <div className="messages">
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
      
      <div className="input-area">
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

## AI Response Formatting (The Polish)

I added formatting to make AI responses more readable:

```typescript
const formatAIResponse = (response: string) => {
  // Remove AI line dashes and format properly
  let formatted = response
    .replace(/^[-—]\s*/gm, '') // Remove leading dashes
    .replace(/\n{3,}/g, '\n\n') // Limit consecutive newlines
    .trim();

  // Add styling for better readability
  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic text
    .replace(/`(.*?)`/g, '<code>$1</code>') // Code blocks
    .replace(/\n/g, '<br>'); // Line breaks

  return formatted;
};
```

## Personalized AI Responses (The Smart Part)

The AI responses are personalized based on the user's wallet address and activity:

```typescript
const getPersonalizedPrompt = (basePrompt: string, userAddress: string, recentActivity: string) => {
  return `${basePrompt}
          
          User's Aptos wallet: ${userAddress}
          Recent activity: ${recentActivity}
          Explorer link: https://explorer.aptoslabs.com/account/${userAddress}
          
          Provide personalized advice based on their specific wallet and activity.`;
};
```

## Error Handling (Because AI Can Be Flaky)

I added comprehensive error handling for AI API failures:

```typescript
const handleAIError = (error: any) => {
  console.error('AI Error:', error);
  
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

const makeAIRequest = async (prompt: string) => {
  if (!rateLimiter.canMakeRequest()) {
    throw new Error('Please wait before making another request.');
  }
  
  return await client.chatCompletion({...});
};
```

## The DYOR Disclaimer (The Legal Part)

I added a disclaimer to all AI recommendations:

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

## Testing the AI Features

### Manual Testing
1. **Credit analysis** - Try generating insights for different scores
2. **Recommendations** - Test with different wallet activities
3. **DeFi chat** - Ask various DeFi-related questions
4. **Error handling** - Test with invalid inputs
5. **Rate limiting** - Test rapid requests

### Edge Cases
- **No wallet connected** - Should handle gracefully
- **Invalid API key** - Should show error message
- **Network issues** - Should handle timeouts
- **Empty responses** - Should show fallback message

## Common Issues I Ran Into

### 1. AI Responses Too Generic
- **Problem**: AI not providing personalized advice
- **Solution**: Added wallet address and activity context to prompts

### 2. Response Formatting Issues
- **Problem**: AI responses not formatted correctly
- **Solution**: Added response parsing and formatting

### 3. Rate Limiting
- **Problem**: Hitting API rate limits
- **Solution**: Implemented rate limiting and request queuing

### 4. Context Length Issues
- **Problem**: Prompts too long for AI model
- **Solution**: Truncated context and optimized prompts

## Performance Optimization

I added several optimizations:

```typescript
// Response caching
const responseCache = new Map<string, string>();

const getCachedResponse = (prompt: string) => {
  return responseCache.get(prompt);
};

const cacheResponse = (prompt: string, response: string) => {
  responseCache.set(prompt, response);
  // Clear cache after 1 hour
  setTimeout(() => responseCache.delete(prompt), 3600000);
};
```

## The Result

The AI features are working great! Users can:
- **Get personalized credit analysis** based on their score
- **Receive DeFi recommendations** tailored to their wallet
- **Chat with AI** about their wallet and DeFi actions
- **Learn about credit factors** and how to improve

## Best Practices I Learned

1. **Always add context** - AI needs wallet address and activity info
2. **Handle errors gracefully** - AI APIs can be flaky
3. **Implement rate limiting** - Don't get banned
4. **Format responses** - Make them readable and user-friendly
5. **Add disclaimers** - Legal protection for financial advice

## The Bottom Line

The AI features add a lot of value to the platform. Users love being able to chat with an AI that understands their wallet and can provide personalized DeFi advice. The integration was smoother than I expected, though there were some bumps along the way.

*The AI responses are getting better over time as I refine the prompts and add more context about the Aptos ecosystem. It's pretty cool to see AI understand DeFi concepts and provide relevant advice.*