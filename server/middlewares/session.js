
import expressSesion from 'express-session';
import connectMongo from 'connect-mongo';

import { mongoConnection } from '../db';
import { server } from '../../config';

const MongoSesionStore = connectMongo(expressSesion);

export default expressSesion({
  store: new MongoSesionStore({
    mongooseConnection: mongoConnection,
    collection: 'sessions'
  }),
  secret: server.session.secret,
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: {
    maxAge: server.session.cokieMaxAge,
    path: '/',
    httpOnly: true,
    secure: false
  }
});
