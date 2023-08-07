const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const Joi = require("joi");

const emailReg =
  /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/;
const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailReg,
      unique: true,
      required: [true, "Email is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
    avatarURL: { type: String },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const joiRegisterSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
  subscription: Joi.string(),
});

const joiEmailSchema = Joi.object({
  email: Joi.string().pattern(emailReg).required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailReg).required(),
});

const schemas = {
  joiRegisterSchema,
  joiLoginSchema,
  joiEmailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
