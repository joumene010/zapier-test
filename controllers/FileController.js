const File = require("../models/File");
const fileServices = require("../Services/fileServices");

exports.add = (req, res, next) => {
  let file = new File({
    Name: req.body.Name,
    idFolder: req.body.idFolder,
    typefile: req.body.typefile,
    iduser: req.body.iduser,
  });
  if (req.file) {
    file.file = req.file.path;
  }

  file
    .save()
    .then((response) => {
      res.json({
        message: "File added Successfully",
      });
    })

    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

exports.delete = (req, res) => {
  fileServices
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
exports.getOne = (req, res) => {
  fileServices
    .getOne(req.params.id)
    .then((result) => {
      res.status(result.status).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};

exports.getAll = (req, res) => {
  fileServices
    .getAll(req.params.iduser)
    .then((result) => {
      res.status(result.status).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};

exports.getByIdFolder = (req, res) => {
  fileServices
    .getByIdfolder(req.params.idFolder)
    .then((result) => {
      res.status(result.status).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};

exports.update = (req, res, next) => {
  let id = req.body.id;

  let updateData = {
    Name: req.body.Name,
    typefile: req.body.typefile,
    idFolder: req.body.idFolder,
  };
  File.findByIdAndUpdate(id, { $set: updateData })
    .then((response) => {
      res.json({
        message: "File updated Successfully",
      });
    })

    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};
