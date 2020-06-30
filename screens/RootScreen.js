import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Mainscreen';
import Login from './Login';

const RootStack = createStackNavigator();


const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Mainscreen" component={SplashScreen}/>
        <RootStack.Screen name="Login" component={Login}/>

    </RootStack.Navigator>
);

export default RootStackScreen;