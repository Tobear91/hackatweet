import styles from "../../styles/login/Signup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/users";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formSignup, setFormSignup] = useState({
    email: "",
    name: "",
    pseudo: "",
    password: "",
  });

  const handleSetFormSignup = (e) => {
    setFormSignup({ ...formSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/users/signup";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formSignup),
    };

    const response = await fetch(url, options);
    const datas = await response.json();

    if (datas.result) {
      dispatch(login(datas.user));
      setError(null);
      router.push("/home");
    } else {
      setError(datas.error);
    }
  };

  return (
    <section className={`${styles.modal} ${styles.signup}`}>
      <FontAwesomeIcon icon={faCrow} />
      <h3>Create your Hackatweet account</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" name="email" className="input" placeholder="Email" value={formSignup.email} onChange={(e) => handleSetFormSignup(e)} />
        <input type="text" name="name" className="input" placeholder="Nom" value={formSignup.name} onChange={(e) => handleSetFormSignup(e)} />
        <input type="text" name="pseudo" className="input" placeholder="Pseudo" value={formSignup.pseudo} onChange={(e) => handleSetFormSignup(e)} />
        <input type="password" name="password" className="input" placeholder="password" value={formSignup.password} onChange={(e) => handleSetFormSignup(e)} />
        <button type="submit" className="button white">
          Sign up
        </button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}

export default Signup;
