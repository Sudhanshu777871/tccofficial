import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Salary from './Salary';
import Camera from './Camera';
import Work_History from './Work_History';

export default function Home_Nav() {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Bottom.Screen name='Salary' component={Salary} options={{headerShown:false}}/>
      <Bottom.Screen name='Camera' component={Camera} options={{headerShown:false}}/>
      <Bottom.Screen name='Work' component={Work_History} options={{headerShown:false}}/>
    </Bottom.Navigator>
  );
}
