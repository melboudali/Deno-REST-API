import { bold, yellow } from "https://deno.land/std/fmt/colors.ts";
import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async context => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html"
  });
});

const port = '8000';
console.log(bold('Start listening on port: ') + yellow(port));
await app.listen(port);