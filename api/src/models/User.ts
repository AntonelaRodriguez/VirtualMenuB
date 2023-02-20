const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        timestamps: false
    }
  )
}