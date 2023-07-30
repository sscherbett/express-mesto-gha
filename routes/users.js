const userRouter = require('express').Router();
const {
  getAllUsers,
  getUserById,
  updateUserInfo,
  updateUserAvatar,
  findUser,
} = require('../controllers/users');
const { getUserByIdValidation, updateUserValidation } = require('../middlewares/validation');

userRouter.get('/', getAllUsers);
userRouter.get('/me', findUser);
userRouter.get('/:userId', getUserByIdValidation, getUserById);
userRouter.patch('/me', updateUserValidation, updateUserInfo);
userRouter.patch('/me/avatar', updateUserValidation, updateUserAvatar);

module.exports = userRouter;
