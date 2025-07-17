const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    name: String,
    pseudo: String,
    password: String,
    token: String,
    photo: String
})

const User = mongoose.model('users', userSchema);

module.exports = User;