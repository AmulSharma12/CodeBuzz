const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/signup", AuthController.signUp);

router.post("/login", AuthController.login);

router.get("/logout", AuthController.logout);

module.exports = router;
