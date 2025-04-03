const express = require('express'); 

const eventoRouter = require('./evento.router');
const examenRouter = require('./examen.router');
const medicoRouter = require('./medico.router');
const mriRouter = require('./mri.router');
const pacienteRouter = require('./paciente.router');
const usuario = require('./usuario.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/services/', router); 
  router.use('/eventos', eventoRouter);
  router.use('/examenes', examenRouter);
  router.use('/medicos', medicoRouter);
  router.use('/mris', mriRouter);
  router.use('/pacientes', pacienteRouter);
  router.use('/usuarios', usuario);
}

module.exports = routerApi;