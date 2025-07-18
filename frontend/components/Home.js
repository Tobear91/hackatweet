import styles from "../styles/Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((store) => store.users.user);
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const postTweet = () => {
    if (newTweet === "") return;

    fetch(`http://localhost:3000/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "6879004b5fb76ab200d76d60",
        message: newTweet,
        like: 0,
      }),
    })
      .then((response) => response.json())
      .then((datas) => {
        setTweets([datas.tweet, ...tweets]);
        setNewTweet("");
      });
  };
  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) => {
        if (tweet.id === id) {
          return { ...tweet, likes: tweet.likes + 1 };
        } else {
          return tweet;
        }
      })
    );
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <div className={styles.TweetContainer}>
      {/* Zone de texte */}
      <div classeName={styles.textContainer} style={{ flex: 1 }}>
        <textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's up?" />
      </div>
      {/* Bouton Tweet */}
      <div className={styles.btnContainer}>
        {newTweet.length}/280
        <button className={styles.btnTweet} onClick={() => postTweet()}>
          Tweet
        </button>
      </div>
      {tweets &&
        tweets.length > 0 &&
        tweets.map((tweet, i) => (
          <div key={i} className={styles.tweet}>
            <div>
              <span>{user.name}</span> {user.pseudo} {tweet.time}
            </div>
            <div>{tweet.message}</div>
            <div>
              <FontAwesomeIcon icon={faHeart} onClick={() => likeTweet(tweet.id)} />
              {tweet.likes}
              <FontAwesomeIcon icon={faTrash} onClick={() => deleteTweet(tweet.id)} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
