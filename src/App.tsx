import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

type FormData = {
  name: string | null | undefined;
  email: string | null | undefined;
};

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  return (
    <BrowserRouter>
      {/* <SignUp /> */}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/signup' Component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
