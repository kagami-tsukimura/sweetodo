import { useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';

const Logout = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsSignedIn(false);
        navigate('/signin');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {isSignedIn ? (
        <button onClick={handleLogout}>ログアウト</button>
      ) : (
        <p>ログアウト済み</p>
      )}
    </div>
  );
};

export default Logout;
