import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsFZYs_iJ4R1r30V79aioefoyQvGji4Bk",
    authDomain: "ecommerce-cbdca.firebaseapp.com",
    projectId: "ecommerce-cbdca",
    storageBucket: "ecommerce-cbdca.appspot.com",
    messagingSenderId: "287759757554",
    appId: "1:287759757554:web:27ee8de40cdd66aae0206b"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
