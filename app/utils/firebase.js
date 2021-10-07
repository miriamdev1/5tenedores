import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChNhLXXV25DBArOo2D5zzQqHkHdQVQ2dU",
  authDomain: "tenedores-55710.firebaseapp.com",
  projectId: "tenedores-55710",
  storageBucket: "tenedores-55710.appspot.com",
  messagingSenderId: "786039240133",
  appId: "1:786039240133:web:9d81eec5bfa060762ec7ac",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
