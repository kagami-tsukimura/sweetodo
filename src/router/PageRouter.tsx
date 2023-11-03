import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserType } from '../App';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';
import SignUp from '../pages/SignUp';

type PageRouterProps = {
  user: UserType;
};

const PageRouter = ({ user }: PageRouterProps) => {
  return (
    <div className="className='bg-gray-50 dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home /> : <SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRouter;
