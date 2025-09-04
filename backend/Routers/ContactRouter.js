const express = require("express");
const contactController = require("../controller/ContactController");

const router = express.Router();

router.post("/create/contact", contactController.CreateContact);
router.get("/read/contact", contactController.readContact);
router.get("/readOne/contact/:id", contactController.readOneContact);
router.put("/update/contact/:id", contactController.UpdateContact);
router.put("/delete/contact/:id", contactController.deleteContact);

module.exports = router