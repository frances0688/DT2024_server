const Incidence = require("../models/Incidence");

const IncidenceController = {
	async getAll(req, res) {
		try {
			const { page = 1, limit = 10 } = req.query;
			const incidences = await Incidence.find()
				.limit(limit)
				.skip((page - 1) * limit);
			res.status(201).send(incidences);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "Error al intentar acceder a las incidencias" });
		}
	},
	async delete(req, res) {
		try {
			const incidence = await Incidence.findByIdAndDelete(req.params._id);
			res.send({ message: "Incidencia eliminada", incidence });
		} catch (error) {
			console.error(error);
			res.status(500).send({
				message: "Ha habido un error al intentar eliminar la incidencia",
			});
		}
	},

	async update(req, res) {
		try {
			const incidence = await Incidence.findByIdAndUpdate(req.params._id);
			res.send({ message: "Incidencia actualizada", incidence });
		} catch (error) {
			console.error(error);
			res.status(500).send({
				message: "Ha habido un error al intentar actualizar la incidencia",
			});
		}
	},

	async create(req, res) {
		try {
			const incidence = await Incidence.create(req.body);
			res
				.status(201)
				.send({ message: "Incidencia creada con éxito", incidence });
		} catch (error) {
			res.status(500).send({ message: "No se ha podido crear la incidencia" });
		}
	},
	async getById(req, res) {
		try {
			const incidence = await Incidence.findById(req.params._id);
			res.status(200).send(incidence);
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: "Error al buscar incidencia por id" });
		}
	},
	async getByKeyword(req, res) {
		try {
			const { keyword } = req.query;
			if (!keyword) {
				return res
					.status(400)
					.send({ message: "Por favor, introduce una palabra válida" });
			}
			const searchRegex = new RegExp(keyword, "i");
			const incidences = await Incidence.find({
				keyword: searchRegex,
			}).sort({ createdAt: -1 });
			res.status(200).send(incidences);
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: "Error al buscar incidencias" });
		}
	},
};

module.exports = IncidenceController;
