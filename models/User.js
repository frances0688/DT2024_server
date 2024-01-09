const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
	// METER DATA DEL SCHEMA
	{
		username: {
			type: String,
			required: [true, "Please, enter a username"],
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please, enter an email"],
			match: [/.+\@.+\..+/, "Enter a valid email"],
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Please, enter a password"],
		},
		dob: {
			type: Date,
			required: [true, "Please, enter a date"],
		},
		avatar: {
			type: String,
		},
		// ADMIN or USER
		role: {
			type: String,
			default: "user",
		},
		confirmed: Boolean,
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
