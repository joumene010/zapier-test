const File = require('../models/File')


exports.delete = (id) => {

    return File.findByIdAndDelete(id)


        .then(result => {

            return { status: 200 };

        })
        .catch(err => { throw err; })
}
exports.getOne = (id) => {
   
    return File.findById(id)
        .then(result => {
            console.log(result)
            return { status: 200, body: result }
        })
        .catch(err => { throw err; })
}

exports.getAll = (iduser)=>{
    return File.find({iduser: iduser , idFolder: null})
    .then(result=>{
        return { status : 200 , body : result }
    })
    .catch(err=>{ throw err ;})
}

exports.getByIdfolder = (idFolder)=>{
    return File.find({idFolder})
    .then(result=>{
        return { status : 200 , body : result }
    })
    .catch(err=>{ throw err ;})
}