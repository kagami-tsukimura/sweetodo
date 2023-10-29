import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAm63FqpSQuMUahHpMsZVd_hymikMZSvhs',
  authDomain: 'sweetodo-feaad.firebaseapp.com',
  projectId: 'sweetodo-feaad',
  storageBucket: 'sweetodo-feaad.appspot.com',
  messagingSenderId: '876990851770',
  appId: '1:876990851770:web:03aa313291a203a343f083',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
