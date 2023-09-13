import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerNav from './DrawerNav';
import Home_Nav from './Home_Nav';

export default function Main() {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator drawerContent={props=><DrawerNav {...props}/>}>
        <Drawer.Screen name="MainNav" component={Home_Nav} options={{headerShown:false}}/>
      </Drawer.Navigator>
  );
}
