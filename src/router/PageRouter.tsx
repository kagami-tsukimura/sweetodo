import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserType } from '../App';
import Header from '../components/Header';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

type PageRouterProps = {
  user: UserType;
};

const PageRouter = ({ user }: PageRouterProps) => {
  return (
    <div className="className='bg-gray-50 dark:bg-gray-900">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home /> : <SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRouter;
