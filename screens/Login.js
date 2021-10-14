import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import CustomButton from "../components/CustomButton";

export default function Login({ navigation }) {
  useEffect(function () {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [username, setUsername] = useState("");

  function headerHandler(text) {
    setUsername(text);
    console.log("Header:" + username);
    console.log("Input:" + text);
  }

  function goToMain() {
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login_header}> Hola, {username}.</Text>
      <TextInput
        onChangeText={headerHandler}
        style={styles.input_login}
        placeholder="usuario"
      />
      <TextInput
        style={styles.input_login}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <CustomButton text={"Iniciar Sesión"} color={"blue"} action={goToMain} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input_login: {
    width: "90%",
    height: 55,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 22,
    paddingLeft: 10,
    marginBottom: 20,
  },
  login_header: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
  },
});
