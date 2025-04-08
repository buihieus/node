const mongoose = require('mongoose')

//shape data
const kittySchema = new mongoose.Schema({
    name: String,

});

const Kitten = mongoose.model('hieu', kittySchema);

module.exports = Kitten;
