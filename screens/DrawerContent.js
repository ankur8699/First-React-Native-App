import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";

import {
    Avatar,
    Caption,
    Title,
    Text,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch

} from 'react-native-paper';
 import {
     DrawerContentScrollView,
     DrawerItem
 } from '@react-navigation/drawer';
 import { AuthContext} from '../components/context';    

 import Icon from 'react-native-vector-icons/Ionicons';
 import id from './id';


 
 export function DrawerContent(props){
   const { Signout } =React.useContext(AuthContext);
     return(
      <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                  <View style={{backgroundColor:'#1F73D1'}}>
                      <Avatar.Image 
                          style={{margin:10}}
                          source={require('../assets/men.png')}
                          size={70}
                      />
                      <View >
                        <Title style={styles.title}>Abcd Xyz</Title>
                        <Text style={styles.caption}>@Abcd_xyz</Text>
                      </View>
                  </View>
              </View>

              <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem 
                  icon={() => (
                    <Icon 
                    name="ios-home" 
                    color='grey'
                    size={20}
                    />
                )}
                      
                      label="Home"
                      onPress={() => {props.navigation.navigate('Home')}}
                  />
                  <DrawerItem 
                  icon={() => (
                    <Icon 
                    name="ios-contact" 
                    color='grey'
                    size={20}/>)}
                    label="Profile"  
                    onPress={() => {props.navigation.navigate('Profile')}}
                  />
                  
                  <DrawerItem
                  icon={() => (
                    <Icon 
                    name="ios-attach" 
                    color='grey'
                    size={20}
                    />
                )}
                  
                      
                      label="Details"
                      onPress={() => {props.navigation.navigate('Details')}}
                  />
                  <DrawerItem
                  icon={() => (
                    <Icon 
                    name="ios-attach" 
                    color='grey'
                    size={20}
                    />
                )}
                  
                      
                      label="cart"
                      onPress={() => {props.navigation.navigate('cart')}}
                  />
              </Drawer.Section>
              
          </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem 
          icon={() => (
            <Icon 
            name="ios-power" 
            color='grey'
            size={20}
            />
        )}
              label="Sign Out"
              onPress={() => {Signout()}}
          />
      </Drawer.Section>
  </View>
);
       

 }
 const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 0,
    },
    title: {
      fontSize: 25,
      color:'#fff',
      margin:10,
    },
    caption: {
      color:'#fff',
      fontSize: 20,
      marginLeft:10,
      marginBottom:10
    },
    row: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });



