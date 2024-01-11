const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommunitySchema = new mongoose.Schema(
    {
        address: String,
        admin: String, //ID AUTH0
        owners: [{
            type: String //FAKE IDs
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