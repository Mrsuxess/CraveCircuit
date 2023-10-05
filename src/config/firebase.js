// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6gOWVjaDdZE9TGWh78n1IYchue6fzM8",
  authDomain: "cravecircuit.firebaseapp.com",
  projectId: "cravecircuit",
  storageBucket: "cravecircuit.appspot.com",
  messagingSenderId: "46309435011",
  appId: "1:46309435011:web:53ef270f312e23f30a1db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();