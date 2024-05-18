import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";
import { migrate } from "drizzle-orm/neon-http/migrator";

config({ path: process.env.DATABASE_URL! });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
  } catch (error) {
    console.error("something went missing in migration", error);
    process.exit(1);
  }
};

main();
