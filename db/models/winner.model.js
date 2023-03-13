const { Model, DataTypes } = require('sequelize');

const WINNER_TABLE = 'winner';

const WinnerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nameWinner: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}


class Winner extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WINNER_TABLE,
      modelName: 'Winner',
      timestamps: false
    }
  }
}

module.exports = { Winner, WinnerSchema, WINNER_TABLE };


