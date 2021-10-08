import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.formContainer}>
      <Text>Register Form...</Text>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repetir password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Unirse"
        buttonStyle={styles.btnRegister}
        containerStyle={styles.btnContainerRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    //width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
