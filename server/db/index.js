import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { server } from '../../config';
console.log(server.db.fullUrl());

try {
  mongoose.connect(server.db.fullUrl(), { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.Promise = bluebird;
  mongoose.connection.on('open', () => {
    console.log('mongo connected');
  });
  mongoose.connection.on('error', error => {
    console.log('mongo error');
    console.error(error);
  });
} catch (error) {
  console.log(error);
}

export const mongoConnection = mongoose.connection;
