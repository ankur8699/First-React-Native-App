import React, { useState } from "react";
import { Text, StyleSheet, View, Button ,Image } from "react-native";

import {
  Avatar,
} from 'react-native-paper';


export default Profile =() =>{
  return (
  <View style={{ flex: 1 , margin:20}}>

    <Avatar.Image 
    size={200}
    source={require('../assets/men.png')} />
    <Text style={{margin:10, textAlign:'center', justifyContent:'center',fontSize:40}}>Abcd Xyz </Text>
    <Text style={{margin:2, padding:10,fontSize:20, borderColor:"grey", borderRadius:2, borderWidth:2}}>
      Email:    abcd@gmail.com
    </Text>
    <Text style={{ margin:2,padding:10, fontSize:20, borderColor:"grey", borderRadius:2, borderWidth:2}}>
      DOB:      November 11, 2002 
    </Text>

    <Text style={{ margin:2,padding:10,fontSize:20, borderColor:"grey", borderRadius:2, borderWidth:2}}>
      Phone:   1234566 
     
    </Text>
  </View>);
};
