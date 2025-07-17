import styles from "../styles/Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSignup, setFormSignup] = useState({
    email: "camille.hurtaud@gmail.com",
    name: "Camille",
    pseudo: "Tobear91",
    password: "coucou1234",
  });

  const handleSetFormSignup = (e) => {
    setFormSignup({ ...formSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formSignup);
  };

  const showModal = () => {
    setIsModalOpen(true);
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
          <button className={`button light`} onClick={showModal}>
            Sign up
          </button>
          <p>Already Have an account ?</p>
          <button className={`button dark`}>Sign in</button>
        </div>
      </section>

      <Modal classNames={`${styles.modal} ${styles.signup}`} centered closable={{ "aria-label": "Custom Close Button" }} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <FontAwesomeIcon icon={faCrow} />
        <h3>Create your Hackatweet account</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="Email" value={formSignup.email} onChange={(e) => handleSetFormSignup(e)} />
          <input type="text" placeholder="Nom" value={formSignup.name} onChange={(e) => handleSetFormSignup(e)} />
          <input type="text" placeholder="Pseudo" value={formSignup.pseudo} onChange={(e) => handleSetFormSignup(e)} />
          <input type="password" placeholder="password" value={formSignup.password} onChange={(e) => handleSetFormSignup(e)} />
          <button type="submit">Sign up</button>
        </form>
      </Modal>
    </>
  );
}

export default Login;
