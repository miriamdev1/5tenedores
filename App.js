import React from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";

export default function App() {
  // console.log(firebase.auth);
  //console.log(firebase.default.auth);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //   });
  // });

  return <Navigation />;
}
