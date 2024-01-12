const express = require('express');

const router = express.Router()

const IncidenceController = require('../controllers/IncidenceController');

router.get('/',IncidenceController.getAll);
router.delete('/:_id',IncidenceController.delete);
router.put('/:_id',IncidenceController.update);

module.exports = router;
