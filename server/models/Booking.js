import { Schema, ObjectId, model } from 'mongoose';

const bookingSchema = new Schema({
  Appartment: {
    type: ObjectId,
    required: true
  },
  User: {
    type: ObjectId,
    required: true
  },
  state: {
    type: String,
    enum: [
      'waiting',
      'confirm'
    ],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export default model('Booking', bookingSchema);
