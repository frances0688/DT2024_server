const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommunitySchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: [
				true,
				"Es necesario indicar la dirección.",
			],
        },
        admin: String, //ID AUTH0
        owners: [{
            type: String, //FAKE IDs or FAKE MAILS
            required: [
				true,
				"Es necesario agregar propietarios de la comunidad.",
			],
        }],
        incidences: [{ 
            type: ObjectId, 
            ref: "Incidence"
        }],
        documents: [{
            type: String
        }]
    },
    { timestamps: true }
);

const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;