
const express = require("express");
const cors = require("cors");
require("./models/dbConfig");

const port = 8080;
const app = express();

// Use body parser to read the json encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello world!, the Post API is on /posts 😅");
})

// Use the postRoutes to redirect on the post API
const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);


app.listen(port, () => {
  console.log("The app is listenning on port : ", port);
})