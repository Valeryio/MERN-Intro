
const PostsModels = require("../models/postModel").PostsModel;
const ObjectId = require("mongoose").Types.ObjectId;

const getPosts = (req, res) => {
	PostsModels.find()
	.then((docs) => {res.send(docs)})
	.catch((err) => {res.send(err)})
};

const addPost = (req, res) => {

	console.log("Nous avons : ", req.body);

  const newRecord = new PostsModels({
		author: req.body.author,
		description: req.body.description
	});

	newRecord.save()
	.then((docs) => { 
		console.log("Document enregistré :", docs);
		res.send(docs);
	})
	.catch((err) => { 
		console.log("Document non enregistré :", err);
		res.send(err);
	});

};

const updatePost = (req, res) => {

	console.log(req.params.id);
	if (!ObjectId.isValid(req.params.id)) {
		console.log("This is the object : ", req.params.id);
		res.status(400).send(`ID Unknown : ${req.params.id}`);
	} else {

		const updateRecord = {
			author: req.body.author,
			description: req.body.description
		}
	
		console.log(updateRecord);
	
		PostsModels.findByIdAndUpdate(
			req.params.id,
			{ $set: updateRecord },
			{ new: true }
		)
		.then((docs) => { res.send(docs) })
		.catch((err) => { res.send("Update error : ", err)})
	}
};

const deletePost = (req, res) => {

	if (!ObjectId.isValid(req.params.id)) {
		res.status(400).send(`Unknown ID : ${req.params.id}`);
	} else {

		PostsModels.findByIdAndDelete(
			req.params.id
		)
		.then((docs) => res.send(docs))
		.catch((err) => res.send(`Delete Error ${err}`))
	}
}

module.exports = {getPosts, addPost, updatePost, deletePost};