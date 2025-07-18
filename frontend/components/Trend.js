import styles from "../styles/Trend.module.scss";
import { useDispatch, useSelector } from "react-redux";
// import { addTrend } from "../reducers/trends";

function Trend() {
  const dispatch = useDispatch();
  const trends = useSelector((store) => store.trends.trends);
  console.log(trends);

  // const hashtags = tweet.message.match(/#\w+/g);
  // hashtags && hashtags.forEach((hashtag) => dispatch(addTrend(hashtag)));

  return (
    <>
      <section className={styles.trend}>
        <h3>Trends</h3>

        <div>
          {trends.map(({ name, count }, i) => (
            <p key={i}>
              {name}
              <span>
                {count} Tweet{count > 1 && "s"}
              </span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Trend;
