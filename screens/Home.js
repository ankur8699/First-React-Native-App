import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchProductsFromServer } from './api';
const Home = ({ route, navigation }) => {
    const [productList, setProductList] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        setLoading(true);
        fetchProductsFromServer().then((json) => {
            if (!json.error) {
                setProductList(json.result);
            }
            else {
                alert('Oops! Faild to fetch products.');
            }
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setLoading(false);
        });

    }

    const moveOnDetailsPage = (item) => {
        navigation.navigate('Details', { product: item });
    }

    const _renderListItem = ({ item, index }) => {
        return <View>
        <TouchableOpacity onPress={() => moveOnDetailsPage(item)}>
            <View style={{ width:350, height: 100,margin:10,borderColor:'grey', borderWidth:1, borderRadius:10}} >
              <View style={{flex:1 , flexDirection:'row'}}>
                <Image source={{ uri: item.image }} style={styles.imageStyle} />
              </View>  
                <View style={styles.viewStyle}>
                    <Text>{item.category}</Text>
                    <Text>{item.title}</Text>
                    <Text>{'\u20B9'}{item.price}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
        </View>
    }
    return (
        <ScrollView style={{flex: 1, padding: 20}}>
            <ScrollView
            horizontal={true}
            contentContainerStyle={{width:`${100*3}%`}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
                <Image style={{margin:10,width:350, height:200,marginBottom:10}} source={require('../assets/sale.jpeg')}/>
                <Image style={{margin:10,width:350, height:200,marginBottom:10}} source={require('../assets/saling.jpg')}/>
                <Image style={{margin:10,marginBottom:10,width:350,height:200, marginBottom:10}} source={require('../assets/shop.jpeg')}/>
            </ScrollView>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{width:`${100*2}%`}}
            >
            <View style={{backgroundColor:'#DCDCDC',height:100,width:110, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Text >Silent</Text>
                <Text style={{ fontSize:20}}>Features
                </Text>
            </View>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-business" size={35} color="black" style={{marginLeft:10}}/>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Delivery Within 7 days</Text>
            </View>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-pricetags" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Affordable prices</Text>
            </View>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-sync" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Easy return policy</Text>
            </View>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150,marginBottom:10,alignItems:'center',justifyContent:'center',margin:5}}>
                <Icon name="md-checkbox-outline" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Assured Quality</Text>
                </View>
            </ScrollView> 
            {
                isLoading && <ActivityIndicator size={'small'} />
            }
            {!isLoading && productList && productList.length > 0 && <FlatList
                
                data={productList}
                renderItem={_renderListItem}
                keyExtractor={(item, index) => item.id.toString()}
            />}

            {
                !isLoading && productList && productList.length <= 0 && <Text>No Result found.</Text>
            }

            </ScrollView>
    )

}

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1
    },
    
    imageStyle: {
        height: 90,
        width: 120,
        marginLeft:20,
        margin:5},
    viewStyle: {
        flex: 5,
        marginLeft: 200,
        fontSize:25,
    },
    sepStyle: {
        height: 16,
    },
    img:{
        height:200,
        width:400
    }
});

export default Home;