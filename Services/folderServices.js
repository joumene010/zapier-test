const Folder = require('../models/Folder')
let folders={}


exports.delete = (id) => {

    return Folder.findByIdAndDelete(id)


        .then(result => {

            return { status: 200 };

        })
        .catch(err => { throw err; })
}
exports.getOne = (id) => {

    return Folder.findById(id)
        .then(result => {
            console.log(result)
            return { status: 200, body: result }
        })
        .catch(err => { throw err; })
}

exports.getAll = () => {
    return Folder.find({})
        .then(result => {
            return { status: 200, body: result }
        })
        .catch(err => { throw err; })
}

exports.getByIduser = (iduser) => {
    return Folder.find({ iduser: iduser , idFolder: null })
        .then(result => {
            return { status: 200, body: result }
        })
        .catch(err => { throw err; })
}

exports.getFolderParanet = () => {
   
    return Folder.find({ idFolder: null })
    .then(result => {
        return { status: 200, body: result }
    })
    .catch(err => { throw err; })
        
}




exports.getFolderByIdFolder = (idFolder) => {
    return Folder.find({idFolder}).then(result => {
        console.log(result)
        return { status: 200, body: result }
    })
        .catch(err => { throw err; })
}
