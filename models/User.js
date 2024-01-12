const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
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
		role: {
			type: String,
			default: "user",
		},
		confirmed: Boolean,
		tokens: [],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
