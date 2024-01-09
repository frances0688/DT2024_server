const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommunitySchema = new mongoose.Schema(
    {
        address: String,
        admin: {
            type: ObjectId,
            ref: "User",
        },
        owners: [{
            type: ObjectId,
            ref: "User"
        }],
        documents: [{
            type: String
        }]
    },
    { timestamps: true }
);

const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;