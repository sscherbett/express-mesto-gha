const routes = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const { ERROR_CODE_NOT_FOUND } = require('../utils/constants');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { loginValidation, authorizationValidation, createUserValidation } = require('../middlewares/validation');

routes.post('/signin', loginValidation, login);
routes.post('/signup', createUserValidation, createUser);

routes.use(authorizationValidation);
routes.use(auth);

routes.use('/users', usersRouter);
routes.use('/cards', cardsRouter);
routes.use('/*', (req, res) => {
  res.status(ERROR_CODE_NOT_FOUND).send({
    message: 'Страница не найдена',
  });
});

module.exports = routes;
