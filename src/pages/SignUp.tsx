import { FC } from 'react';

const SignUp: FC = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('登録');
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name='email' type='email' placeholder='email' />
        </div>
        <div>
          <label>パスワード</label>
          <input name='password' type='password' />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
