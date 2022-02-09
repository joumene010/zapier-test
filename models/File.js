const mongoose = require('mongoose')
const Schema = mongoose.Schema
const fileSchema = new Schema({
    Name: {
        type: String, require: true
    },
    typefile: {
        type: String, require: true
    },
    idFolder: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Folder'
    },
    iduser:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    file: {
        type: String
    }
  
}, { timestamps: true })
const File = mongoose.model('File', fileSchema)
module.exports = File
