const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema ({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: Date,
    message: String,
    like: Number
})

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;