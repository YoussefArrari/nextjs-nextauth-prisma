import bycrpt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body, "BODY");
    const { email, name, password } = body;
    if (!email || !name || !password) {
      return new NextResponse("Missing fields", { status: 400 });
    }
    const hashedPassword = await bycrpt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal Error", { status: 500 });
  }
}
