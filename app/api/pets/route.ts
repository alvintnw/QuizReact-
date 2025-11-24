import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const pets = await prisma.pet.findMany();
    return NextResponse.json(pets);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const pet = await prisma.pet.create({ data });
    return NextResponse.json(pet);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
