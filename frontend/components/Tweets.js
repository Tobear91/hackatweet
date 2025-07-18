import { useEffect, useState } from "react";
import Tweet from "./Tweet";

function Tweets(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/tweets";
    fetch(url)
      .then((response) => response.json())
      .then((datas) => {
        setTweets(datas.tweets);
      });
  }, []);

  useEffect(() => {
    if (props.newTweet) {
      setTweets([props.newTweet, ...tweets]);
    }
  }, [props.newTweet]);

  return (
    <>
      <h1>Tweets</h1>
      {tweets.map((tweet, i) => (
        <Tweet key={i} {...tweet} />
      ))}
    </>
  );
}

export default Tweets;
