import type { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import DarkModeButton from './components/DarkModeButton';
import { auth } from './firebase';
import PageRouter from './router/PageRouter';

export type UserType = User | null;

const App = () => {
  const [user, setUser] = useState<UserType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <>
        <div className='h-screen w-screen flex justify-center items-center'>
          <Triangle
            height='80'
            width='80'
            color='#5e4da9'
            ariaLabel='triangle-loading'
            visible={true}
          />
          <div className='absolute top-0 invisible'>
            <DarkModeButton />
          </div>
        </div>
      </>
    );
  }

  return <PageRouter user={user} />;
};

export default App;
