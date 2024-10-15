// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDTn2TwGRbWBAn-Day4aSeLDJhFzqOZs",
  authDomain: "fire-contacts-a4f16.firebaseapp.com",
  databaseURL: "https://fire-contacts-a4f16-default-rtdb.firebaseio.com",
  projectId: "fire-contacts-a4f16",
  storageBucket: "fire-contacts-a4f16.appspot.com",
  messagingSenderId: "379672638944",
  appId: "1:379672638944:web:478d0be11d4e965a9ba785",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
