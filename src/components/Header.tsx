import { auth } from '../firebase';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const displayName = auth.currentUser?.displayName;

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <DarkModeButton />
      {auth.currentUser?.photoURL && (
        <img
          src={auth.currentUser.photoURL}
          alt='ユーザー画像'
          style={{ display: auth.currentUser ? 'block' : 'none' }}
          className='rounded-full'
        />
      )}
      <p>{displayName}</p>
    </div>
  );
};

export default Header;
