import { Schema, model } from 'mongoose';


// Define schema for Incident
const incidentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  community_id: {
    type: Schema.Types.ObjectId,
    ref: 'Community', // Assuming you have a Community model
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  category: {
    type: String,
    enum: ['Mantenimiento', 'Seguridad', 'Limpieza', 'Servicios', 'Otro'],
    required: true
  },
  providers: {
    type: [Schema.Types.ObjectId], // Assuming providers are represented by ids
    default: []
  },
  date: {
    type: Date,
    default: Date.now
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
    type: [String], // Assuming image URLs are stored as strings
    default: []
  },
  status: {
    type: String,
    default: 'Active'
  },
  notifyUsers: {
    type: [Schema.Types.ObjectId],
    ref: 'User', // Assuming you have a User model for users to be notified
    default: []
  }
});

// Create model from schema
const incidentModel = model('Incident', incidentSchema);
export default incidentModel;
