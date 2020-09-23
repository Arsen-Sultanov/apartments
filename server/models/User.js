import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true
  },
  createdOn: {
    type: Date,
    default: () => new Date(Date.now()).toUTCString(),
    required: true
  }
});

export default model('User', userSchema);
