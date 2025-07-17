const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    name: String,
    email:String,
    pseudo: String,
    password: String,
    token: String,
    photo: String
}, {timestamps: true});

const User = mongoose.model('users', userSchema);

module.exports = User;