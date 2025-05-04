const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");

router.get("/", musicController.getAll);
router.post("/", musicController.create);
router.delete("/:id", musicController.remove);

module.exports = router;