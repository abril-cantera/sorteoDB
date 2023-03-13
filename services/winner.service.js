const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class WinnerService {

  constructor() {
  }
  async create(data) {
    const newWinner = await models.Winner.create(data);
    return newWinner;
  }

  async find() {
    const winner = await models.Winner.findAll();
    return winner;
  }

  async findOne(id) {
    const winner = await models.Winner.findByPk(id);
    return winner;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const winner = await this.findOne(id);
    await winner.destroy();
    return { id };
  }

}

module.exports = WinnerService;
