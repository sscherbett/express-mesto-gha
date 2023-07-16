const routes = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const { ERROR_CODE_NOT_FOUND } = require('../utils/constants');

routes.use('/users', usersRouter);
routes.use('/cards', cardsRouter);
routes.use('/*', (req, res) => {
  res.status(ERROR_CODE_NOT_FOUND).send({
    message: 'Страница не найдена',
  });
});

module.exports = routes;
