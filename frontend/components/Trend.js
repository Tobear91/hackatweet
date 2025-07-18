import styles from "../styles/Trend.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { addTrend } from "../reducers/trends";

function Trend({ hashtag }) {
  const dispatch = useDispatch();
  const [tweets, setTweets] = useState([]);
  const trends = useSelector((store) => store.trends.trends);

  useEffect(() => {
    (async () => {
      const tweets = await getTweets();

      // Initialisation des trends si il y a une différence
      if (tweets.length > 0 && trends.length === 0) initTrends(tweets);

      setTweets(tweets);
    })();
  }, [hashtag]);

  const initTrends = async (tweetsArray) => {
    tweetsArray.forEach((tweet) => {
      const hashtags = tweet.message.match(/#\w+/g);
      hashtags && hashtags.forEach((hashtag) => dispatch(addTrend(hashtag)));
    });
  };

  const getTweets = async () => {
    const url = "http://localhost:3000/tweets";
    const response = await fetch(url);
    const datas = await response.json();
    if (hashtag) return datas.tweets.filter((tweet) => tweet.message.includes(`#${hashtag}`));
    return datas.tweets;
  };

  return (
    <>
      <section className={styles.trend}>
        <h3>Trends</h3>

        <div>
          {trends.map(({ name, count }, i) => (
            <div key={i}>
              <Link href={`/trends/${name.slice(1)}`}>{name}</Link>
              <span>
                {count} Tweet{count > 1 && "s"}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section>
        {tweets.map((tweet, i) => (
          <p key={i}>{tweet.message}</p>
        ))}
      </section>
    </>
  );
}

export default Trend;
