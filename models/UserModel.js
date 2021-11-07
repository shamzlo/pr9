var mongoose = require('mongoose');

var userChema = mongoose.Schema({
    name:String,
    age:Number,

})

module.exports = mongoose.model('Users', userChema);