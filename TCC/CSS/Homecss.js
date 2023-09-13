const { StyleSheet } = require("react-native");

const myStyle = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:"rgb(15,139,166)"
    },
    profileImg:{
        width:40,
        height:40,
        borderRadius:20,
        borderColor:'grey',
        borderWidth:2,
        objectFit:'cover',
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3
    },
    menuImg:{
        width:40,
        height:40,
        objectFit:'cover',
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,
        marginLeft:10,
        marginTop:10
    }
})


export default myStyle