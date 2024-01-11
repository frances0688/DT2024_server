const Incidence = require("../models/Incidence");

const IncidenceController = {
    async create(req, res) {
        try {
            const incidence = await Incidence.create(req.body)
            res.status(201).send({ message: "Comunidad creada con éxito" })
        } catch (error) {
            res.status(500).send({ message: "No se ha podido crear la comunidad" })
        }
    }
};

module.exports = IncidenceController;