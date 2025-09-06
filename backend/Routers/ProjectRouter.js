const express = require("express");
const ProjectContaroller = require("../controller/ProjectController");
const updloadImage = require("../middleware/UploadImage");

const router = express.Router();

router.post("/create/Project", updloadImage.single("img"), ProjectContaroller.CreateProject);
router.get("/read/Project", ProjectContaroller.readProject);
router.get("/readOne/Project/:id", ProjectContaroller.readOneProject);
router.put("/update/Project/:id", updloadImage.single("img"), ProjectContaroller.UpdateProject);
router.delete("/delete/Project/:id", ProjectContaroller.deleteProject);
router.get("/search/Project/:key", ProjectContaroller.SearchProject)

module.exports = router