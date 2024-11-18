import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.JAVA_API_URL}/oficinas`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Falha ao recuperar oficinas:', error);
    return NextResponse.json({ error: 'Falha ao recuperar oficinas' }, { status: 500 });
  }
}
