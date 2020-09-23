import { Router } from 'express';
import { user } from '../controllers';

const routerInstance = Router();

routerInstance.post('/user', user.add);


export default routerInstance;
