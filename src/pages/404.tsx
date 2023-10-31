import { IoHomeSharp } from 'react-icons/io5';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <img
          src='https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3292052/7ca20ab5-8c43-6636-bf9b-a744768c538e.png'
          loading='lazy'
          alt='404 Not Found'
        />
        <div className='mx-auto  w-full items-center justify-center rounded-lg sm:w-96'>
          <a
            href='./'
            className='flex items-center justify-center button text-white bg-violet-800 hover:bg-violet-700'
          >
            Go Home
            <IoHomeSharp className='ml-1' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
