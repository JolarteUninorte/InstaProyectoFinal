const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    completeName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    checkTerms: {
        type: Boolean,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)