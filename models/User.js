const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String, require: true,minlength:3
    },
    lastName: {
        type: String, require: true,minlength:3
    },
    email: {
        type: String, require: true
    },
    password: {
        type: String, required: true
    },
    // Folders:   [{ type: mongoose.Types.ObjectId, ref: 'Folder' }],

}, { timestamps: true })
const User = mongoose.model('User', userSchema)
module.exports = User


