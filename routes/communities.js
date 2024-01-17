const express = require("express");

const router = express.Router();

const CommunityController = require("../controllers/CommunityController");

router.post("/", CommunityController.create);
router.get("/", CommunityController.getAll);
router.get("/address", CommunityController.getByAddress);
router.get("/:_id", CommunityController.getById);

module.exports = router;
