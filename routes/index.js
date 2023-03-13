const express = require('express');

const winnerRouter = require('./winner.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/winner', winnerRouter);
}

module.exports = routerApi;
