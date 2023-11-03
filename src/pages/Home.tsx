import Header from '../components/Header';
import Logout from './Logout';

const Home = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Header />
      <button className='button bg-red-200'>ボタン</button>
      <Logout />
    </div>
  );
};

export default Home;
