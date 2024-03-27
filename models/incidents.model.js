import { Schema, model } from 'mongoose';


const incidentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  community_id: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false // Could be created by AdmFincas
  },
  category: {
    type: String,
    enum: ['Mantenimiento', 'Seguridad', 'Limpieza', 'Servicios', 'Otro'], // button answer
    required: true
  },
  providers: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  date: {
    type: Date,  // Date.now maybe?
    default: Date.now,
    required: true
  },
  progress: {
    status: {
      type: String,
      enum: ['Reportado', 'En Revisión', 'En Progreso', 'Resuelto', 'Cerrado'],
      default: 'Reportado'
    },
    fecha: {
      type: Date,
      default: Date.now
    },
    note: String
  },
  images: {
    type: [String],
    default: []
  },
  status: {
    type: String,
    default: 'Active'
  },
  notifyUsers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  }
});

const incidentModel = model('Incident', incidentSchema);
export default incidentModel;
