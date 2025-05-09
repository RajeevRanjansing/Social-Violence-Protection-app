import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import ExStyles from "./Style";

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const AlertNotification = () => {
    alert( "Successfully Login");
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleSubmitClick = () => {
    navigation.navigate("HomePage"); // Navigate to HomePage
  };

  return (
    <>
      <View style={ExStyles.head}>
        <Text style={{ fontSize: 20, color: "white" }}>One India</Text>
        <Image source={require("./icon.jpg")} style={ExStyles.imgSec} />
        <Text style={{ fontSize: 20, color: "white" }}>Safe India</Text>
      </View>

      <View>
        <Text style={ExStyles.header}>{isLogin ? "LOGIN" : "SIGNUP"}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {isLogin ? (
          <>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={ExStyles.textBox}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={ExStyles.textBox}
            />
          </>
        ) : (
          <>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={ExStyles.textBox}
            />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={ExStyles.textBox}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={ExStyles.textBox}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={ExStyles.textBox}
            />
          </>
        )}
      </View>

      <View style={ExStyles.container}>
        <TouchableOpacity
          style={ExStyles.btn}
          onPress={() => {
            AlertNotification(); // Show the alert
            handleSubmitClick(); // Navigate to HomePage
          }}
        >
          <Text style={ExStyles.button}>SUBMIT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ExStyles.btn}
          onPress={isLogin ? handleSignupClick : handleLoginClick}
        >
          <Text style={ExStyles.button}>{isLogin ? "SIGNUP" : "LOGIN"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
