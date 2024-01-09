const User = require("../models/User");
const transporter = require("../config/nodemailer");
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
            // FALTA DOMAIN DE CONFIRMACION
            await transporter.sendMail({
				to: req.body.email,
				subject: "Confirmación de cuenta Administrador de fincas",
				html: `<h1>Vamos a gestionar tu comunidad</h1>`,
			});
            res.status(201).send({message: "Te hemos enviado confirmación al email", user})
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