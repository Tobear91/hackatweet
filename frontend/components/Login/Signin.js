import styles from "../../styles/login/Signin.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/users";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSetform = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/users/signin";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const response = await fetch(url, options);
    const datas = await response.json();

    if (datas.result) {
      dispatch(login(datas.user));
      setError(null);
      router.push("/");
    } else {
      setError(datas.error);
    }
  };

  return (
    <section className={`${styles.modal} ${styles.signin}`}>
      <FontAwesomeIcon icon={faCrow} />
      <h3>Login with your Hackatweet account</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" name="email" className="input" placeholder="Email" value={form.email} onChange={(e) => handleSetform(e)} />
        <input type="password" name="password" className="input" placeholder="password" value={form.password} onChange={(e) => handleSetform(e)} />
        <button type="submit" className="button white">
          Sign in
        </button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}

export default Signin;
