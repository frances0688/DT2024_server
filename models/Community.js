const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommunitySchema = new mongoose.Schema(
	{
		address: {
			type: String,
			required: [true, "Es necesario indicar la dirección."],
		},
		n_propie: Number,
		n_inquilinos: Number,
		cuota_actual: Number,
		ahorro: Number,
		fondos_iniciales: Number,
		anios: Number,
		president: {
			name: String,
			mobile_num: Number,
		},
		gastos: {
			Luz: Number,
			Agua: Number,
			Cerrajero: Number,
			Limpieza: Number,
			Administración: Number,
			Mantenimiento: Number,
		},
		admin: String, 
		image: String,
		owners: [
			{
				type: String, 
				required: [true, "Es necesario agregar propietarios de la comunidad."],
			},
		],
		incidences: [
			{
				type: ObjectId,
				ref: "Incidence",
			},
		],
	},
	{ timestamps: true }
);

const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;
