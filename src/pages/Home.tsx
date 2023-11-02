import DarkModeButton from '../components/DarkModeButton';
import Logout from './Logout';

const Home = () => {
  return (
    <div>
      <button className='button bg-red-200'>ボタン</button>
      <DarkModeButton />
      <Logout />
    </div>
  );
};

export default Home;
