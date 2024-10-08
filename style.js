import {StyleSheet} from "react-native";

export default ExStyles=StyleSheet.create({

    imgSec:{
      height:80,
      width:80,
    },
  
    head:{
      height:"40%",
      width:"100%",
      backgroundColor:"#ff006e",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      
    },
  
    header:{
      fontSize:25,
      textAlign:"center",
      backgroundColor:"#52b788",
      height:50,
      marginTop:2,
      color:"white",
      textAlignVertical:"center"
    },
  
    textBox:{
      
    height:45,
    width:"80%",
    borderWidth:2,  
    marginTop:8,
    fontSize:20,
    borderColor:"black",
    paddingLeft:5,
    borderRadius:10,
    
    },
  
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
  
    buttonContainer: {
      marginTop:10,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      width: '75%', 
      
    },
  
    button: {
      width: '40%',
      backgroundColor: '#2196F3',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center', 
    },
  
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  })
