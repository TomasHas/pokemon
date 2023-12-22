const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { Type } = require("./Type");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pokemonType: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        // references: {
        //   model: Type,
        //   key: "id",
        // },
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
////////////////////////
//API pokeapi
// Nombre *
// Vida
// Ataque
// Defensa
// Velocidad
// Altura
// Peso
// [ ] Tipo con las siguientes propiedades:
// ID
// Nombre
// La relación entre ambas entidad
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
/////////////////////////////////////
