const Community = require("../models/Community");
const Incidence = require("../models/Incidence");

const CommunityController = {
    async create(req, res) {
        try {
            const community = await Community.create({
                ...req.body,
                incidences: [],
                documents: []
            });
            res.status(201).send({ message: "Comunidad creada con éxito" })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "No se ha podido crear la comunidad" })
        };
    },
    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const communities = await Community.find()
                .limit(limit)
                .skip((page - 1) * limit)
                .populate({
                    path: "incidences",
                    select: "status category description"
                });
            res.status(201).send(communities);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Error al acceder a las comunidades" })
        };
    },
    async delete(req, res) {
        try {
            const community = await Community.findById(req.params._id);
            if (!community) {
                return res.status(404).send({ message: "No se encuentra dicha comunidad" });
            };
            await Incidence.deleteMany({ community: req.params._id });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "No se ha podido eliminar la comunidad" })
        };
    }
};

module.exports = CommunityController;