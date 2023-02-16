const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Image", {
        url:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
  )
}