const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserController = {
    

    async register(req,res) {
        try {
            const password = bcrypt.hashSync(req.body.password, 10);
            const user = await User.create({
                ...req.body,
				password: password,
				confirmed: false,
            });
            res.status(201).send({message: "User created", user})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was an error' })
        }
    },


    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email,
            });
            const token = jwt.sign({ _id: user._id }, jwt_secret);
        } catch (error) {
            
        }
    },


    async logout(req, res) {
		try {
			await User.findByIdAndUpdate(req.user._id, {
				$pull: {
					tokens: req.headers.authorization,
				},
			});
			res.send({ message: "Logged out successfully." });
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: "Error while logging out user.", error });
		}
	}
}

module.exports = UserController;