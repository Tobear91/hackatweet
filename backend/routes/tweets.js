var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweets");

// Recuperer les tweets
router.get("/", (req, res) => {
  Tweet.find()
    // Trier par date décroissante
    .sort({ date: -1 })
    .then((tweets) => {
      res.json({ result: true, tweets });
    });
});

// Creer un tweet
router.post("/", (req, res) => {
  //Verifier la limite des 280 caractères
  const message = req.body.message;
  if (message.length > 280) {
    return res.json({
      result: false,
      error: "Tweet limité à 280 caractères !",
    });
  }

  const newTweet = new Tweet({
    user: req.body.user,
    date: new Date(),
    message: req.body.message,
    like: 0,
  });

  newTweet.save().then((data) => {
    res.json({ result: true, tweet: data });
  });
});

// Supression tweet
router.delete("/:id", (req, res) => {
    console.log(req.params);
    
  Tweet.deleteOne({ _id: req.params.id }).then((result) => {
    if (result.deletedCount === 0) {
      return res.json({ result: false, error: "Tweet non trouvé" });
    }
    res.json({ result: true, message: "Tweet supprimé avec succès" });
  });
});

//Compteur de like par Id du tweet
router.put("/like/:id", (req, res) => {
    Tweet.findById(req.params.id).then((tweet) => {
        // incrémenter de 1
        tweet.like = tweet.like + 1

        tweet.save().then(() => {
            res.json({result: true})
        })
    })
})

module.exports = router;
