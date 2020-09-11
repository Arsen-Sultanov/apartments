/** This is a description of the foo function. */
import express from 'express';
import passport from 'passport';

import { localStrategy, deserializeUser, session } from './middlewares';

import { server } from '../config';

const app = express();

passport.use(localStrategy);
passport.deserializeUser(deserializeUser);

app
  .use(express.urlencoded({ extended: true }))
  .use(passport.initialize())
  .use(session);


app.listen(server.port, () => {
  console.log(`Server start on ${server.port} port`);
});
