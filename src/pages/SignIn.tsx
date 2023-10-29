import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const googleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithRedirect(auth, provider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>サインイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name='email' type='email' placeholder='email' />
        </div>
        <div>
          <label>パスワード</label>
          <input name='password' type='password' placeholder='password' />
        </div>
        <hr />
        <div>
          <button>サインイン</button>
        </div>
        <hr />
        <div>
          <Link to={'/signup'}>
            <button>サインアップ</button>
          </Link>
        </div>
      </form>
      <div>
        <button onClick={googleSubmit}>サインイン for Google</button>
      </div>
    </div>
  );
};

export default SignIn;
