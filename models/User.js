const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
	{
		auth0Id: {
			type: String,
			required: true,
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
		role: {
			type: String,
			default: "user",
		},
		tokens: [],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
