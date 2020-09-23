import { Schema, model } from 'mongoose';

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  floors: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'apartment',
      'private-house'
    ]
  },
  cost: {
    type: Number,
    required: true
  },
  image: {
    type: Array,
    required: true
  },
  rating: {
    type: Number,
    default: 1,
    required: true
  },
  createdOn: {
    type: Date,
    default: () => new Date(Date.now()).toUTCString(),
    required: true
  }
});

export default model('Apartment', apartmentSchema);
