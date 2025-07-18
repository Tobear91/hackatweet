import styles from "../styles/Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTweet, removeTweet } from "../reducers/tweets";

function Home() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.value);
  const user = useSelector((store) => store.users.user);
  console.log(user);

  const [newTweet, setNewTweet] = useState("");

  const postTweet = () => {
    if (newTweet === "") return;

    const newTweetObj = {
      user: user._id,
      message: newTweet,
      like: 0,
      id: Date.now(),
    };

    fetch(`http://localhost:3000/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTweetObj),
    })
      .then((response) => response.json())
      .then((datas) => {
        dispatch(addTweet);
        setNewTweet("");
        console.log(datas.tweet);
        
      });
  };
  const handleLike = (id) => {
    fetch(`http://localhost:3000/tweets/${tweets._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTweetObj),
    })
      .then((response) => response.json())
      .then((datas) => {
        setNewTweet("");
        console.log(datas.tweet);
        
      })
  };

  const deleteTweet = (id) => {
    dispatch(removeTweet({ id }));
  };

  return (
    <div className={styles.TweetContainer}>
      {/* Zone de texte */}
      <div classeName={styles.textContainer}>
        <textarea
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          placeholder="What's up?"
        />
      </div>
      {/* Bouton Tweet */}
      <div className={styles.btnContainer}>
        {newTweet.length}/280
        <button className={styles.btnTweet} onClick={() => postTweet()}>
          Tweet
        </button>
      </div>
      {tweets && tweets.length > 0 && tweets.map((tweet, i) => (
          <div key={i} className={styles.tweet}>
            <div>
              <span>{user.name}</span> {user.pseudo} {tweet.time}
            </div>
            <div>{tweets}</div>
            <div>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleLike(tweet.id)}
              />
              {tweet.likes}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteTweet(tweet.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
