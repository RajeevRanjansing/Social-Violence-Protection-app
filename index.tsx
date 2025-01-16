import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, Alert,TouchableOpacity } from "react-native";
import ExStyles from "./style";
import HomePage from "./HomePage";
import axios from "axios";

const API_URL = 'https://0981-2409-40c1-1028-e619-d71-563f-c23-a976.ngrok-free.app/api/v1'; // Update with your local backend URL

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState(""); // For signup
  const [email, setEmail] = useState(""); // For both signup and signin
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showHomePage, setShowHomePage] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [authToken, setAuthToken] = useState(""); // To store auth token

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleSubmitClick = async () => {
    try {
      if (isLogin) {
        const response = await axios.post(`${API_URL}/signin`, { email, password });
        setAuthToken(response.data.token); // Assuming the token is returned
        Alert.alert("Success", response.data.message);
        setShowHomePage(true);
      } else {
        const response = await axios.post(`${API_URL}/signup`, { name, email, password });
        Alert.alert("Success", response.data.message);
        setShowOtpInput(true);
      }
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "Something went wrong");
    }
  };

  const handleOtpVerification = async () => {
    try {
      const response = await axios.post(`${API_URL}/otp-verification`, { email, otp });
      setAuthToken(response.data.token); // Assuming the token is returned
      Alert.alert("Success", response.data.message);
      setShowHomePage(true);
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "OTP verification failed");
    }
  };

  if (showHomePage) {
    return <HomePage authToken={authToken} />; // Pass the token to HomePage if needed
  }

  return (
    <>
      <View style={ExStyles.head}>
        <Text style={{ fontSize: 20, color: "white" }}>One India</Text>
        <Image source={require("./logo1.png")} style={ExStyles.imgSec} />
        <Text style={{ fontSize: 20, color: "white" }}>Safe India</Text>
      </View>

      <View>
        <Text style={ExStyles.header}>{isLogin ? "LOGIN" : "SIGNUP"}</Text>
      </View>

      <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              style={ExStyles.textBox}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={ExStyles.textBox}
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </>
        )}

        {showOtpInput && (
          <TextInput
            style={ExStyles.textBox}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
        )}
      </View>

      <View style={ExStyles.container}>

          <TouchableOpacity style={ExStyles.btn} onPress={showOtpInput ? handleOtpVerification : handleSubmitClick}>
          <Text style={ExStyles.button}>{showOtpInput ? "VERIFY OTP" : "SUBMIT"} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ExStyles.btn} onPress={isLogin ? handleSignupClick : handleLoginClick}>
          <Text style={ExStyles.button}>{isLogin ? "SIGNUP" : "LOGIN"}</Text>
          </TouchableOpacity>
        
      </View>
    </>
  );
};

export default Index;
