const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Category", {
        name: {
            type: DataTypes.ENUM(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "shadow", "unknown"]),
            defaultValue: "unknown",
          },
    },
    {
        timestamps: false
    }
  )
}