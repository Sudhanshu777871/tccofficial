import React from 'react';
import {Text, View, StatusBar, TextInput, Pressable, Image} from 'react-native';
import myStyle from '../CSS/Logincss';


export default function Login() {
  return (
    <View style={myStyle.mainView}>
      <StatusBar hidden={true} />
      <Text style={myStyle.brandTxt}>THECARCLEANWALE</Text>
      <View style={myStyle.inputView}>
        <TextInput placeholder="User Id" style={myStyle.inputStyle} />
        <TextInput placeholder="Password" style={myStyle.inputStyle} />

        <Pressable style={myStyle.pressBtn}>
          <Text style={myStyle.btnTxt}>Login</Text>
        </Pressable>
      </View>

      <View style={myStyle.accountStyle}>
        <Text style={myStyle.joinHead}>Join Team</Text>
        <Pressable style={myStyle.pressBtnAcc}>
          <Text style={myStyle.btnTxt}>Join</Text>
          <Image
            style={myStyle.imgJoin}
            source={require('../Image/login.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}
