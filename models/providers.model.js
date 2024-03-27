import { Schema, model } from 'mongoose';

const providerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  services: {
    type: [{
      type: String,
      enum: ['Electricista', 'Fontanero', 'Seguro', 'Pintor', 'Cerrajero', 'Carpintero', 'Albañil', 'Limpieza', 'Antenista', 'Arquitecto', 'Abogado', 'Cuidador', 'Jardinero', 'Domófono', 'Otros']
    }],
    default: []
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{9}$/ // Spanish phone number regex
  },
  image: String,
  rating: {
    type: Number,
    default: 0
  },
  contactPerson: String
});

const providerModel = model('Provider', providerSchema);
export default providerModel;
