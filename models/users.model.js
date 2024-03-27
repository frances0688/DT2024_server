import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  door: String,
  floor: String,
  phone: {
    type: String,
    match: /^\+?[0-9]+$/, // Regex for phone number validation
    required: true
  },
  owner: {
    type: Boolean,
    default: false
  },
  communicationAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String
  },
  community_id: {
    type: Schema.Types.ObjectId,
    ref: 'Community', // Assuming you have a Community model
    required: true
  },
  notifications: {
    type: Boolean,
    default: true
  },
  associateNumber: String,
  image: String,
  companyName: String
});

const userModel = model('User', usersSchema, 'users');
export default userModel;
