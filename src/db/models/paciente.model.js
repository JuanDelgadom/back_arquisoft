const { Model, DataTypes, Sequelize } = require('sequelize');

const PACIENTE_TABLE = 'paciente';

class Paciente extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PACIENTE_TABLE,
            modelName: 'Paciente',
            timestamps: false
        }
    }
} 

const PacienteSchema = {
    cedula: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    fecha_nacimiento:{ 
        allowNull:false,
        type: DataTypes.DATE,
        field: 'fecha_nacimiento'
    },
    sexo:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'sexo'
    },
    tipo_sangre:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo_sangre'
    },
    alergias:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'alergias'
    },
    antecedentes_medicos:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'antecedentes_medicos'
    },
    contacto_emergencia:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'contacto_emergencia'
    },
    direccion:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'direccion'
    },
    telefono:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'telefono'
    }
}
  
module.exports = { Paciente, PacienteSchema };