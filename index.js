const express = require("express");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const { dbConnection } = require("./config/config");

const jwtCheck = auth({
	secret: process.env.AUTH0_SECRET,
	audience: process.env.AUDIENCE,
	issuerBaseURL: process.env.AUTH0_BASEURL,
	tokenSigningAlg: "HS256",
});

app.use(express.json());
app.use(jwtCheck);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
