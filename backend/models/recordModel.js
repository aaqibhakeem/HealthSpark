const mongoose = require('mongoose')

const Schema = mongoose.Schema
const recordSchema = new Schema({
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Record', recordSchema)