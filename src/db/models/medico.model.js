const { Model, DataTypes, Sequelize } = require('sequelize');
const { Usuario } = require('./usuario.model');

const MEDICO_TABLE = 'medico';

class Medico extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MEDICO_TABLE,
            modelName: 'Medico',
            timestamps: false
        }
    }
} 

const MedicoSchema = {
    usuario: {
        type: DataTypes.STRING, 
        field: 'usuario',
        primaryKey: true,
        references: { model: Usuario, key: "usuario" }
    },
    especialidad: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'especialidad'
    }
}

  
module.exports = { Medico, MedicoSchema };