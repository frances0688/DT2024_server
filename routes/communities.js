const express = require('express');

const router = express.Router()

const CommunityController = require('../controllers/CommunityController');

router.post('/',CommunityController.create);

module.exports = router;