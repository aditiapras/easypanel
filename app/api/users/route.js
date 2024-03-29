import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ message: "Hello World", users });
}

export async function POST(request) {
  const body = await request.json();
  const user = await prisma.user.create({ data: body });
  return NextResponse.json({ message: "Hello World", user });
}