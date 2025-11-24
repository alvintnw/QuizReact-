import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_req: Request, { params }: any) {
  try {
    const pet = await prisma.pet.findUnique({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(pet);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: any) {
  try {
    const body = await req.json();
    const pet = await prisma.pet.update({
      where: { id: Number(params.id) },
      data: body,
    });
    return NextResponse.json(pet);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: any) {
  try {
    await prisma.pet.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
