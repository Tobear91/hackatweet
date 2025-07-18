import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../reducers/users";
import { useRouter } from "next/router";

function PierreContent() {
  const dispatch = useDispatch();  
  const user = useSelector((state) => state.users.user);

  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  const username = (user.name) ? user.name : "";  
  
  if (username) {
    const urlAvatar = `https://ui-avatars.com/api/?background=random&name=${username}`
    return(
      <div> 
        <img src={urlAvatar}/>
        <h1>Salut {username}, tu es maintenant connecté.</h1>
        <button onClick={handleLogout}>Se déconnecter</button>
      </div> 
)
  } else {
    router.push("/");
    return(
    <h1>Aucun utilisateur n'est connecté</h1>
  )
  }

 }

export default PierreContent;
