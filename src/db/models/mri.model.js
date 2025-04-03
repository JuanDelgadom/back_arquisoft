const { Model, DataTypes, Sequelize } = require('sequelize');
const { Examen } = require("./examenMedico.model");

const MRI_TABLE = 'mri';

class Mri extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MRI_TABLE,
            modelName: 'Mri',
            timestamps: false
        }
    }
} 

const MriSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    cedula: { 
        type: DataTypes.STRING, 
        primaryKey: true,
        field: 'cedula',
        references: { model: Examen, key: "cedula" }
    }
}

  
module.exports = { Mri, MriSchema };