const { Model, DataTypes, Sequelize } = require('sequelize');
const { Paciente } = require("./paciente.model");

const EVENTO_TABLE = 'evento_medico';

class Evento extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EVENTO_TABLE,
            modelName: 'Evento',
            timestamps: false
        }
    }
} 

const EventoSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    tipo: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'tipo'
    },
    fecha:{ 
        allowNull:false,
        type: DataTypes.DATE,
        field: 'fecha'
    },
    descripcion:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    paciente_cedula:{
        type: DataTypes.STRING,
        field: 'paciente_cedula',
        references: { model: Paciente, key: "cedula" }
    } 
}

module.exports = { Evento, EventoSchema };