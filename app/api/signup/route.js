import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function POST(request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await prisma.user.findMany({
      where: {
        email,
      },
    });

    if (existingUser.length > 0) {
      return NextResponse.json({
        message: "Email already taken",
        registered: false,
      });
    } else {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          username: name,
        },
      });
      return NextResponse.json({
        message: "Signup Successful",
        registered: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      registered: false,
    });
  }
}
