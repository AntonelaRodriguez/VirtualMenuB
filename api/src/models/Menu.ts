const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Menu", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        image: {
            type: DataTypes.STRING,
            allownull: false
        },
    },
    {
        timestamps: false
    }
  )
}