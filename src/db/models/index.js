
const { Evento, EventoSchema } = require('./eventoMedico.model');
const { Examen, ExamenSchema } = require('./examenMedico.model');
const { Usuario, UsuarioSchema } = require('./usuario.model');
const { Paciente, PacienteSchema } = require('./paciente.model');
const { Medico, MedicoSchema } = require('./medico.model');
const { Mri, MriSchema } = require('./mri.model');

function setupModels(sequelize) {

    // 1. Inicializar primero los modelos sin dependencias
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Paciente.init(PacienteSchema, Paciente.config(sequelize));
    
    // 2. Luego modelos que dependen de los anteriores
    Evento.init(EventoSchema, Evento.config(sequelize));
    Medico.init(MedicoSchema, Medico.config(sequelize));
    Examen.init(ExamenSchema, Examen.config(sequelize));
    Mri.init(MriSchema, Mri.config(sequelize));

    Paciente.hasMany(Evento, { 
        foreignKey: 'paciente_cedula',
        as: 'eventos' 
      });
      Evento.belongsTo(Paciente, { 
        foreignKey: 'paciente_cedula',
        as: 'paciente' 
      });
    
      // Corrige esta relación (en tu código hay inconsistencias con 'cedula' vs 'paciente_cedula')
      Evento.hasMany(Examen, { 
        foreignKey: 'cedula',
        as: 'examenes' 
      });
      Examen.belongsTo(Evento, { 
        foreignKey: 'cedula',
        as: 'evento' 
      });
    
      Usuario.hasMany(Examen, { 
        foreignKey: 'usuario_usuario',
        as: 'examenes' 
      });
      Examen.belongsTo(Usuario, { 
        foreignKey: 'usuario_usuario',
        as: 'usuario' 
      });
    
      Usuario.hasOne(Medico, { 
        foreignKey: 'usuario',  // mantiene el campo FK en la tabla Medico
        as: 'perfilMedico'      // cambia el alias de la asociación
      });
      
      Medico.belongsTo(Usuario, { 
        foreignKey: 'usuario',  // mantiene el campo FK
        as: 'infoUsuario'       // cambia el alias de la asociación
      });
    
      Examen.hasOne(Mri, { 
        foreignKey: 'cedula',
        as: 'mri' 
      });
      Mri.belongsTo(Examen, { 
        foreignKey: 'cedula',
        as: 'examen' 
      });

}

module.exports = setupModels;