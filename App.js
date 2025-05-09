import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import AddContact from './AddContact';
import Login from "./Login";
import EmergencyNumber from "./EmergencyNumber";
import LocationPage from "./LocationPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="EmergencyNumber" component={EmergencyNumber} />
        <Stack.Screen name="LocationPage" component={LocationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
