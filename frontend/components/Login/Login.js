import styles from "../../styles/login/Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);

  const showModal = (modal) => {
    setIsModalOpen(true);
    setIsSignupModal(modal === "signup");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <button className={`button light`} onClick={() => showModal("signup")}>
            Sign up
          </button>
          <p>Already Have an account ?</p>
          <button className={`button dark`} onClick={() => showModal("signin")}>
            Sign in
          </button>
        </div>
      </section>

      <Modal centered closable={{ "aria-label": "Custom Close Button" }} open={isModalOpen} onCancel={handleCancel} footer={null}>
        {isSignupModal ? <Signup /> : <Signin />}
      </Modal>
    </>
  );
}

export default Login;
