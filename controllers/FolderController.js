const Folder = require("../models/Folder");
const File = require("../models/File");

const folderServices = require("../Services/folderServices");

const FileController = require("../controllers/FileController");
const fileServices = require("../Services/fileServices");


let updateData = {};
const list = [];


exports.add = (req, res, next) => {
  let folder = new Folder({
    Name: req.body.Name,
  });

  folder
    .save()
    .then((response) => {
      res.send(response);
    })

    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

exports.delete = (req, res) => {
  folderServices
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
  folderServices
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


exports.getAll = (req,res) => {

      folderServices
      .getAll()
      .then((result) => {
          res.status(result.status).json(result.body);
      })
      .catch((err) => {
        res.status(500).json({
          erreur: `${err}`,
        });
      });
    }
  

  





exports.getByIdUser = (req, res) => {
  folderServices
    .getByIduser(req.params.iduser)
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
    iduser: req.body.iduser,
  };
  Folder.findByIdAndUpdate(id, { $set: updateData })
    .then((response) => {
      res.json({
        message: "Folder updated Successfully",
      });
    })

    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};
exports.getFolderParanet = (req, res, next) => {
  folderServices
    .getFolderParanet()
    .then((result) => {
      res.status(result.status).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};
exports.getFolderByIdFolder = (req, res) => {
  folderServices
    .getFolderByIdFolder(req.params.idFolder)
    .then((result) => {
      res.status(result.status).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({
        erreur: `${err}`,
      });
    });
};
exports.addfolderfile = (req, res, next) => {
  let idfile;
  let folders;
  //add file
  // let Nfile = new File({
  //     Name: req.body.Name,
  //     idFolder: req.body.idFolder,
  //     typefile: req.body.typefile
  // })
  //  Nfile.save()
  //      .then(response => {
  //          res.json({
  //              message: 'File added Successfully'
  //          })
  //      })

  //      .catch(error => {
  //          res.json({
  //              message: error
  //          })
  //      })

  // let file = File.find({ idFolder: req.body.idFolder })
  //     .then(result => {
  //         console.log(result)
  //         return result
  //     })

  // file.then((valuefile) => {
  //     list.push(valuefile)
  //     // console.log(valuefile)*

  // });

  // console.log("list 1 ===>  " + list)
  //     for(var i= 0; i < list.length; i++)
  // {
  //      console.log(" ==== >  "+list[i]._id);
  // }

  // let folder = Folder.findById(req.body.idFolder)
  //     .then(result => {
  //         folders = result

  //         return result
  //     })

  // folder.then((value) => {
  //     updateData = {
  //         Name: folders.Name,
  //         iduser: folders.iduser,
  //         files: list,

  //     }
  // console.log("update data ===>  "+Object.values(updateData));

  // Folder.findByIdAndUpdate(req.body.idFolder, {$push: {updateData} })
  //     .then(response => {
  //         console.log("Folder updated Successfully")
  //     })

  // });
};
