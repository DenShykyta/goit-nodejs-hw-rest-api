const express = require("express");

const { validation, authenticate } = require("../../middlewares");
const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validation(schemas.joiRegisterSchema), ctrl.register);

router.post("/login", validation(schemas.joiLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
