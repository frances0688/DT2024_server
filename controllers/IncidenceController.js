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
            res.status(500).send({ message: "Error al intentar acceder a las incidencias" })
        };
    },
    async delete(req, res) {
        try {        
        const incidence = await Incidence.findByIdAndDelete(req.params._id)        
        res.send({ message: 'Incidencia eliminada', incidence })        
        } catch (error) {       
        console.error(error)        
        res.status(500).send({ message: 'Ha habido un error al intentar eliminar la incidencia'})       
        }       
        },

        async update (req, res) {
            try {
                const incidence = await Incidence.findByIdAndUpdate(req.params._id)
                res.send({ message: 'Incidencia actualizada', incidence })        
            } catch (error) {       
            console.error(error)        
            res.status(500).send({ message: 'Ha habido un error al intentar actualizar la incidencia'})       
            }       
            },
        }


module.exports = IncidenceController;