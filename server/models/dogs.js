let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dogsSchema = new Schema({
    breed: String,
    img: String,
    like: Number
});

module.exports = mongoose.model('Dogs', dogsSchema);
