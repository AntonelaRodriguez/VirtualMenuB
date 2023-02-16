const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Review", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
			defaultValue: 'User Review'
        },
        description: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
  )
}