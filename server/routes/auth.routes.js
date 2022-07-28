const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");

const authRouter = Router();
authRouter.post("/signup", registerUser);

authRouter.post("/login", loginUser);

module.exports = authRouter;
