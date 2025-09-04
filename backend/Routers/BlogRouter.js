const express = require("express");
const BlogController = require("../controller/BlogController");
const updloadImage = require("../middleware/UploadImage");

const router = express.Router();

router.post("/create/blog", updloadImage.single("img"), BlogController.CreateProject);
router.get("/read/blog", BlogController.readProject);
router.get("/readOne/blog/:id", BlogController.readOneProject);
router.put("/update/blog/:id", updloadImage.single("img"), BlogController.UpdateProject);
router.delete("/delete/blog/:id", BlogController.deleteProject);

module.exports = router