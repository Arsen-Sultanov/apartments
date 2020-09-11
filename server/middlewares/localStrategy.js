import { LocalStrategy } from 'passport-local';
import { Next } from 'react-bootstrap/esm/PageItem';

export default new LocalStrategy(async (username, password, done) => {
  try {
    console.log(done);
  } catch (error) {
    console.log(error);
    throw error;
  }
});
