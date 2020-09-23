import { Router } from 'express';
import { apartments } from '../controllers';

const routerInstance = Router();

routerInstance.route('/apartments')
  .get(apartments.list)
  .post(apartments.add);

export default routerInstance;
