//import { useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';
//import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((user) => {
        console.log('ログイン成功=', user.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
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
    </div>
  );
};

export default SignIn;
