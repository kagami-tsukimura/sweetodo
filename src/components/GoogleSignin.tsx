import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';

const GoogleSignin = () => {
  const navigate = useNavigate();
  const googleSubmit = () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      alert("I can't Sign in😢\nCould you check it for Google account?");
      console.log(error);
    }
  };

  return (
    <div className='flex justify-center'>
      <button
        type='submit'
        className='flex items-center w-1/2 justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        onClick={googleSubmit}
      >
        <div className='mr-2 text-xl bg-white'>
          <FcGoogle />
        </div>
        Sign in for Google
      </button>
    </div>
  );
};

export default GoogleSignin;
