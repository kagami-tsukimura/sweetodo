import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeButton: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div>
      <button
        title='Change Mode'
        onClick={() => toggle()}
        className='w-12 h-6 rounded-full ml-4 bg-gray-300 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none focus:border-transparent'
      >
        <div className='flex items-center justify-center'>
          {isDarkMode ? (
            <div title='Change Light Mode' className='ml-6'>
              <MdDarkMode />
            </div>
          ) : (
            <div title='Change Dark Mode' className='mr-6'>
              <MdLightMode />
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default DarkModeButton;
