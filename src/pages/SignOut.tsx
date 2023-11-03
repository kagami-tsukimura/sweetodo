import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div>
      <Link
        to={'/signin'}
        className='text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
        onClick={handleSignOut}
      >
        Sign out
      </Link>
    </div>
  );
};

export default SignOut;
