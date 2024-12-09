import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const newProject = await request.json();
  const response = await fetch('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio', {
    method: 'POST',
    body: JSON.stringify(newProject),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return NextResponse.json(data);
}
