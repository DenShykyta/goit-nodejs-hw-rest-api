const express = require("express");

const { validation, authenticate, upload } = require("../../middlewares");
const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validation(schemas.joiRegisterSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validation(schemas.joiEmailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validation(schemas.joiLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
