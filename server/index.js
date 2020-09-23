/** This is a description of the foo function. */
import express from 'express';
import passport from 'passport';
import fileUpload from 'express-fileupload';

import { passportMiddlewares, session } from './middlewares';
import router from './router';

import { server } from '../config';

const app = express();

passport.use(passportMiddlewares.localStrategy);
passport.serializeUser(passportMiddlewares.serializeUser);
passport.deserializeUser(passportMiddlewares.deserializeUser);

app
  .use(express.json())
  .use(fileUpload())
  .use(passport.initialize())
  .use(session)
  .use('/api/v1', router)
  .use((error, req, res) => {
    return res.status(500).json({ error: error.toString() });
  });


app.listen(server.port, () => {
  console.log(`Server start on ${server.port} port`);
});
