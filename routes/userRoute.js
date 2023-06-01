const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/auth");

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/get-user-info", verifyToken, userController.userInfo);

module.exports = userRouter;
