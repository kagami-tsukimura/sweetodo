import type { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
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
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <PageRouter user={user} />;
};

export default App;
