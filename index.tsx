//index.tsx file

import React, {useState} from "react";
import {View,Text, TextInput, Image,Button} from "react-native";
import ExStyles from "./style";
import HomePage from "./HomePage";

const index=()=>{


  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const Submit=()=>{
    alert("Thank You")
  }

  const [submitted, setSubmitted] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  const handleSubmitClick = () => {
    setSubmitted(true);
    setShowHomePage(true);
  };

  if (showHomePage) {
    return <HomePage />;
  }

  return(
    <>
    {/* Parent Div */}

  <View>

    {/* Child Div 1st */}

  <View style={ExStyles.head}>
    <Text style={{fontSize:20,color:"white"}}>One India</Text>
    <Image source={require("../../assets/logo1.jpg")} style={ExStyles.imgSec}></Image>
    <Text style={{fontSize:20,color:"white"}}>Safe India</Text>
  </View>

    {/* Child Div 2nd */}

  <View>
  <Text style={ExStyles.header}>{isLogin ? 'LOGIN' : 'SIGNUP'}</Text>
  </View>

    {/* Child Div 3rd */}

  <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <TextInput placeholder="Username" style={ExStyles.textBox}></TextInput>
    <TextInput placeholder="Password" secureTextEntry={true} style={ExStyles.textBox}></TextInput>

    {!isLogin && (
    <>
      <TextInput style={ExStyles.textBox} placeholder="Confirm Password" secureTextEntry={true} />
      <TextInput style={ExStyles.textBox} placeholder="Email" keyboardType="email-address" />
    </>
    )}
    
    </View>
    

    {/* Child Div 4th */}

  <View style={ExStyles.container}>

  <View style={ExStyles.buttonContainer}>


      <Button title="SUBMIT" onPress={handleSubmitClick} ></Button>

      <Button title={isLogin ? "Signup" : "Login"} onPress={isLogin ? handleSignupClick : handleLoginClick} />
  
    </View> 
  </View>
  </View>  
  
  
   </>
 )
}

export default index;
