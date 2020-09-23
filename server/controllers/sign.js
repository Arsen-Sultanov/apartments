import bcrypt from 'bcrypt';
import { User } from '../models';
import { sign } from '../validation-schema';
import { server } from '../../config';

const signIn = async (req, res, next) => {
  try {
    await sign.signIn
      .validateAsync(req.body, { abortEarly: false });

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).send('Unauthorized');
      return;
    };

    const hashedPassword = await bcrypt.hash(req.body.password, server.salt);

    if (user.password !== hashedPassword) {
      res.status(401).send('Unauthorized');
      return;
    }

    req.logIn(user, error => {
      if (error) {
        console.log(error);
        res.status(401).send('Unauthorized');
        return;
      };
      res.status(200).send(user);
    });
  } catch (error) {
    if (error.isJoi) {
      res.status(400).send(error);
      return;
    }
    next(error);
  }
};

const signOut = async (req, res, next) => {
  try {
    req.session.destroy();
    res.status(200)
      .clearCookie('connect.sid')
      .send('You have been successfully logged out!');
  } catch (error) {
    next(error);
  }
};

export default {
  signIn,
  signOut
};
