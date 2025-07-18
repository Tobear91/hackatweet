import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../reducers/users";
import Image from "next/Image";

function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const imgSource = `https://ui-avatars.com/api/?background=FFFFFF&name=${user.name}`;

  return (
    <section className={styles.sidebar}>
      <FontAwesomeIcon icon={faCrow} />
      <div>
        <div>
          <Image src={imgSource} width={50} height={50} alt={user.name} />
          <p>
            {user.name} <span>@{user.pseudo}</span>
          </p>
        </div>
        <button className="button dark" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
