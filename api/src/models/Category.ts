const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    },
    {
        timestamps: false
    }
  )
}