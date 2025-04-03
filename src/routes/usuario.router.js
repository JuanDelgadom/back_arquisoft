const express = require('express');
const router = express.Router(); 
const usuarioController = require('../controllers/usuario.controller');

router
    .get('/', usuarioController.get )
    .get('/:id', usuarioController.getById )

module.exports = router;