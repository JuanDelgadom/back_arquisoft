const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuario';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamps: false
        }
    }
} 

const UsuarioSchema = {
    usuario: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    contrasena: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'contrasena'
    },
    cedula:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'cedula'
    },
    nombre:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    rol:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'rol'
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email'
    },
    telefono:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'telefono'
    },
    estado:{
        allowNull: true,
        type: DataTypes.CHAR(1),
        field: 'estado'
    }
}
  
module.exports = { Usuario, UsuarioSchema };