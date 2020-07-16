import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import cart from './cart';
import Profile from './Profile';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarColor: 'skyblue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarColor: 'skyblue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-contact"
             color={color} size={26} />
          ),
          
        }}
      />
      
     
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      
            headerStyle: {
            backgroundColor: '#1F73D1',
            },
            
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>

            <HomeStack.Screen name="Home" component={Home} options={{
            title:'Homepage',
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1F73D1" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
            
            }} />
    </HomeStack.Navigator>
    );
    const ProfileStackScreen = ({navigation}) => (
      <ProfileStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#1F73D1',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <ProfileStack.Screen name="Profile" component={Profile} options={{
              title:'Profile',
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1F73D1" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
              }} />
      </ProfileStack.Navigator>
      );
     

      