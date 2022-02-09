const userServices = require("../Services/userServices");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../models/User");
let secretCode = "yx9TUnTIA^luh&M6z82epT8*NaPg^xBWD!KpDtR&jp2CNeexK&";



exports.add = (req, res) => {
  console.log(req,'req')
  userServices
    .add(req.body)
    .then((resulat) => {
      res.status(resulat.status).json(resulat.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};

exports.login = (req, res) => {
  users
    .findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          message: "Utilisateur non trouvé.",
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(200).send({
          auth: false,
          accessToken: null,
          message: "Mot de passe incorrect!",
        });
      }

      var token = jwt.sign({ iduser: user.id }, secretCode, {
        expiresIn: 86400,
      });

      res.status(200).send({ auth: true, accessToken: token });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.getOne = (req, res) => {
  userServices
    .getOne(req.params.id)
    .then((result) => {
      res.status(result.status).send(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};

exports.delete = (req, res) => {
  userServices
    .delete(req.params.id)
    .then((result) => {
      res.status(result.status).end();
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};
