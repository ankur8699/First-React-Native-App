import React, { useState } from "react";
import { ScrollView,Text, StyleSheet, View, Button ,ImageBackground ,Image} from "react-native";

import {
  Avatar,
} from 'react-native-paper';


export default Profile =() =>{
  return (
  <View style={{ flex:1, margin:20}}>
    <ImageBackground 
    style={styles.header}
    source={require('../assets/men.png')}
     />
     <View style={styles.footer}>
    <Text style={{textAlign:'center', justifyContent:'center',fontSize:30}}>Abcd Xyz </Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,marginTop:10,}}>Orders</Text>
        <Text style={{fontSize:15}}>15</Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,marginTop:5,}}>Offers</Text>
        <Text style={{fontSize:15}}>0</Text>
        </View>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,marginTop:5,}}>Messages</Text>
        <Text style={{fontSize:15}}>20</Text>
      </View>
    </View>
    <Text></Text>
    
    
  

    
    </View>
  </View>);
}

const styles=StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
},
});