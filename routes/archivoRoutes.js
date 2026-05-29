const express = require('express');
const router = express.Router();

const archivoController = require('../controllers/archivoController');

router.get('/archivo', archivoController.archivo);

module.exports = router;