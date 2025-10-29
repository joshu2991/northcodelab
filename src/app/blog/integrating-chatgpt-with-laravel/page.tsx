import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BlogArticle } from '@/components/BlogArticle'

const article = {
  title: 'Integrating ChatGPT with Laravel: A Practical Guide',
  date: 'December 2023',
  readTime: '12 min read',
  content: (
    <>
      <h2>Introduction</h2>
      <p>Integrating OpenAI&apos;s ChatGPT API into Laravel applications opens up powerful possibilities for AI-driven features. In this guide, I&apos;ll walk through a production-ready implementation.</p>

      <h2>Setup</h2>
      <p>First, install the OpenAI PHP client:</p>
      <pre><code>composer require openai-php/laravel</code></pre>
      <p>Add your API key to <code>.env</code>:</p>
      <pre><code>OPENAI_API_KEY=your-api-key-here</code></pre>

      <h2>Basic Implementation</h2>
      <p>Create a service class to handle ChatGPT interactions:</p>
      <pre><code>{`namespace App\\Services;

use OpenAI\\Laravel\\Facades\\OpenAI;

class ChatService
{
    public function generateResponse(string $prompt): string
    {
        $response = OpenAI::chat()->create([
            'model' => 'gpt-4',
            'messages' => [
                ['role' => 'user', 'content' => $prompt]
            ],
            'max_tokens' => 150,
        ]);

        return $response->choices[0]->message->content;
    }
}`}</code></pre>

      <h2>Error Handling</h2>
      <p>Always implement proper error handling:</p>
      <pre><code>{`try {
    $response = OpenAI::chat()->create([...]);
} catch (\\Exception $e) {
    Log::error('OpenAI API Error: ' . $e->getMessage());
    // Fallback response
    return 'I apologize, but I\\'m having trouble processing your request.';
}`}</code></pre>

      <h2>Rate Limiting</h2>
      <p>Implement rate limiting to manage API costs:</p>
      <pre><code>{`use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::tooManyAttempts('openai-request', 10)) {
    throw new \\Exception('Too many requests');
}

RateLimiter::hit('openai-request');`}</code></pre>

      <h2>Caching Responses</h2>
      <p>Cache common queries to reduce API calls:</p>
      <pre><code>{`$cacheKey = 'chatgpt-' . md5($prompt);
return Cache::remember($cacheKey, 3600, function() use ($prompt) {
    return $this->generateResponse($prompt);
});`}</code></pre>

      <h2>Best Practices</h2>
      <ol>
        <li><strong>Set appropriate max_tokens</strong> - Don&apos;t request more than you need</li>
        <li><strong>Use system messages</strong> - Guide the AI&apos;s behavior with system prompts</li>
        <li><strong>Implement retry logic</strong> - Handle transient failures gracefully</li>
        <li><strong>Monitor usage</strong> - Track API calls and costs</li>
        <li><strong>Sanitize inputs</strong> - Clean user inputs before sending to API</li>
      </ol>

      <h2>Production Considerations</h2>
      <ul>
        <li>Use queued jobs for async processing</li>
        <li>Implement proper logging</li>
        <li>Set up monitoring and alerts</li>
        <li>Consider using streaming responses for better UX</li>
        <li>Implement fallback mechanisms</li>
      </ul>

      <p>This integration has enabled powerful AI features in our applications while maintaining reliability and cost control.</p>
    </>
  )
}

export default function ChatGPTIntegrationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogArticle article={article} />
      <Footer />
    </main>
  )
}

