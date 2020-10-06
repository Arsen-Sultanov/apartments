import bcrypt from 'bcrypt';
import { User } from '../models';
import { sign } from '../validation-schema';
import { server } from '../../config';

const add = async (req, res, next) => {
  try {
    await sign.signUp
      .validateAsync(req.body, { abortEarly: false });

    const findedUser = await User.find({
      $or: [
        { email: req.body.email },
        { phone: req.body.phone }
      ]
    });

    console.log(findedUser);

    if (findedUser.length) {
      res
        .status(409)
        .send({ error: 'User with the same email or phone already exists' });
      return;
    }
    console.log(req.body, server.salt);
    req.body.password = await bcrypt.hash(req.body.password, server.salt);

    const user = new User(req.body);
    await user.save();

    res.status(200).send(user);
  } catch (error) {
    if (error.isJoi) {
      console.log(error.message);
      res.status(400).send(error);
      return;
    }

    next(error);
  }
};

export default {
  add
};
