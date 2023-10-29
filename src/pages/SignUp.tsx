import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log('user created');
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
    console.log(email.value);
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>サインアップ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name='email'
            type='email'
            placeholder='email'
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name='password'
            type='password'
            placeholder='password'
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <hr />
        <div>
          <button>サインアップ</button>
        </div>
        <div>
          <Link to={'/signin'}>
            <button>サインイン</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
