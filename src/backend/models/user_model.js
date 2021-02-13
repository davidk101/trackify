const mongoose = require('mongoose')

// a schema represents the structure of a particular document
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
})

// a model provides functionality
const user = mongoose.model('user', userSchema)

// export -> return
module.exports = user

