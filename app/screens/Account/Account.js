import React, { useState, useEffect } from "react";
//import { View, Text } from "react-native";
import firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogger from "./UserLogger";
import { createIconSetFromFontello } from "react-native-vector-icons";
import Loading from "../../components/Loading";

export default function Acount() {
  //la funcion setLogin actualiza el estado de login

  //useEffect se usa cuando el componente ha sido cargado
  /*[] cuando un estado sea modificado o alguna variable que llega por props, vuelve a ejecutar useEffect

  */

  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogger /> : <UserGuest />;
}
