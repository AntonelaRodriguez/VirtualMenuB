const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Category", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
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
    },
    {
        timestamps: false
    }
  )
}