import { Router } from 'express';
import { sign } from '../controllers';

const routerInstance = Router();

routerInstance.post('/sign', sign.signIn);
routerInstance.delete('/sign', sign.signOut);


export default routerInstance;
