# IO Intelligence API Key (The AI Magic Key)

So you want to use the AI features in my project? Here's everything you need to know about getting and using your IO Intelligence API key.

## Getting Your Key (The Easy Part)

1. **Go to [io.net](https://io.net)** - The official IO Intelligence website
2. **Sign up or log in** - Create an account if you don't have one
3. **Navigate to API Keys section** - Look for the API keys in your dashboard
4. **Generate a new key** - Click the "Generate" button
5. **Copy the key** - Save it somewhere safe (you'll need it)

## Setup (The Configuration Part)

Add your key to `.env`:

```bash
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_key_here
```

**Important**: Make sure the file is named `.env` and that it's in your project root.

## Current Key (Development)

The app includes a fallback key for development testing. For production, you should definitely use your own key.

**Why use your own key?**
- **Better rate limits** - Your own plan has higher limits
- **More reliable** - Fallback keys can be rate limited
- **Production ready** - Your key is meant for production use

## Models Available (The AI Options)

I'm using these models in the project:

- **`meta-llama/Llama-3.3-70B-Instruct-Turbo`** - Best quality, most intelligent
- **`meta-llama/Llama-3.1-70B-Instruct-Turbo`** - Balanced performance and quality
- **`meta-llama/Llama-3.1-8B-Instruct-Turbo`** - Fastest, good for simple tasks

**Which one should you use?**
- **For credit analysis** - Use Llama 3.3 70B (best quality)
- **For general chat** - Use Llama 3.1 70B (balanced)
- **For simple responses** - Use Llama 3.1 8B (fastest)

## Usage in Code (The Technical Part)

Here's how I use the API in the project:

```typescript
import { createIOIntelligenceClient, IO_MODELS } from '@/lib/io-intelligence-utils';

const client = createIOIntelligenceClient();

const response = await client.chatCompletion({
  model: IO_MODELS.LLAMA_3_3_70B,
  messages: [{
    role: 'user',
    content: 'Your prompt here'
  }],
  temperature: 0.7, // Controls randomness
  max_tokens: 1000, // Maximum response length
});
```

## Rate Limits (The Important Part)

Check your io.net dashboard for your current plan limits. Different plans have different limits:

- **Free tier** - Limited requests per month
- **Paid plans** - Higher limits and better performance
- **Enterprise** - Custom limits and dedicated support

**Pro tip**: Monitor your usage in the dashboard to avoid hitting limits.

## Error Handling (When Things Go Wrong)

I've added error handling for common API issues:

```typescript
const handleIOError = (error: any) => {
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

## Best Practices (What I Learned)

### 1. Keep Your Key Secure
- **Don't commit it to git** - Use `.env` and add it to `.gitignore`
- **Don't share it publicly** - Keep it private
- **Rotate it regularly** - Generate new keys periodically

### 2. Monitor Usage
- **Check your dashboard** - Monitor API usage and costs
- **Set up alerts** - Get notified when approaching limits
- **Track costs** - Keep an eye on your spending

### 3. Optimize Requests
- **Use appropriate models** - Don't use the most expensive model for simple tasks
- **Limit response length** - Use `max_tokens` to control costs
- **Cache responses** - Don't make the same request twice

### 4. Handle Errors Gracefully
- **Always have fallbacks** - Don't let API failures break your app
- **Provide clear messages** - Users need to know what went wrong
- **Retry logic** - Sometimes temporary failures can be retried

## Testing Your Key (Make Sure It Works)

### Quick Test
```typescript
const testAPIKey = async () => {
  try {
    const client = createIOIntelligenceClient();
    const response = await client.chatCompletion({
      model: IO_MODELS.LLAMA_3_1_8B, // Use the cheapest model for testing
      messages: [{
        role: 'user',
        content: 'Hello, this is a test message.'
      }],
      max_tokens: 50, // Keep it short for testing
    });
    
    console.log('API key works!', response.choices[0].message.content);
  } catch (error) {
    console.error('API key test failed:', error);
  }
};
```

### Integration Test
1. **Start the app** - `pnpm run dev`
2. **Go to dashboard** - Navigate to the AI Insights section
3. **Try generating insights** - Click the "Generate Insights" button
4. **Check console** - Look for any API errors

## Common Issues (And How to Fix Them)

### 1. Invalid API Key
- **Problem**: 401 Unauthorized errors
- **Solution**: Check your key in the dashboard and make sure it's correct

### 2. Rate Limit Exceeded
- **Problem**: 429 Too Many Requests
- **Solution**: Wait a bit or upgrade your plan

### 3. Model Not Available
- **Problem**: Model not found errors
- **Solution**: Check which models are available in your plan

### 4. Network Issues
- **Problem**: Timeout or connection errors
- **Solution**: Check your internet connection and try again

## The Bottom Line

IO Intelligence is a great service for adding AI features to your app. The API is easy to use, the models are high quality, and the pricing is reasonable. Just make sure to:

1. **Get your own key** - Don't rely on fallback keys
2. **Monitor usage** - Keep an eye on your limits and costs
3. **Handle errors** - Always have fallbacks for API failures
4. **Test thoroughly** - Make sure everything works before going live

*The AI features really make the platform feel modern and intelligent. Users love being able to chat with an AI that understands their wallet and can provide personalized advice.*

## Quick Reference

### Environment Variable
```bash
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_key_here
```

### Best Model for Each Use Case
- **Credit analysis** - `meta-llama/Llama-3.3-70B-Instruct-Turbo`
- **General chat** - `meta-llama/Llama-3.1-70B-Instruct-Turbo`
- **Simple responses** - `meta-llama/Llama-3.1-8B-Instruct-Turbo`

### Error Codes
- **401** - Invalid API key
- **429** - Rate limit exceeded
- **500+** - Service unavailable

*This should be everything you need to get started with IO Intelligence in the project.*