import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyASJ9FzgFKuqZUvOEBGuoa-Do7WgtWoNTc",
  authDomain: "chess-comu.firebaseapp.com",
  databaseURL: "https://chess-comu-default-rtdb.firebaseio.com",
  projectId: "chess-comu",
  storageBucket: "chess-comu.firebasestorage.app",
  messagingSenderId: "472807391440",
  appId: "1:472807391440:web:ddb67dd355ccbd121dded5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;