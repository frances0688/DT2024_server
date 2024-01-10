const User = require("../models/User");
const transporter = require("../config/nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// ------------- NO SE QUE ES EL 'process' DE DELANTE
// const jwt_secret = process.env.JWT_SECRET;
// const domain = process.env.DOMAIN;

const UserController = {
    async register(req,res) {
        try {
            const password = bcrypt.hashSync(req.body.password, 10);
            const user = await User.create({
                ...req.body,
				password: password,
				confirmed: false,
                role: 'user'
            });
            // const emailToken = jwt.sign(
			// 	{
			// 		email: req.body.email,
			// 	},
			// 	jwt_secret,
			// 	{ expiresIn: "48h" }
			// );
			// const url = `${domain}/users/confirm/${emailToken}`;
            await transporter.sendMail({
				from: `Confirmación de email: ${req.body.email}`,
                to: req.body.email,
				subject: "Confirmación de cuenta Administrador de fincas",
				html: `<h1>Vamos a gestionar tu comunidad</h1>
                <a href="{url}">Link para verificar tu mail</a>`,
			});
            res.status(201).send({message: "Te hemos enviado confirmación al email", user})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'No se ha podido registrar al usuario' })
        }
    },

    async login(req, res) {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) {
				return res.status(400).send({ message: "User does not exist." });
			};
			if (!user.confirmed) {
				return res
					.status(400)
					.send({ message: "Please confirm your email address." });
			};
			const isMatch = bcrypt.compareSync(req.body.password, user.password);
			if (!isMatch) {
				return res
					.status(400)
					.send({ message: "Email o contraseña invalidos" });
			};
			const token = jwt.sign(
				{
					_id: user._id,
				},
				jwt_secret
			);
			if (user.tokens.length > 4) user.tokens.shift();
			user.tokens.push(token);
			await user.save();
			res.send({
				message: "Welcome " + user.username,
				token,
			});
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "Error al iniciar sesión", error });
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