const userServices = require("../Services/userServices");

exports.emailExist = async (email) => {
  let user = await userServices.getOneByEmail(email);

  if (user.body) return true;

  return false;
};
