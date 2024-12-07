const express = require("express");
const router = express.Router();
const tagController = require("../controllers/TagController");

router.post("/create", tagController.createTag);
router.put("/update/:id", tagController.updateTag);
router.delete("/delete/:id", tagController.deleteTag);

module.exports = router;