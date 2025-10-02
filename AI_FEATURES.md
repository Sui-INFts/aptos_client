# AI Features Documentation

This project includes several AI-powered features using IO Intelligence. Here's what I've built and how they work.

## Features Overview

### 1. Credit Score Analysis
Analyzes user behavior patterns based on their credit score and on-chain activity.

### 2. Financial Recommendations
Provides personalized DeFi strategy suggestions based on credit score and Aptos activity.

### 3. Score Factor Explanations
Explains what factors influence the credit score and how to improve it.

### 4. DeFi Action Chat
Natural language interface for wallet queries and DeFi actions.

## AI Insights Panel

Location: Dashboard and "My SBTs" page

### Credit Behavior Analysis

Examines spending patterns and provides insights:

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

Suggests DeFi strategies on Aptos:

```typescript
const handleGetRecommendations = async () => {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_1_70B,
    messages: [{
      role: 'user',
      content: `Analyze Aptos DeFi landscape and recommend strategies for:
                Credit Score: ${creditScore}/1000
                Consider: Liquidswap, Thala, PancakeSwap on Aptos
                
                End with: ⚠️ DYOR - Always do your own research before investing.`
    }],
    temperature: 0.8,
    max_tokens: 700,
  });
};
```

All recommendations include a DYOR disclaimer for safety.

### Score Explanations

Breaks down credit score factors:

```typescript
const handleExplainScore = async () => {
  const response = await client.chatCompletion({
    messages: [{
      role: 'user',
      content: `Explain credit score of ${creditScore}/1000 on Aptos.
                What factors affect it? How to improve?`
    }],
  });
};
```

## Personalization

All AI responses are personalized with:

**User Wallet Address**:
```
Your Aptos Wallet: 0x8f4ae6e8e44ed628cc62...
View on Explorer: https://explorer.aptoslabs.com/account/0x8f4.../
```

**Aptos-Specific Context**:
- References Aptos DEXs (Liquidswap, Thala, PancakeSwap)
- Links to Aptos Explorer for transactions
- Mentions Aptos-specific features

**Recent Activity**:
- Transaction count
- Portfolio value
- Account age

## Response Formatting

I clean AI responses to be more readable:

```typescript
const formatAIResponse = (content: string) => {
  return content
    .replace(/^[-*•]\s*/gm, '') // Remove bullet points
    .replace(/\n{3,}/g, '\n\n') // Clean excessive newlines
    .replace(/#{1,6}\s*/g, '')  // Remove markdown headers
    .trim();
};
```

This removes AI formatting artifacts and makes responses flow naturally.

## UI Components

### Tabbed Interface

```
┌────────────────────────────────────┐
│  [Behavior] [Recommendations] [Explain] │
│                                    │
│  AI response content...            │
│  Formatted for readability         │
│                                    │
│  ⚠️ DYOR disclaimer (for recs)     │
└────────────────────────────────────┘
```

### Wallet Display

```
┌────────────────────────────────────┐
│  Your Wallet Address               │
│  0x8f4ae6e8e44ed628cc62...         │
│  [View on Aptos Explorer ↗]        │
└────────────────────────────────────┘
```

### DYOR Disclaimer

For recommendations:
```
⚠️ This is an AI-generated recommendation based on current 
Aptos DeFi landscape. Always Do Your Own Research (DYOR) 
before investing or interacting with any protocol.
```

## Integration Points

**Dashboard**: Toggle button shows/hides AI panel below credit factors

**My SBTs Page**: AI insights appear below SBT details

**DeFi Chat**: Processes natural language commands

## Error Handling

Graceful fallbacks for API issues:

```typescript
try {
  const response = await client.chatCompletion({...});
  setAnalysis(response.choices[0].message.content);
} catch (error) {
  console.error('AI error:', error);
  setAnalysis('Unable to generate insights. Please check your API key.');
}
```

## Performance

**Model Selection**:
- Llama 3.3 70B: Complex analysis (better quality)
- Llama 3.1 70B: Recommendations (balanced)
- Llama 3.1 8B: Simple queries (faster)

**Token Limits**:
- Behavior analysis: 500 tokens
- Recommendations: 700 tokens
- Explanations: 400 tokens

**Caching**: Results are stored in component state to avoid redundant API calls

## Files

- `/components/AIInsightsPanel.tsx` - Main AI panel component
- `/lib/io-intelligence-utils.ts` - IO client and utilities
- `/app/dashboard/page.tsx` - Dashboard integration
- `/app/my-sbts/page.tsx` - My SBTs integration

