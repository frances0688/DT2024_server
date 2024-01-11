const express = require('express');

const router = express.Router()

const IncidenceController = require('../controllers/IncidenceController');

router.post('/',IncidenceController.create);

module.exports = router;
