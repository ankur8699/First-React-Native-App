import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import { Accordion,GalioProvider, NavBar,DeckSwiper,Input,Icon, Block,Button,Card } from 'galio-framework';
class Settings extends React.Component {
  render(){
    return (
      <View>
        <Text> Screen Text</Text>
      <Modal>
        <View style={{backgroundColor:'#000000aa', flex:1}}>
          <View style={{backgroundColor:'#fff',padding:50,margin:60,flex:1,borderRadius:10}}>
            <Text>modal text</Text>
          </View>
        </View>
      </Modal>
        </View>
    )}
  }
  export default Settings;