import { NextResponse } from 'next/server';

export async function GET() {
  const openApiSpec = await fetch('https://api.dataoculus.app/public/api/openapi.json', {
    headers: {
      'Authorization': 'Bearer TY3YzYiLCJ0eXAiOiJKV1QifQ'
    }
  });
  const data = await openApiSpec.json();
  return NextResponse.json(data);
} 