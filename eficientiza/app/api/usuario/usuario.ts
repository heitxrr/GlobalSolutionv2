import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/usuario/3/usuario');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Falha ao recuperar oficinas:', error);
    return NextResponse.json({ error: 'Falha ao recuperar oficinas' }, { status: 500 });
  }
}
