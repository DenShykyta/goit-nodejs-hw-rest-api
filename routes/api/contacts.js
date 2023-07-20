const express = require("express");
const router = express.Router();

const { validation } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../model/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validation(joiSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validation(joiSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrl.updateFavorite
);

module.exports = router;
