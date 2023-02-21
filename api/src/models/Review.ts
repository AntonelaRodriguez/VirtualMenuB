const { DataTypes } = require('sequelize');

export = (sequelize:any) => {
    sequelize.define("Review", {
        id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            autoIncrement: true,
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
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
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