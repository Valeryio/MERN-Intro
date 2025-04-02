
const express = require("express");
const router = express.Router();
const controllers = require("../controllers/postControllers");


router.get("/", controllers.getPosts);
router.post("/", controllers.addPost);
router.put("/:id", controllers.updatePost);
router.delete("/:id", controllers.deletePost);


module.exports = router;