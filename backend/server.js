const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ContactRouter = require("./Routers/ContactRouter")
const ProjectRouter = require("./Routers/ProjectRouter")
const BlogRouter = require("./Routers/BlogRouter")
const port = 4444;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/portfolio").then(() => {
    console.log("Connected to MongoDB");
});


app.use(ContactRouter);
app.use(ProjectRouter);
app.use(BlogRouter);
app.use("/allImages", express.static("document"));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});