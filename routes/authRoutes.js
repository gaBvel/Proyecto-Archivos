const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/login', authController.viewLogin);

router.post('/login', authController.register);

module.exports = router;