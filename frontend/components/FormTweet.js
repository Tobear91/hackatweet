import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

function FormTweet(props) {
  const user = useSelector((store) => store.users.user);

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
        props.addTweet(datas.tweet);
        setNewTweet("");
      });
  };

  return (
    <div className={styles.TweetContainer}>
      {/* Zone de texte */}
      <div classeName={styles.textContainer}>
        <textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's up?" />
      </div>
      {/* Bouton Tweet */}
      <div className={styles.btnContainer}>
        {newTweet.length}/280
        <button className={styles.btnTweet} onClick={() => postTweet()}>
          Tweet
        </button>
      </div>
    </div>
  );
}

export default FormTweet;
