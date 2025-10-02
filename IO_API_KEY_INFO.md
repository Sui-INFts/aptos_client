# IO Intelligence API Key

Quick reference for IO Intelligence API configuration.

## Getting Your Key

1. Go to [io.net](https://io.net)
2. Sign up or log in
3. Navigate to API Keys section
4. Generate a new key
5. Copy the key

## Setup

Add to `.env.local`:

```bash
NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY=your_key_here
```

## Current Key (Development)

The app includes a fallback key for development testing. For production, use your own key.

## Models Available

- `meta-llama/Llama-3.3-70B-Instruct-Turbo` - Best quality
- `meta-llama/Llama-3.1-70B-Instruct-Turbo` - Balanced
- `meta-llama/Llama-3.1-8B-Instruct-Turbo` - Fastest

## Usage in Code

```typescript
import { createIOIntelligenceClient, IO_MODELS } from '@/lib/io-intelligence-utils';

const client = createIOIntelligenceClient();

const response = await client.chatCompletion({
  model: IO_MODELS.LLAMA_3_3_70B,
  messages: [{
    role: 'user',
    content: 'Your prompt here'
  }],
});
```

## Rate Limits

Check io.net dashboard for your current plan limits.

## Troubleshooting

**Invalid Key Error**: Verify key is correct in `.env.local`

**Rate Limit Error**: Upgrade plan or reduce request frequency

**Timeout Error**: Try smaller model or reduce max_tokens

For more details, see `IO_INTELLIGENCE_SETUP.md`
