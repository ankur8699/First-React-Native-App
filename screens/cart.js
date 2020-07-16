import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';

import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';


export default class Cart extends React.Component{
  state={
    count:1
  }
  render(){
  return (
  <View>
    <View style={{flexDirection:'row',backgroundColor:'#1F73D1',height:55}}>
    <Text style={{padding:10, fontSize:25, fontWeight:'bold', color:'#fff'}}>My Cart</Text>
    </View>
    <View style={{ flexDirection:'row',width:360, height: 180,margin:10,borderColor:'#fff',backgroundColor:'#fff', borderWidth:1, borderRadius:10}} >
    <Image  style={styles.imageStyle} source={require('../assets/cloud.png')}/>
      <View style={{flexDirection:'column'}}>
        <View >
          <Text style={{fontSize:20,margin:5,marginLeft:10}}>Test Product Name</Text>
          <Text style={{fontSize:15,margin:2,marginLeft:10}}>Seller: GFTPL</Text>
            </View>
              <View style={styles.viewStyle}>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:25,fontWeight:'bold'}}>{'\u20B9'}70</Text>
                  <Text style={{marginTop:10,textDecorationLine: 'line-through', textDecorationStyle: 'solid',margin:5,fontSize:15}}>{'\u20B9'}100</Text>
                  <Text style={{marginTop:10,fontSize:15,color:'#1F73D1'}}>(Discount 30%)</Text>
                  
                  </View>

              </View>
            <Text style={{marginLeft:10,fontSize:15}}>Delivery in 3 days</Text>
              <View style={{flexDirection:'row'}}>
          <Button color='#000000' style={{backgroundColor:'#fff',height:20,marginLeft:30}} onPress={()=> this.setState({count: this.state.count - 1})}>
            <Icon name='minuscircleo' size={20} ></Icon>
            </Button>
            <Text style={{fontSize:25}}>{this.state.count}</Text> 
            <Button color='#000000' style={{backgroundColor:'#fff',height:30}} onPress={()=> this.setState({count: this.state.count + 1})}>
            <Icon name='pluscircleo' size={20} ></Icon>
            </Button>
            </View>

            </View>
          </View>
          <View style={{ flexDirection:'column',width:360, height: 200,margin:10,borderColor:'#fff',backgroundColor:'#fff', borderWidth:1, borderRadius:10}}>
      <Text style={{margin:10,fontSize:16}}>PRICE DETAILS</Text>
    <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:16}}>Quantity </Text>
      <Text style={{marginLeft:10,fontSize:20,marginRight:10}}>{this.state.count}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:16}}>Delivery Fee </Text>
      <Text style={{marginLeft:10,fontSize:16,marginRight:10,color:'#1F73D1'}}>FREE</Text>
      </View>
      <Text style={{marginLeft:10,fontSize:20}}>---------------------------------------------------------------</Text>
      
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:16}}>Total Amount </Text>
      <Text style={{marginLeft:10,fontSize:16,marginRight:10}}>{'\u20B9'}{this.state.count *70}</Text>
      </View>
      <Text style={{marginLeft:10,fontSize:20}}>---------------------------------------------------------------</Text>
      <Text style={{marginLeft:10,fontSize:16,marginRight:10,color:'#1F73D1'}}>You will save  {'\u20B9'}{this.state.count *30} on this order </Text>
    </View>
    </View>
    <View style={{backgroundColor:'papayawhip',padding:10}} >
      <Text style={{backgroundColor:'papayawhip',margin:10,fontSize:15}}>Delivery will be free for oder more than {'\u20B9'}799</Text></View>
    <View style={{flexDirection:'row'}}>
    <Icon name='Safety' size={35} style={{margin:30}}></Icon>
    <Text style={{marginTop:32,fontSize:20}}> Safe and secure payments</Text>
    </View>
    </View>
    
    )
  }
}
const styles = StyleSheet.create({
  rootStyle: {
      flex: 1
  },
  
  imageStyle: {
      marginLeft:10,
      height: 140,
      width: 140,
      marginBottom:10,
     
      
      },
  viewStyle: {
      marginLeft:10,
      fontSize:25,
      marginTop:10,
      flexDirection:'row'

  },
})
