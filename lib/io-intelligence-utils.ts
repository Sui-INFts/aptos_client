/**
 * IO Intelligence API Integration
 * Documentation: https://docs.io.net/docs/io-intelligence#getting-started
 * API Reference: https://api.intelligence.io.solutions
 */

export interface IOIntelligenceConfig {
  apiKey: string;
  baseUrl: string;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface EmbeddingRequest {
  model: string;
  input: string | string[];
}

export interface EmbeddingResponse {
  object: string;
  data: Array<{
    object: string;
    embedding: number[];
    index: number;
  }>;
  model: string;
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

/**
 * Available AI Models on IO Intelligence
 * See: https://docs.io.net/docs/io-intelligence
 */
export const IO_MODELS = {
  // Chat Models
  LLAMA_3_3_70B: 'meta-llama/Llama-3.3-70B-Instruct',
  LLAMA_3_1_8B: 'meta-llama/Llama-3.1-8B-Instruct',
  LLAMA_3_1_70B: 'meta-llama/Llama-3.1-70B-Instruct',
  LLAMA_3_2_3B: 'meta-llama/Llama-3.2-3B-Instruct',
  
  // Embedding Models
  EMBEDDING: 'text-embedding-ada-002', // Adjust based on available models
} as const;

/**
 * Get IO Intelligence configuration
 * API Key should be stored in environment variables
 */
export const getIOIntelligenceConfig = (): IOIntelligenceConfig => {
  return {
    apiKey: process.env.NEXT_PUBLIC_IO_INTELLIGENCE_API_KEY || '',
    baseUrl: process.env.NEXT_PUBLIC_IO_INTELLIGENCE_BASE_URL || 'https://api.intelligence.io.solutions',
  };
};

/**
 * IO Intelligence API Client
 */
export class IOIntelligenceClient {
  private config: IOIntelligenceConfig;

  constructor(config?: IOIntelligenceConfig) {
    this.config = config || getIOIntelligenceConfig();
  }

  /**
   * Chat Completions API
   * Generates AI responses based on conversation context
   */
  async chatCompletion(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    if (!this.config.apiKey) {
      throw new Error('IO Intelligence API key is not configured');
    }

    const response = await fetch(`${this.config.baseUrl}/api/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`IO Intelligence API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  /**
   * Generate Embeddings
   * Converts text into vector representations
   */
  async createEmbedding(request: EmbeddingRequest): Promise<EmbeddingResponse> {
    if (!this.config.apiKey) {
      throw new Error('IO Intelligence API key is not configured');
    }

    const response = await fetch(`${this.config.baseUrl}/api/v1/embeddings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`IO Intelligence API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  /**
   * Streaming Chat Completion
   * For real-time streaming responses
   */
  async streamChatCompletion(
    request: ChatCompletionRequest,
    onChunk: (chunk: string) => void,
    onComplete: () => void,
    onError: (error: Error) => void
  ): Promise<void> {
    if (!this.config.apiKey) {
      throw new Error('IO Intelligence API key is not configured');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/api/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ ...request, stream: true }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`IO Intelligence API error: ${response.status} - ${error}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Stream reader not available');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          onComplete();
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              continue;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || '';
              if (content) {
                onChunk(content);
              }
            } catch (e) {
              console.error('Error parsing stream chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Unknown error'));
    }
  }
}

/**
 * Helper function to create an IO Intelligence client instance
 */
export const createIOIntelligenceClient = (apiKey?: string): IOIntelligenceClient => {
  const config = apiKey 
    ? { ...getIOIntelligenceConfig(), apiKey }
    : getIOIntelligenceConfig();
  
  return new IOIntelligenceClient(config);
};

/**
 * Use Cases for INFTs Credit Score Application
 */

/**
 * Analyze user financial behavior and provide credit score insights
 */
export async function analyzeCreditScoreBehavior(
  client: IOIntelligenceClient,
  userTransactions: string,
  currentScore: number
): Promise<string> {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_3_70B,
    messages: [
      {
        role: 'system',
        content: 'You are a financial AI advisor specializing in blockchain credit scoring and DeFi behavior analysis. Provide clear, actionable insights.',
      },
      {
        role: 'user',
        content: `Analyze this user's blockchain activity and provide insights on their credit score:
        
Current Credit Score: ${currentScore}/1000
Recent Transactions: ${userTransactions}

Please provide:
1. Assessment of their financial behavior
2. Recommendations to improve their credit score
3. Risk factors to watch out for
4. DeFi best practices they should follow`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}

/**
 * Generate personalized financial recommendations
 */
export async function generateFinancialRecommendations(
  client: IOIntelligenceClient,
  score: number,
  defiHistory: string
): Promise<string> {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_1_70B,
    messages: [
      {
        role: 'system',
        content: 'You are a DeFi financial advisor. Provide personalized recommendations based on user credit scores and activity.',
      },
      {
        role: 'user',
        content: `User Credit Score: ${score}/1000
DeFi Activity: ${defiHistory}

Provide 3-5 specific recommendations to improve their credit score and DeFi reputation.`,
      },
    ],
    temperature: 0.8,
    max_tokens: 300,
  });

  return response.choices[0].message.content;
}

/**
 * Explain credit score calculation
 */
export async function explainCreditScoreFactors(
  client: IOIntelligenceClient,
  score: number
): Promise<string> {
  const response = await client.chatCompletion({
    model: IO_MODELS.LLAMA_3_2_3B,
    messages: [
      {
        role: 'system',
        content: 'You are a blockchain credit scoring expert. Explain credit score factors in simple terms.',
      },
      {
        role: 'user',
        content: `Explain what factors contribute to a credit score of ${score}/1000 in a decentralized credit system. Keep it simple and actionable.`,
      },
    ],
    temperature: 0.6,
    max_tokens: 200,
  });

  return response.choices[0].message.content;
}

