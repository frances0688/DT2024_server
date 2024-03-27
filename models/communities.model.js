import { Schema, model } from 'mongoose';

const communitySchema = new Schema({
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    }
  },
  president: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  gastos: {
    type: Number,
    default: 0
  },
  incidents: [{
    type: Schema.Types.ObjectId,
    ref: 'Incident'
  }]
});

const communityModel = model('Community', communitySchema, 'communities');
export default communityModel;
