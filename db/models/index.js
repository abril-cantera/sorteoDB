const { Winner, WinnerSchema } = require('./winner.model');

function setupModels(sequelize) {
  Winner.init(WinnerSchema, Winner.config(sequelize));

  Winner.associate(sequelize.models);
}

module.exports = setupModels;
