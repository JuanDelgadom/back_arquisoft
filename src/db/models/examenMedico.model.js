const { Model, DataTypes, Sequelize } = require('sequelize');
const { Evento } = require('./eventoMedico.model');
const { Paciente } = require('./paciente.model');
const { Usuario } = require('./usuario.model');

const EXAMEN_TABLE = 'examen_medico';

class Examen extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EXAMEN_TABLE,
            modelName: 'Examen',
            timestamps: false
            
        }
    }
} 

const ExamenSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    observaciones: {
        type: DataTypes.TEXT, 
        allowNull: false,
        field:'observaciones'
    },
    archivo: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'archivo'
    },
    usuario_usuario: {
        type: DataTypes.STRING, 
        allowNull: false,
        field:'usuario_usuario',
        references: { model: Usuario, key: "usuario" }
    }, 
    cedula: { 
        type: DataTypes.STRING(200), 
        allowNull: false,
        references: { model: Paciente, key: "paciente_cedula" },
        field:'cedula'
    },
    
}

module.exports = { Examen, ExamenSchema };