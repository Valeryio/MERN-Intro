
const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost:27017/node-api")
	.then (() => console.log("Mongodb connected successfully!"))
	.catch((err) => console.log("Connexion error"));