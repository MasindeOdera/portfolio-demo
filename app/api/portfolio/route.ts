import { NextResponse } from 'next/server';

const API_URL = 'https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio';

export async function GET() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('GET /api/portfolio Error:', error); 
    return NextResponse.json({ error: 'Failed to fetch projects.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('POST /api/portfolio Error:', error); 
    return NextResponse.json({ error: 'Failed to add new project.' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updatedProject } = await request.json();
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedProject),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('PUT /api/portfolio Error:', error); 
    return NextResponse.json({ error: 'Failed to update project.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return NextResponse.json({ message: 'Project deleted successfully.' });
    } else {
      return NextResponse.json({ error: 'Failed to delete project.' }, { status: 500 });
    }
  } catch (error) {
    console.error('DELETE /api/portfolio Error:', error); 
    return NextResponse.json({ error: 'Failed to delete project.' }, { status: 500 });
  }
}
