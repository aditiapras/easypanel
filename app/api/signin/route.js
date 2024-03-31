import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { email } = await request.json();
  console.log(email);
  try {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });
    if (user) {
      return NextResponse.json(user[0]);
    }
  } catch (error) {}
  return NextResponse.json({ message: "Login Failed" });
}
