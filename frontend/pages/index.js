import Feed from "../components/Feed";
import Login from "../components/Login/Login";

import { useSelector } from "react-redux";

function index() {
  const user = useSelector((store) => store.users.user);
  return Object.hasOwn(user, "name") ? <Feed /> : <Login />;
}

export default index;
