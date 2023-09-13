import React from 'react';
import {View, Image, Text, Pressable, StatusBar} from 'react-native';
import myStyle from '../CSS/Welcomecss';
export default function welcome() {
  return (
    <View style={myStyle.mainView}>
      <StatusBar backgroundColor="rgb(15,139,166)" hidden={true} />
      <View style={myStyle.imgView}>
        <Image source={require('../Image/welcome.png')} style={myStyle.img} />
        <Text style={myStyle.brandTxt}>THECARCLEANWALE</Text>
      </View>
      {/* code for button */}
      <View style={myStyle.btnView}>
        <Pressable style={myStyle.pressBtn}>
          <Text style={myStyle.btnTxt}>Let's Go &#8594;</Text>
        </Pressable>
      </View>
    </View>
  );
}
