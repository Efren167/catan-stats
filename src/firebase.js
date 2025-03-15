import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZYbZ5qjv7eY2XDPJ4mG5tIcK_X0X9e7U",
  authDomain: "catan-stats-4d589.firebaseapp.com",
  projectId: "catan-stats-4d589",
  storageBucket: "catan-stats-4d589.appspot.com",
  messagingSenderId: "915831894997",
  appId: "1:915831894997:web:bd8e5b77f09632b889435c",
  measurementId: "G-40GTD6BG62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, analytics };
