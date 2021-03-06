const Router = require('express').Router();
const middleware = require('../middlewares/auth');
const userController = require('../controllers/users');
const { upload } = require('../middlewares/upload');

Router.post('/', userController.postUsersControllers);
Router.get('/', middleware.verifyToken, userController.findUsersControllers);
Router.patch('/', middleware.verifyToken, upload, userController.patchUsersControllers);

module.exports = Router;
