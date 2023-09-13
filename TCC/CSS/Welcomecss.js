const {StyleSheet} = require('react-native');

const myStyle = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgb(15,139,166)',
    flex: 1,
  },
  imgView: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 400,
    height: 300,
    marginTop: 100,
    objectFit: 'contain',
    margin: 0,
  },
  brandTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'aerial',
    margin: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressBtn: {
    backgroundColor: 'rgb(223,80,19)',
    width: 250,
    height: 50,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: 'grey',  
    shadowOpacity: 0.1,  
    shadowRadius: 3, 
  },
  btnTxt: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'BricolageGrotesque_18pt-SemiBold',
  }
});

export default myStyle;
