// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtKiXLuq4KGI41JK_sLDTnEsvi-NG7x7Q",
  authDomain: "react-native-login-7bb48.firebaseapp.com",
  projectId: "react-native-login-7bb48",
  storageBucket: "react-native-login-7bb48.appspot.com",
  messagingSenderId: "746001510261",
  appId: "1:746001510261:web:33bca1a629f21701542d3c"
};
// these keys won't work because i've removed the app from firebase
// add your app on firebase, copy firebaseConfig here, enable email/password auth
// and test the app ;)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);