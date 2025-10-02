# IO Intelligence Setup

This project uses IO Intelligence for AI-powered credit analysis and chat features. Here's how I set it up.

## What is IO Intelligence?

IO Intelligence is an AI infrastructure platform that provides access to various AI models through a unified API. I'm using it for:
- Credit score behavior analysis
- Financial recommendations
- Credit factor explanations
- Natural language commands in DeFi chat

## API Key Setup

1. Get your API key from [io.net](https://io.net)

2. Add to environment variables:
```bash
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_key_here
```

3. The app has a fallback key for development, but use your own for production

## Client Configuration

I created a utility file for the IO client:

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

## AI Features

### Credit Score Analysis

Analyzes user behavior patterns:

```typescript
const response = await client.chatCompletion({
  model: IO_MODELS.LLAMA_3_3_70B,
  messages: [{
    role: 'system',
    content: 'Analyze credit score behavior on Aptos blockchain...'
  }],
  temperature: 0.7,
  max_tokens: 500,
});
```

### Financial Recommendations

Provides DeFi strategy suggestions:

```typescript
const response = await client.chatCompletion({
  model: IO_MODELS.LLAMA_3_1_70B,
  messages: [{
    role: 'user',
    content: `Credit Score: ${score}/1000. What DeFi strategies 
              should I consider on Aptos?`
  }],
  temperature: 0.8,
  max_tokens: 700,
});
```

### DeFi Chat Commands

Processes natural language for wallet actions:

```typescript
const response = await client.chatCompletion({
  model: IO_MODELS.LLAMA_3_3_70B,
  messages: [{
    role: 'system',
    content: `You are an Aptos assistant. Identify user intent:
              WALLET_BALANCE, WALLET_INFO, or SWAP_ACTION`
  }],
});
```

## Model Selection

I chose different models for different tasks:

- **Llama 3.3 70B**: Complex analysis, chat commands (better reasoning)
- **Llama 3.1 70B**: Financial recommendations (balanced)
- **Llama 3.1 8B**: Simple queries (faster, cheaper)

## Best Practices

### Temperature Settings
- **0.7**: Balanced creativity (credit analysis)
- **0.8**: More creative (recommendations)
- **0.5**: More focused (commands)

### Token Limits
- Analysis: 500 tokens
- Recommendations: 700 tokens
- Commands: 200-300 tokens

### Error Handling

Always wrap AI calls in try-catch:

```typescript
try {
  const response = await client.chatCompletion({...});
  return response.choices[0].message.content;
} catch (error) {
  console.error('IO Intelligence error:', error);
  return 'Unable to generate insights. Please try again.';
}
```

## Components Using IO Intelligence

1. **AIInsightsPanel** (`/components/AIInsightsPanel.tsx`)
   - Credit behavior analysis
   - Financial recommendations
   - Score factor explanations

2. **DeFiActionChat** (`/components/DeFiActionChat.tsx`)
   - Natural language command processing
   - Intent recognition
   - Parameter extraction

## Testing

To test IO Intelligence integration:

1. Go to `/test-io-intelligence` page
2. Try different prompts
3. Check response quality
4. Monitor token usage

## Costs

IO Intelligence charges per token. Current usage:
- Credit analysis: ~500 tokens per request
- Recommendations: ~700 tokens per request
- Chat commands: ~200 tokens per request

Monitor usage in IO Intelligence dashboard.

## Troubleshooting

**API Key Issues**:
- Check environment variable is set
- Verify key is valid on io.net
- Check browser console for errors

**Slow Responses**:
- Reduce max_tokens
- Use smaller model (8B instead of 70B)
- Check network connection

**Poor Quality Responses**:
- Adjust temperature
- Refine system prompts
- Try different model
- Add more context in prompts
