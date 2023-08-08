const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "wrkacc4@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
// const email = {
//   to: "conoso3186@weizixu.com",
//   from: "wrkacc4@gmail.com",
//   subject: "Test email",
//   html: "<p>Test email Hello test</p>",
// };
// sgMail
//   .send(email)
//   .then(() => console.log("Email success"))
//   .catch((error) => console.log(error.message));
