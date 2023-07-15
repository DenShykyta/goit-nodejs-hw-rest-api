const createError = require("http-errors");

const contactsOperations = require("../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: { result: contacts },
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    if (!result) {
      throw createError(404, `Contact with id-${contactId} not found`);
    }
    res.json({ status: "success", code: 200, data: { result } });
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw createError(404, `Contact with id-${contactId} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    if (!result) {
      throw createError(404, `Contact with id-${contactId} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
};
