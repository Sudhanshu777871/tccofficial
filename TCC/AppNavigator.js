import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screen/Splash';
import Main from './Screen/Main';
import Login from './Screen/Login';
import Account from './Screen/Account';
import welcome from './Screen/Welcome';


export default function AppNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}} />
        <Stack.Screen name="Welcome" component={welcome} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
