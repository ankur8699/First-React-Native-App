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
                  <View style={{flexDirection:'row',marginTop: 15}}>
                      <Avatar.Image 
                          source={require('../assets/men.png')}
                          size={70}
                      />
                      <View style={{marginLeft:25, flexDirection:'column'}}>
              <Title style={styles.title}>Abcd Xyz</Title>
              <TouchableOpacity
              style={styles.caption}
              >
             <Text>@Abcd_xyz</Text>
             </TouchableOpacity>
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
                    name="ios-build" 
                    color='grey'
                    size={20}
                    />
                )}
                    
                      label="Settings"
                      onPress={() => {props.navigation.navigate('Settings')}}
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
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginLeft:10,
    },
    row: {
      marginTop: 20,
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



