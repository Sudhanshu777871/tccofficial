import React from 'react';
import {Text, View, StatusBar, TextInput, Pressable} from 'react-native';
import myStyle from '../CSS/Accountcss';

export default function Account() {
  return (
    <View style={myStyle.mainView}>
      <StatusBar hidden={true} />
      <Text style={myStyle.brandTxt}>THECARCLEANWALE</Text>
      <View style={myStyle.inputView}>
        <TextInput placeholder="Name" style={myStyle.inputStyle} />
        <TextInput placeholder="Mobile" style={myStyle.inputStyle} />
        <TextInput placeholder="Address" style={myStyle.inputStyle} />
        <TextInput placeholder="Addhar" style={myStyle.inputStyle} />
        <TextInput placeholder="Qualification" style={myStyle.inputStyle} />

        <Pressable style={myStyle.pressBtn}>
          <Text style={myStyle.btnTxt}>Join</Text>
        </Pressable>
      </View>

      <View style={myStyle.accountStyle}>
        <Text style={myStyle.joinHead}>Already Account</Text>
        <Pressable style={myStyle.pressBtnAcc}>
          <Text style={myStyle.btnTxt}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
