import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models';

export const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!(user === password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

export const deserializeUser = async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) done(null, user);
  } catch (err) {
    done(err, null);
  }
};

export const checkAuth = (req, res, next) => {
  req.isAuthenticated()
    ? next()
    : res.status(401).send({ message: 'Unauthorized' });
};
