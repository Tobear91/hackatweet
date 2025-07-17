import styles from "../styles/Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <section className={styles.login_page}>
        <div>
          <FontAwesomeIcon icon={faCrow} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCrow} />
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today</h2>
          <button className={`button light`}>Sign up</button>
          <p>Already Have an account ?</p>
          <button className={`button dark`}>Sign in</button>
        </div>
      </section>
    </>
  );
}

export default Login;
