const mongoose = require('mongoose')

const Schema = mongoose.Schema
const recordSchema = new Schema({
    age: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Record', recordSchema)