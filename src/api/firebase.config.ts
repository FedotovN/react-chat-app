
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGGJiJElLy2C-Np76ZBSLYgyRsEyxaOZ0",
  authDomain: "react-chat-app-2d827.firebaseapp.com",
  projectId: "react-chat-app-2d827",
  storageBucket: "react-chat-app-2d827.appspot.com",
  messagingSenderId: "971183576297",
  appId: "1:971183576297:web:ae20aecfd1ee224e2b4c78"
};


const firebaseAppInstance = initializeApp(firebaseConfig),
      firestore = getFirestore(firebaseAppInstance),
      auth = getAuth(firebaseAppInstance)

export { firestore, auth }
export default firebaseAppInstance