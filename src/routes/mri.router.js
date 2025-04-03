const express = require('express');
const router = express.Router(); 
const mriController = require('../controllers/mri.controller');

router
    .get('/', mriController.get );
    //.get('/:id/:cedula', mriController.getById);

module.exports = router;