const { Router } = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/auth.controller");
const { requireLogin } = require("../middleware/requireLogin.middleware");

const authRouter = Router();
authRouter.post("/signup", registerUser);

authRouter.post("/login", loginUser);

authRouter.post("./profile/:id", requireLogin, getProfile)

module.exports = authRouter;
