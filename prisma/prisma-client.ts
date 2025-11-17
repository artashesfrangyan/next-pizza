import { PrismaClient } from "@prisma/client";

const PRISMA_KEY = Symbol.for("prisma.client");

type GlobalWithPrisma = typeof globalThis & {
  [PRISMA_KEY]?: PrismaClient;
};

const globalWithPrisma = globalThis as GlobalWithPrisma;

export const prisma = globalWithPrisma[PRISMA_KEY] || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalWithPrisma[PRISMA_KEY] = prisma;
}
