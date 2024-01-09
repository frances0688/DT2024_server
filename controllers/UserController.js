const User = require("../models/User");

const UserController = {
    async register(req,res) {
        try {
            const user = await User.create(req.body)
            res.status(201).send({message: "User created", user})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was an error' })
        }
    }
}

module.exports = UserController;