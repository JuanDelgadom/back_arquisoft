const express = require('express');
const router = express.Router(); 
const medicoController = require('../controllers/medico.controller');

router
    .get('/', medicoController.get )
    .get('/:id', medicoController.getById )

module.exports = router;