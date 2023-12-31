import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { auth } from '../firebase';
import { FadeInBottom } from '../utils/FadeInBottom';

const SignUp = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log('user created');
        console.log(userCredential);
      })
      .catch((error) => {
        alert("I can't Sign up😢\nCould you check it for email or password?");
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <FadeInBottom>
        <section className='bg-gray-50 dark:bg-gray-900'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <Link
              to={'/'}
              className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
            >
              SweeToDo
              <img
                className='w-8 h-8 ml-2'
                src='https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3292052/ee0d3a4c-a04d-5905-ea87-11986aebb0b6.png'
                alt='logo'
              />
            </Link>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4 md:space-y-6'
                >
                  <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                    Create an account
                  </h1>
                  <div>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='example@penguin.com'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Create an account
                  </button>
                </form>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?{' '}
                  <Link
                    to={'/signin'}
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInBottom>
    </>
  );
};

export default SignUp;
