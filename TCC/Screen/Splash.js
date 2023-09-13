import {React, useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';
import myStyle from '../CSS/Splashcss';
export default function Splash({navigation}) {
  useEffect(() => {
setTimeout(() => {
  navigation.navigate('Welcome')
}, 500);

  },[]);
  return (
    <View style={myStyle.mainVIew}>

     <Image source={require('../Image/logo.png')} style={myStyle.logo}/>
    </View>
  );
}
