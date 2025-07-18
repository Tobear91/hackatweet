import styles from "../styles/Feed.module.scss";
import Sidebar from "./Sidebar";
import Trend from "./Trend";

function Feed() {
  return (
    <div className={styles.feed}>
      <div>
        <Sidebar />
      </div>
      <div>FEED</div>
      <div>
        <Trend />
      </div>
    </div>
  );
}

export default Feed;
