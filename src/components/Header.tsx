import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import SignOut from '../pages/SignOut';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const displayName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='border-b-2 border-gray-150 dark:border-gray-800 bg-gray-50 dark:bg-gray-900'>
      <nav>
        <div className='w-full flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to={'/'} className='flex items-center'>
            <img
              src='https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3292052/ee0d3a4c-a04d-5905-ea87-11986aebb0b6.png'
              className='h-8 mr-3'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              SweeToDo
            </span>
          </Link>
          <div className='flex items-center justify-center mr-4  md:order-2'>
            <button
              type='button'
              className='text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              id='user-menu-button'
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
              data-dropdown-toggle='user-dropdown'
              data-dropdown-placement='bottom'
            >
              {auth.currentUser?.photoURL ? (
                <img
                  src={auth.currentUser.photoURL}
                  alt={displayName!}
                  style={{ display: auth.currentUser ? 'block' : 'none' }}
                  className='w-8 h-8 rounded-full hover:cursor-pointer'
                />
              ) : (
                <img
                  src='https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3292052/ee0d3a4c-a04d-5905-ea87-11986aebb0b6.png'
                  alt={displayName!}
                  style={{ display: auth.currentUser ? 'block' : 'none' }}
                  className='w-8 h-8 rounded-full hover:cursor-pointer'
                />
              )}
            </button>
            <DarkModeButton />

            <div
              ref={dropdownRef}
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } absolute top-12 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id='user-dropdown'
            >
              <div className='px-4 py-3'>
                <span className='text-center block text-sm text-gray-900 dark:text-white'>
                  {displayName ? displayName : 'Email-User'}
                </span>
                <span className='text-center block text-sm  text-gray-500 truncate dark:text-gray-400'>
                  {email}
                </span>
              </div>
              <ul className='py-2' aria-labelledby='user-menu-button'>
                <li>
                  <Link
                    to={'/'}
                    className='text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/'}
                    className='text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <SignOut />
                </li>
              </ul>
            </div>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-user'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  to={'/'}
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
