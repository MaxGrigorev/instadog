let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dogsSchema = new Schema({
    breed: String,
    img: String
});

module.exports = mongoose.model('Dogs', dogsSchema);
