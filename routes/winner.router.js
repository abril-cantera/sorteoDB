const express = require('express');

const WinnerService = require('./../services/winner.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createWinnerSchema, updateWinnerSchema, getWinnerSchema } = require('./../schemas/winner.schema');

const router = express.Router();
const service = new WinnerService();

router.get('/',
  async (req, res, next) => {
    try {
      const winner = await service.find();
      res.json(winner);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getWinnerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const winner = await service.findOne(id);
      res.json(winner);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createWinnerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWinner = await service.create(body);
      res.status(201).json(newWinner);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getWinnerSchema, 'params'),
  validatorHandler(updateWinnerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const winner = await service.update(id, body);
      res.json(winner);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getWinnerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
