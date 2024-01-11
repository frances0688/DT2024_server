const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const IncidenceSchema = new mongoose.Schema(
    {
        category: String,
        description: String, 
        owner: [{
            type: String //FAKE IDs
        }],
        community: [{ 
            type: ObjectId, 
            ref: "Community"
        }],
        status: [{
            type: String,
            enum: [
                "Pending",
                "In Process",
                "Resolved"
            ]
        }],
        documents: [{
            type: String
        }],
        images: [{
            type: String
        }],
    },
    { timestamps: true }
);

const Incidence = mongoose.model("Incidence", IncidenceSchema);

module.exports = Incidence;