const express = require('express');
const router = express.Router(); 
const pacienteController = require('../controllers/paciente.controller');

router
    .get('/', pacienteController.get )
    .get('/:id', pacienteController.getById )

module.exports = router;