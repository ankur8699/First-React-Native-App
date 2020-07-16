import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Linking
} from 'react-native';
import cart from './cart';
import { createStackNavigator } from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';
import { Button } from 'react-native-paper';


const ProductDetails = ({ route, navigation }) => {
  
  const movetocart = (item) => {
    navigation.navigate('cart', { products : item  } );
    
}
  const product = route.params.product;
   
  const Cartitems=({item})=>{
    return <View style={{flexDirection:'row',backgroundColor:'#1F73D1',height:55}}>
    <Icon name="ios-menu" size={25}  style={{color:'#fff',margin:15}} onPress={() => navigation.openDrawer()}></Icon>
    <Text style={{padding:10, fontSize:25, fontWeight:'bold', color:'#fff'}}>{product.title}</Text>
    <Icon size={35} style={{margin:10,marginLeft:210}} name='md-cart' color='#fff' 
    onPress={()=>{movetocart(item)}}
    ></Icon></View>
  }

  const Btn=({item})=>{
    return <View style={{marginLeft:25,borderRadius:30,flexDirection:'row',width:220}}>
      <Icon.Button size={25} style={{backgroundColor:'#1F73D1',color:'#fff',}} name='md-cart' color='#fff' 
    onPress={()=>{movetocart(item)}}
    >
      <Text style={{backgroundColor:'#1F73D1',color:'#fff',fontSize:15,fontWeight:'bold'}}>ADD TO CART</Text>

    </Icon.Button>
      </View>
  }
    return (<View>
      <Cartitems/>
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
      <ScrollView
            horizontal={true}
            contentContainerStyle={{width:`${100*4}%`}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
                <Image source={{ uri: product.Images[0].img }} style={styles.imageStyle} />
                <Image style={{margin:10 ,width:360, height:220}} source={{ uri: product.Images[0].img2}}/>
                <Image style={{margin:10,width:360, height:220}} source={{ uri: product.Images[0].img3 }}/>
                <Image style={{margin:10,width:360, height:220}} source={{ uri: product.Images[0].img4 }}/>
            </ScrollView>
            <View style={{backgroundColor:'#fff'}}>
    <Text style={{ marginLeft:10,fontSize:20}}>{product.title}</Text>
    <Text style={{ marginLeft:10,fontSize:15,color:'grey'}}>xxxxxxx{product.id}{product.id}xx{'\n'}</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={{padding:10,marginLeft:10,fontSize:30, color:'#000000'}}> {'\u20B9'}{product.price-product.price*30/100}</Text>
                  <View style={{flexDirection:'column'}}>
                  <Text style={{marginLeft:0,fontSize:15,marginTop:15}}>MRP:  {'\u20B9'} {product.price}</Text>
                  <Text style={{marginLeft:0,fontWeight:'bold',fontSize:15,color:'#1F73D1'}}>(Discount 30%){'\n'}</Text>
                  </View>
              </View>
            </View>
            <Btn/>

            <View style={styles.card}>
            <Text style={{ margin:10,fontSize:20,fontWeight:'bold'}}>Silent Features</Text>
            <View style={{margin:10,padding:10,borderColor:'black',borderWidth:1,borderRadius:5}}>
            <View style={{flexDirection:"row",}}> 
            <Icon name="md-business" size={35} color="black" style={{marginLeft:10}}/>
            <Text style={{ 
            marginTop:8,marginLeft:20,fontSize:15,color:'black',fontWeight:'bold'}}>Delivery within 7 days</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10}}> 
            <Icon name="md-pricetags" size={35} color="black" style={{marginLeft:10}}/>
            <Text style={{ 
            marginTop:8,marginLeft:20,fontSize:15,color:'black',fontWeight:'bold'}}>Availabe at affordable prices</Text>
            </View>
            </View>
            </View>    
        <View style={styles.card}>
            <ReadMore
            style={{margin:20,fontSize:15,color:'grey'}}
            numberOfLines={6}>
        <Text style={{ marginLeft:10,fontSize:20,fontWeight:'bold'}}>Description:{'\n'}</Text>
            <Text style={{marginLeft:20,fontSize:15,color:'grey'}}>
            {product.Description}
            </Text>
          </ReadMore>
          </View>
          <View style={styles.card}>
          <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold'}}>Product Information{'\n'}</Text>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:'bold'}}>MRP </Text>
          <Text style={{marginLeft:10,fontSize:15,color:'grey'}}>{'\u20B9'}{product.price} (inclusive of tax){'\n'}</Text>

          <Text style={{marginLeft:10,fontSize:17,fontWeight:'bold'}}>Warranty</Text>
          <Text style={{marginLeft:10,fontSize:15,color:'grey'}}>2 years{'\n'}</Text>

          <Text style={{marginLeft:10,fontSize:17,fontWeight:'bold'}}>Manufactured By:</Text>
          <Text style={{marginLeft:10,fontSize:15,color:'grey'}}>
            Great Future Technology Pvt. Ltd. 
            A-2667, Ground Floor, Road No. 125, GreenFields, Faridabad, Haryana, IN 121003
          </Text>
          <Text style={{marginLeft:10,fontSize:10,color:'grey'}}>
            {'\n'}
            For consumer Complaints/Assistance Please contact on:{'\n'}
            Tel:- 9888899998   Email: care@gftpl.in
          </Text>
          </View>
    </View>
    <View style={styles.footer}>
    <Text style={{ marginLeft:20,fontSize:15, color:'#fff'}}>Contact us:</Text>
      <View style={{flexDirection:'row',}}>
      <Icon 
      name="logo-twitter" 
      size={30} color="#fff" 
      style={{padding:10,marginLeft:10}}
      onPress={()=>{Linking.openURL('https://twitter.com/GreatFutureTech')}}
      />
      <Icon 
      name="logo-linkedin" 
      size={30} color="#fff" 
      style={{padding:10,marginLeft:5}}
      onPress={()=>{Linking.openURL('http://linkedin.in/company/greatfuturetech')}}/>
      <Icon 
      name="logo-facebook" 
      size={30} color="#fff" 
      style={{padding:10,marginLeft:5,marginBottom:20}}
      onPress={()=>{Linking.openURL('https://www.facebook.com/Great-Future-Technology-235676317322010')}}
      />

    </View>
    </View>
    </ScrollView>
    </View>);
    
}

const styles = StyleSheet.create({
    imageStyle: {
        margin:5,
        height: 220,
        width: 360,
        backgroundColor: '#d1d1d1'
 
  },
  header:{
    flex:1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  footer: {
    flex:3,
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: '#1F73D1'
},
    viewStyle:{
      margin:10,
      padding:5,
      fontSize:20, 
      },
    rootStyle: {
      marginLeft:20,
      fontSize:35,
      fontWeight:'bold',
      justifyContent:'center',
      textAlign:'center',
    },
    catStyle: {
      marginLeft:20,
      fontSize:20,
      justifyContent:'center',
      textAlign:'center'
    },
    card:{
      marginTop:10,
          padding: 10,
          borderRadius: 3,
          borderColor: 'rgba(0,0,0,0.1)',
          borderWidth: 1,
          backgroundColor: '#fff',
    }
   
}
);

export default ProductDetails;