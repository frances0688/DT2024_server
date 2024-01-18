const express = require("express");

const router = express.Router();

const IncidenceController = require("../controllers/IncidenceController");

router.post("/", IncidenceController.create);
router.get("/", IncidenceController.getAll);
router.delete("/:_id", IncidenceController.delete);
router.put("/:_id", IncidenceController.update);
router.get("/keyword", IncidenceController.getByKeyword);
router.get("/:_id", IncidenceController.getById);

module.exports = router;
