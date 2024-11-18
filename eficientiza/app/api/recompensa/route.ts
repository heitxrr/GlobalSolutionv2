import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/recompensas');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Falha ao recuperar recompensas:', error);
    return NextResponse.json({ error: 'Falha ao recuperar recompensas' }, { status: 500 });
  }
}
