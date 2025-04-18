
const mongoose = require("mongoose");

const PostsModel = mongoose.model(
	"node-api",
	{
		author: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: Date.now()
		}
	},
	"posts"
);

module.exports = { PostsModel };