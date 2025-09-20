import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.users.findMany();

  return NextResponse.json(users);
}
