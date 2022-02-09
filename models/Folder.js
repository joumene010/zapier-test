const mongoose = require('mongoose')
const Schema = mongoose.Schema
const folderSchema = new Schema({
    Name: {
        type: String, require: true
    },
    iduser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    idFolder: 
        { type: mongoose.Schema.Types.ObjectId, ref: 'Folder',default:undefined },
  
}, { timestamps: true })
const Folder = mongoose.model('Folder', folderSchema)
module.exports = Folder
