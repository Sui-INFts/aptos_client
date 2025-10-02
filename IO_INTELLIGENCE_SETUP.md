# IO Intelligence Setup (The AI Magic)

So I wanted to add some AI features to my project, and IO Intelligence seemed like a good choice. Here's how I set it up and what I learned along the way.

## What is IO Intelligence?

IO Intelligence is an AI infrastructure platform that gives you access to various AI models through a unified API. I'm using it for:
- Credit score behavior analysis (pretty cool)
- Financial recommendations (helpful for users)
- Credit factor explanations (educational)
- Natural language commands in DeFi chat (futuristic)

## Getting Your API Key

1. Go to [io.net](https://io.net) and sign up
2. Get your API key from the dashboard
3. Add it to your environment variables:

```bash
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_key_here
```

**Note**: I have a fallback key for development, but you should use your own for production.

## My Client Configuration

I created a utility file to handle the IO client setup:

```typescript
// lib/io-intelligence-utils.ts

export const IO_INTELLIGENCE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY || 'fallback_key',
  baseUrl: 'https://api.io.net/v1',
};

export const IO_MODELS = {
  LLAMA_3_3_70B: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
  LLAMA_3_1_70B: 'meta-llama/Llama-3.1-70B-Instruct-Turbo',
  LLAMA_3_1_8B: 'meta-llama/Llama-3.1-8B-Instruct-Turbo',
};

export function createIOIntelligenceClient() {
  return new IOIntelligence({
    apiKey: IO_INTELLIGENCE_CONFIG.apiKey,
    baseUrl: IO_INTELLIGENCE_CONFIG.baseUrl,
  });
}
```

## AI Features I Built

### 1. Credit Score Analysis
The AI analyzes your credit score and explains what it means:

```typescript
const analyzeCreditScore = async (score: number, userAddress: string) => {
  const prompt = `Analyze this credit score: ${score} for Aptos wallet ${userAddress}. 
  Explain what this score means in the context of DeFi and provide recommendations.`;
  
  const response = await ioClient.chat.completions.create({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{ role: 'user', content: prompt }],
  });
  
  return response.choices[0].message.content;
};
```

### 2. Financial Recommendations
The AI gives personalized DeFi recommendations based on your wallet activity:

```typescript
const getRecommendations = async (userAddress: string, recentActivity: string) => {
  const prompt = `Based on this Aptos wallet activity: ${recentActivity}, 
  provide DeFi recommendations for wallet ${userAddress}. Focus on Aptos ecosystem.`;
  
  const response = await ioClient.chat.completions.create({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{ role: 'user', content: prompt }],
  });
  
  return response.choices[0].message.content;
};
```

### 3. DeFi Action Chat
Users can chat with the AI to perform DeFi actions:

```typescript
const handleDeFiAction = async (message: string, userAddress: string) => {
  const prompt = `User wants to: ${message}. Their Aptos wallet is ${userAddress}. 
  Help them understand what they can do and provide relevant DeFi actions.`;
  
  const response = await ioClient.chat.completions.create({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [{ role: 'user', content: prompt }],
  });
  
  return response.choices[0].message.content;
};
```

## How I Integrated It

### 1. AI Insights Panel
I created a component that shows AI-powered insights on the dashboard:

```typescript
// components/AIInsightsPanel.tsx
export function AIInsightsPanel({ creditScore, userAddress, recentActivity }) {
  const [insights, setInsights] = useState('');
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    setLoading(true);
    try {
      const analysis = await analyzeCreditScore(creditScore, userAddress);
      setInsights(analysis);
    } catch (error) {
      console.error('Error generating insights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-insights-panel">
      <h3>AI Credit Analysis</h3>
      <button onClick={generateInsights} disabled={loading}>
        {loading ? 'Analyzing...' : 'Generate Insights'}
      </button>
      {insights && <div className="insights-content">{insights}</div>}
    </div>
  );
}
```

### 2. DeFi Action Chat
I built a chat interface for DeFi actions:

```typescript
// components/DeFiActionChat.tsx
export function DeFiActionChat({ userAddress }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await handleDeFiAction(input, userAddress);
      const aiMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div className="defi-chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about DeFi actions..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
```

## Error Handling (Because Things Break)

I added proper error handling for API failures:

```typescript
const handleIOError = (error: any) => {
  console.error('IO Intelligence API Error:', error);
  
  if (error.status === 401) {
    return 'API key is invalid. Please check your configuration.';
  } else if (error.status === 429) {
    return 'Rate limit exceeded. Please try again later.';
  } else if (error.status >= 500) {
    return 'IO Intelligence service is temporarily unavailable.';
  } else {
    return 'An error occurred while processing your request.';
  }
};
```

## Rate Limiting (Don't Get Banned)

I implemented rate limiting to avoid hitting API limits:

```typescript
const rateLimiter = {
  lastRequest: 0,
  minInterval: 1000, // 1 second between requests

  canMakeRequest() {
    const now = Date.now();
    if (now - this.lastRequest < this.minInterval) {
      return false;
    }
    this.lastRequest = now;
    return true;
  }
};

const makeAPICall = async (prompt: string) => {
  if (!rateLimiter.canMakeRequest()) {
    throw new Error('Please wait before making another request.');
  }
  
  // Make the actual API call
  return await ioClient.chat.completions.create({...});
};
```

## Cost Management (Keep It Reasonable)

I added cost controls to prevent runaway API usage:

```typescript
const COST_LIMITS = {
  maxTokensPerRequest: 1000,
  maxRequestsPerHour: 100,
  maxCostPerDay: 10, // dollars
};

const validateRequest = (prompt: string) => {
  if (prompt.length > COST_LIMITS.maxTokensPerRequest) {
    throw new Error('Prompt too long. Please shorten your request.');
  }
  
  // Add more validation logic here
};
```

## Testing the Integration

### Manual Testing
1. **Check API Key**: Make sure your key is working
2. **Test Credit Analysis**: Try generating insights for different scores
3. **Test DeFi Chat**: Ask various DeFi-related questions
4. **Test Error Handling**: Try with invalid inputs

### Debug Mode
I added debug logging to see what's happening:

```typescript
const DEBUG_MODE = process.env.NODE_ENV === 'development';

const logAPICall = (prompt: string, response: string) => {
  if (DEBUG_MODE) {
    console.log('IO API Call:', { prompt, response });
  }
};
```

## Common Issues I Ran Into

### 1. API Key Not Working
- **Problem**: 401 Unauthorized errors
- **Solution**: Check your API key and make sure it's properly set in environment variables

### 2. Rate Limiting
- **Problem**: 429 Too Many Requests
- **Solution**: Implemented rate limiting and request queuing

### 3. Model Not Available
- **Problem**: Model not found errors
- **Solution**: Check which models are available in your IO Intelligence plan

### 4. Response Format Issues
- **Problem**: AI responses not formatted correctly
- **Solution**: Added response parsing and formatting

## Best Practices I Learned

1. **Always handle errors** - AI APIs can be flaky
2. **Implement rate limiting** - Don't get banned
3. **Cache responses** - Save money and improve performance
4. **Validate inputs** - Prevent abuse
5. **Monitor usage** - Keep costs under control

## The Result

The AI features are working well! Users can:
- Get personalized credit score analysis
- Ask questions about DeFi actions
- Receive recommendations based on their wallet activity
- Chat with an AI that understands Aptos

It's pretty cool to see the AI understand DeFi concepts and provide relevant advice. The integration was smoother than I expected, though there were some bumps along the way.

*The AI responses are getting better over time as I refine the prompts and add more context about the Aptos ecosystem.*