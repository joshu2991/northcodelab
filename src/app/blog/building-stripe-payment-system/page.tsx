import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BlogArticle } from '@/components/BlogArticle'

const article = {
  title: 'Building a Stripe Payment System: Lessons Learned',
  date: 'November 2023',
  readTime: '15 min read',
  content: (
    <>
      <h2>Overview</h2>
      <p>Building a robust Stripe payment integration requires careful consideration of security, error handling, and user experience. Here are the key lessons I learned.</p>

      <h2>Initial Setup</h2>
      <p>Install Stripe&apos;s Laravel package:</p>
      <pre><code>composer require stripe/stripe-php</code></pre>

      <h2>Webhook Handling</h2>
      <p>One of the most critical aspects is properly handling Stripe webhooks:</p>
      <pre><code>{`Route::post('/webhook/stripe', [StripeWebhookController::class, 'handle'])
    ->middleware('stripe.webhook');`}</code></pre>
      <p>Always verify webhook signatures:</p>
      <pre><code>{`$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
$event = null;

try {
    $event = \\Stripe\\Webhook::constructEvent(
        $payload, $sig_header, $endpoint_secret
    );
} catch(\\Exception $e) {
    return response()->json(['error' => $e->getMessage()], 400);
}`}</code></pre>

      <h2>Subscription Management</h2>
      <p>Managing subscriptions requires careful state management:</p>
      <pre><code>{`public function handleSubscriptionCreated($event)
{
    $subscription = $event->data->object;
    
    // Store subscription in database
    // Handle initial setup
    // Send confirmation email
}`}</code></pre>

      <h2>Error Handling</h2>
      <p>Always handle payment errors gracefully:</p>
      <pre><code>{`try {
    $charge = \\Stripe\\Charge::create([...]);
} catch (\\Stripe\\Exception\\CardException $e) {
    // Card was declined
    return $this->handleCardError($e);
} catch (\\Stripe\\Exception\\RateLimitException $e) {
    // Too many requests
    return $this->handleRateLimit($e);
} catch (\\Exception $e) {
    // General error
    return $this->handleGenericError($e);
}`}</code></pre>

      <h2>Security Best Practices</h2>
      <ol>
        <li><strong>Never store card details</strong> - Always use Stripe Elements or Payment Intents</li>
        <li><strong>Use HTTPS only</strong> - All payment requests must be encrypted</li>
        <li><strong>Validate webhook signatures</strong> - Prevent fraudulent webhook calls</li>
        <li><strong>Idempotency keys</strong> - Prevent duplicate charges</li>
        <li><strong>PCI compliance</strong> - Follow Stripe&apos;s guidelines</li>
      </ol>

      <h2>Testing</h2>
      <p>Use Stripe&apos;s test mode extensively:</p>
      <pre><code>{`if (app()->environment() !== 'production') {
    \\Stripe\\Stripe::setApiKey(config('services.stripe.test_key'));
}`}</code></pre>
      <p>Test scenarios:</p>
      <ul>
        <li>Successful payments</li>
        <li>Failed payments</li>
        <li>Disputed charges</li>
        <li>Subscription lifecycle</li>
        <li>Webhook delivery</li>
      </ul>

      <h2>Monitoring</h2>
      <p>Implement comprehensive logging:</p>
      <pre><code>{`Log::info('Stripe Payment', [
    'amount' => $amount,
    'currency' => $currency,
    'status' => $status,
    'customer_id' => $customerId
]);`}</code></pre>

      <h2>Key Lessons Learned</h2>
      <ol>
        <li><strong>Idempotency is crucial</strong> - Always use idempotency keys</li>
        <li><strong>Webhooks are critical</strong> - Don&apos;t rely solely on redirect URLs</li>
        <li><strong>Error messages matter</strong> - Provide clear feedback to users</li>
        <li><strong>Test thoroughly</strong> - Use Stripe&apos;s test cards extensively</li>
        <li><strong>Monitor everything</strong> - Track all payment events</li>
        <li><strong>Handle edge cases</strong> - Partial failures, network issues, etc.</li>
        <li><strong>Keep sensitive data secure</strong> - Never log card details</li>
      </ol>

      <h2>Common Pitfalls</h2>
      <ul>
        <li>Not verifying webhook signatures</li>
        <li>Not handling async webhook delivery</li>
        <li>Poor error message handling</li>
        <li>Missing idempotency checks</li>
        <li>Inadequate logging</li>
      </ul>

      <p>A well-implemented Stripe integration provides a solid foundation for accepting payments while maintaining security and user trust.</p>
    </>
  )
}

export default function StripePaymentSystemPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogArticle article={article} />
      <Footer />
    </main>
  )
}

