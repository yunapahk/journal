const mongoose = require('./connection')

const {Schema, model} = mongoose

const moveSchema = new Schema ({
    date: String,
    time: String,
    description: String,
    img: String
})

const Move = model('Entry', entrySchema)

module.exports = Entry