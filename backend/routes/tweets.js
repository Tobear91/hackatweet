var express = require('express');
var router = express.Router();

const Tweet = require ('../models/tweets')

// Recuperer les tweets
router.get('/', (req, res) => {
    Tweet.find()
    // Trier par date décroissante 
    .sort({ date: -1 }) 
    .then(tweets => {
        res.json({ result: true, tweets: tweets });
    })
})

// Creer un tweet
router.post ('/', (req, res) => {
    //Verifier la limite des 280 caractères
    if (message.length > 280) {
        return res.json({result: false, error: 'Tweet limité à 280 caractères !'})
    }
    
    const message = message.req.body;
    const newTweet = new Tweet ({
        user: userId,
        date: new Date(),
        message: message,
        like: 0
    })

    newTweet.save().then(data => {
        res.json({ result: true, tweet: data})
    })
})