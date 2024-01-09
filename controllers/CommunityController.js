const Community = require("../models/Community");

const CommunityController = {
    async create(req, res) {
        try {
            const community = await Community.create(req.body)
            res.status(201).send({ message: "Comunidad creada con éxito" })
        } catch (error) {
            res.status(500).send({ message: "No se ha podido crear la comunidad" })
        }
    }
};

module.exports = CommunityController;