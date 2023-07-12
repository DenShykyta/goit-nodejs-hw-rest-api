const express = require("express");
const router = express.Router();

const { validation } = require("../../middlewares");
const contactSchema = require("../../schemas/contacts");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validation(contactSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validation(contactSchema), ctrl.updateById);

module.exports = router;
