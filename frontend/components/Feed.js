import styles from "../styles/Feed.module.scss";
import Sidebar from "./Sidebar";
import Trend from "./Trend";
import FormTweet from "./FormTweet";
import Tweets from "./Tweets";
import { useState } from "react";

function Feed() {
  const [newTweet, setNewTweet] = useState(null);

  const addTweet = (tweet) => {
    setNewTweet(tweet);
  };

  return (
    <div className={styles.feed}>
      <div>
        <Sidebar />
      </div>
      <div>
        <FormTweet addTweet={addTweet} />
        <Tweets newTweet={newTweet} />
      </div>
      <div>
        <Trend />
      </div>
    </div>
  );
}

export default Feed;
