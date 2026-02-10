import { nexusVerifyMiddleware } from "@hiyocord/hiyocord-nexus-core";
import { fetchHandler } from '@hiyocord/discord-interaction-client';
import { resolver } from "./register";
import { app } from "./type";

app.use("*", async (c, next) => {
  console.log(`${c.req.method} ${c.req.url} ${JSON.stringify(c.req.header())}`);
  await next();
  console.log(`${c.req.method} ${c.req.url} ${c.res.status} ${await c.res.clone().text()} ${JSON.stringify(c.env)}`);
});
app
  .use("/interactions", nexusVerifyMiddleware)
  .mount("/interactions", fetchHandler(resolver).fetch)

export default app
