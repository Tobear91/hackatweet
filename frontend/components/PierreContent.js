import { useSelector } from 'react-redux';

function PierreContent() {
  const user = useSelector((state) => state.users.user);

  return (
    <div>
      <h1>Salut, {user.username || 'inconnu'} !</h1>
    </div>
  );
}

export default PierreContent;
