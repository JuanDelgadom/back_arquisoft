const express = require('express');
const router = express.Router(); 
const examenController = require('../controllers/examen.controller');

router
    .get('/', examenController.get )
    .get('/:id', examenController.getById )

module.exports = router;