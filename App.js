import React, { useEffect } from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";
//import * as firebase from "firebase";
import firebase from "firebase/app";
//import firebase from "@firebase/app";
require("firebase/auth");
export default function App() {
  console.log(firebase.auth);
  //console.log(firebase.default.auth);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  });

  return <Navigation />;
}
