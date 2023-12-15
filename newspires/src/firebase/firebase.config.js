
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7gO-beefLhv0IUQaln_K05y8P1Dg6ls",
  authDomain: "newspires-7f021.firebaseapp.com",
  projectId: "newspires-7f021",
  storageBucket: "newspires-7f021.appspot.com",
  messagingSenderId: "573539582709",
  appId: "1:573539582709:web:6d0c7a319174d86a6ffbbc",
  measurementId: "G-B4SGPGDYXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;