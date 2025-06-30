import SwaggerUI from '@/components/SwaggerUI';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
        <SwaggerUI />
      </div>
    </main>
  );
} 