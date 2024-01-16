const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const IncidenceSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		provider: {
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
		community: {
			type: ObjectId,
			ref: "Community",
		},
		status: {
			type: String,
			enum: ["Pending", "In Process", "Resolved"],
		},
		image: String,
	},
	{ timestamps: true }
);

const Incidence = mongoose.model("Incidence", IncidenceSchema);

module.exports = Incidence;
