'use strict';

const { WINNER_TABLE } = require('./../models/winner.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(WINNER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nameWinner: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(WINNER_TABLE);
  }
};
