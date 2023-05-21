import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TareaScreen = () => {

  return (<>
    <View style={styles.container}>
        <View style={styles.caja1}/>
        <View style={styles.caja2}/>
        <View style={styles.caja3}/>
    </View>

  </>);
};
const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor:'#28425B',
       flexDirection:'row-reverse',
       alignItems: 'center',
       justifyContent:'center',

    },
  caja1: {
    //flex:1,
    backgroundColor:'#8080ff',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'white',
    //alignSelf:'flex-end',
  },
  caja2: {
    //flex:1,
    backgroundColor:'#ff8080',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'white',
   //alignSelf:'flex-end',
   // left:-50,
    top:50,
  },
  caja3: {
    //flex:1,
    backgroundColor:'#00c400',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'white',
   // alignSelf:'center',
   // top:-100,
  },
});
