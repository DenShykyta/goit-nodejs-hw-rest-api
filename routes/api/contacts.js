const express = require("express");
const router = express.Router();

const { validation, authenticate } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, ctrl.getById);

router.post("/", authenticate, validation(joiSchema), ctrl.add);

router.delete("/:contactId", authenticate, ctrl.deleteById);

router.put("/:contactId", authenticate, validation(joiSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(favoriteJoiSchema),
  ctrl.updateFavorite
);

module.exports = router;
