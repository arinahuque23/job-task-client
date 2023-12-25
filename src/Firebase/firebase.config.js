// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLajuCEV5LOkxgl1FqbH5BF0XbD1ngPE",
  authDomain: "job-task-c6995.firebaseapp.com",
  projectId: "job-task-c6995",
  storageBucket: "job-task-c6995.appspot.com",
  messagingSenderId: "928376816607",
  appId: "1:928376816607:web:3a650a029522450b343a6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;