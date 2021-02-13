const mongoose = require('mongoose')

// a schema represents the structure of a particular document
const Schema = mongoose.Schema

const eventSchema = new Schema({
    username: {type: String, required: true},
    description: {type:String, requried:true},
    duration: {type:Number, required:true},
    date: {type:Date, required: true}
}, {
    timestamps: true,
})

// a model provides functionality
const event = mongoose.model('event', eventSchema)

// export -> return
module.exports = event

