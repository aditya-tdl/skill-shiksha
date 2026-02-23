import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/index.js";
import pg from "pg";

const connectionString = `${process.env.DATABASE_URL}`;

// Enable SSL for production (required by RDS)
const poolConfig = {
    connectionString,
};

if (process.env.NODE_ENV === "production") {
    poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = new pg.Pool(poolConfig);
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export { prisma };
