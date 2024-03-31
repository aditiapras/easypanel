import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { email } = await request.json();
  try {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });
    if (user) {
      const loginCount = await prisma.user.update({
        where: {
          id: user[0].id,
        },
        data: {
          loginCount: user[0].loginCount + 1,
        },
      });
      return NextResponse.json(user[0]);
    }
  } catch (error) {}
  return NextResponse.json({ message: "Login Failed" });
}
