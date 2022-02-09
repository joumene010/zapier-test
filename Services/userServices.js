const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const checkService = require("../Services/CheckServices");
const nodemailer = require("nodemailer");

exports.getOneByEmail = async (email) => {
  return User.findOne({ email: email })
    .then((result) => {
      console.log(result, "result email");
      return { status: 200, body: result };
    })
    .catch((err) => {
      throw err;
    });
};

exports.emailExist = async (email) => {
  let user = await this.getOneByEmail(email);

  if (user.body) return true;

  return false;
};

exports.add = async (data) => {
  if (await this.emailExist(data.email)) {
    return {
      status: 422,
      body: {
        message: "email already used!!",
      },
    };
  }

  return new User({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: bcrypt.hashSync(data.password, 8),
  })
    .save()
    .then((resultat) => {
      return {
        status: 201,
        body: resultat,
      };
    })
    .catch((err) => {
      throw err;
    });
};

exports.getOne = (id) => {
  return User.findById(id)
    .then((result) => {
      return { status: 200, body: result };
    })
    .catch((err) => {
      throw err;
    });
};

exports.delete = (id) => {
  return User.findByIdAndDelete(id)

    .then((result) => {
      return { status: 200 };
    })
    .catch((err) => {
      throw err;
    });
};

exports.update = (data) => {
  return User.update(
    {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    },
    { returning: true, id: data.id }
  )
    .then((result) => {
      return {
        status: 200,
        body: result,
      };
    })
    .catch((err) => {
      throw err;
    });
};
