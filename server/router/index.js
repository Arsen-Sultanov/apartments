import { Router } from 'express';
import user from './user';
import authenticate from './sign';
import apartments from './apartments';

const router = Router();
router
  .use(user)
  .use(authenticate)
  .use(apartments);
router.get('/ping', (req, res) => res.send('pong'));

export default router;
