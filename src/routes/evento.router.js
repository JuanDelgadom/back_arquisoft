const express = require('express');
const router = express.Router(); 
const eventoController = require('../controllers/evento.controller');

router
    .get('/', eventoController.get )
    .get('/:id', eventoController.getById )

module.exports = router;