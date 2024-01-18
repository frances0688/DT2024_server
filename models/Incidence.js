const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const IncidenceSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		progress: {
			type: String,
			enum: [
				"Registro de incidencia",
				"Apertura de reclamación",
				"Inspección",
				"Trabajando en la reparación",
				"Finalización",
			],
		},
		owner: String,
		community: String,
		provider: {
			type: String,
			enum: ["Fontanero", "Mobiliario", "Electricista", "Cerrajero"],
		},
		image: String,
		date: String,
		status: {
			type: String,
			enum: ["Pendiente", "Activa", "Resuelta"],
		},
	},
	{ timestamps: true }
);

const Incidence = mongoose.model("Incidence", IncidenceSchema);

module.exports = Incidence;
