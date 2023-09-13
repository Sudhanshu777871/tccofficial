import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import myStyle from '../CSS/Homecss';
export default function Home({navigation}) {
  return (
    <View style={myStyle.mainView}>
      <StatusBar backgroundColor={'rgb(15,139,166)'} />
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image source={require('../Image/menu.png')} style={myStyle.menuImg} />
      </TouchableOpacity>

      <Text>Main Home Screen</Text>
    </View>
  );
}
