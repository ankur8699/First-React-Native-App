import React, { Component, useEffect } from "react";
import { Text, StyleSheet, View, Button ,Image, TextInput } from "react-native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {AuthContext} from  './components/context';
import Details from './screens/Details';
import cart from './screens/cart';
import Tabscreen from './screens/Tabscreen';
import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootScreen';
import { ActivityIndicator } from "react-native-paper";

import AsyncStorage from '@react-native-community/async-storage';

const stack=createStackNavigator();



const Drawer=createDrawerNavigator();


const App =()=> {
  //const [isLoading , setIsLoading] =React.useState(true);
  //const [userToken , setUserToken] =React.useState(null);

  const initialLoginState = {
    isLoading: true,
    username: null,
    password:null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          username: action.id,
          password:action.password,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      
    }
  };

  const [LoginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext=React.useMemo(()=>({
    Signin:async( username, password)=>{
      let userToken;
      userToken=null;
      if( username=='Admin' && password=='1234'){
        try{
        userToken='dfdfdf';
        await AsyncStorage.setItem('userToken', userToken );
        }catch (e) {
          console.log(e)
        }
      }
      dispatch({ type: 'LOGIN', id:username, password:password ,token: userToken });
    },
    Signout:async()=>{
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    }) , []);

  useEffect(() =>{
    setTimeout(async() =>{
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN' , token: userToken });
    },1000);
  }, [] );

  if( LoginState.isLoading ){
    return(
      <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
    return(
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { LoginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
          <Drawer.Screen name="homepage"  component={Tabscreen} />
          <Drawer.Screen name="Details"  component={Details} />
          <Drawer.Screen name="cart"  component={cart} />
        </Drawer.Navigator>
        )
        :
        <RootStackScreen/>
      }
      </NavigationContainer>
      </AuthContext.Provider>
    );
  }


export default App;
const styles=StyleSheet.create(
  {
      container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'grey',
      },
      welcome:{
          fontSize:30,
          fontFamily:'DancingScript-Bold',
          margin:10,
          textAlign:'center',
          color:'#fff'

      },
      input:{
          width:"90%",
          backgroundColor:'#fff',
          padding:20,
          margin:10

                                                                                                                          
      },
      usrBtn:{
          backgroundColor:'skyblue',
          padding:15,
          width:'40%',
          fontSize:30,
          textAlign:'center'
      },
  
  }
)