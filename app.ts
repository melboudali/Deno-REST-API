import { bold, yellow, red, green } from "https://deno.land/std/fmt/colors.ts";
import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async context => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html"
  });
});

const server = { hostname: "127.0.0.1", port: 8000 };
console.log(`${yellow('Start listening on')} => ${green(server.hostname)}:${red(server.port.toString())}`);
await app.listen(server);