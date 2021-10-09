import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase/app";

export default function UserLogger() {
  return (
    <View>
      <Text>UserLogger...</Text>

      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}
