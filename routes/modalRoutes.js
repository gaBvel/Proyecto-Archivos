const express = require('express');
const router = express.Router();

const modalController = require('../controllers/modalController');

router.get('/modal', modalController.modal);

module.exports = router;