const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
	// METER DATA DEL SCHEMA
	{
		auth0Id: {
			type: String,
			required: true,
			unique: true,
		},
		tokens: [],
		followers: [{ type: ObjectId, ref: "User" }],
		following: [{ type: ObjectId, ref: "User" }],
		postIds: [{ type: ObjectId, ref: "Post" }],
		likesList: [{ type: ObjectId, ref: "Post" }],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
