import { bold, yellow, red, green } from 'https://deno.land/std/fmt/colors.ts';
import { Application, Router, send } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts';

const server = { hostname: '127.0.0.1', port: 8000 };
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(
  `${yellow('Start listening on')} => ${green(server.hostname)}:${red(
    server.port.toString()
  )}`
);
await app.listen(server);
