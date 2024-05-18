import { Hono } from "hono";
import { db } from "@/db/index";
import { account } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { HTTPException } from "hono/http-exception";
const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    throw new HTTPException(401, { message: "youre unauthorized" });
  }

  const data = await db
    .select({
      id: account.id,
      name: account.name,
    })
    .from(account);
  return c.json({ data });
});

export default app;
