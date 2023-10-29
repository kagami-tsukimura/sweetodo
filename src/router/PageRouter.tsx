import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserType } from '../App';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

type PageRouterProps = {
  user: UserType;
};

const PageRouter = ({ user }: PageRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
