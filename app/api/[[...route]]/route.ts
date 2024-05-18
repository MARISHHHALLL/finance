import { Hono } from "hono";
import { handle } from "hono/vercel";
import account from "./account";
import { HTTPException } from "hono/http-exception";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c.json({ error: "Internal error" }, 501);
});

const routes = app.route("/account", account);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
