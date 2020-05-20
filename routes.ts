import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getUsers } from './controllers/users.ts';

const router = new Router();

export default router.get('/api', getUsers);
