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
    SafeAreaView, 
    Modal,
    TouchableHighlight
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchProductsFromServer } from './api';



const Home = ({ route, navigation }) => {
    const [productList, setProductList] = useState();
    const [isLoading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalsVisible, setModalsVisible] = useState(false);
    const [modallVisible, setModallVisible] = useState(false);
    const [modalwVisible, setModalwVisible] = useState(false);
    const [modalmVisible, setModalmVisible] = useState(false);
    const [modalcVisible, setModalcVisible] = useState(false);
    const [modalzVisible, setModalzVisible] = useState(false);

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
            <View style={{ flexDirection:'row',width:350, height: 160,margin:10,borderColor:'#fff',backgroundColor:'#fff', borderWidth:1, borderRadius:10}} >
                <Image source={{ uri: item.Images[0].img }} style={styles.imageStyle} />
                <View style={{flexDirection:'column'}}>
                <View >
    <Text style={{fontSize:10,margin:5}}>{item.title}</Text>
                </View>
                <View style={styles.viewStyle}>
                    <View>
                    <Text>{item.category}</Text>
                    <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:18}}>{'\u20B9'}{item.price}</Text>
                    <Text style={{fontSize:20,color:'#1F73D1',fontWeight:'bold'}}>{'\u20B9'}{item.price-item.price*30/100}</Text>
                    
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:60,marginTop:20,fontSize:20,color:'#000000'}}>Color</Text>
                    <View style={{ flexDirection: 'row',marginLeft:60}}>
                        <View style={{width:15 , height: 15,margin:2, backgroundColor: 'powderblue'}} />
                        <View style={{width: 15, height: 15,margin:2, backgroundColor: 'skyblue'}} />
                         <View style={{width: 15, height: 15,margin:2, backgroundColor: 'steelblue'}} />
                    </View>
                    </View>
              </View> 
                </View>
                 
            </View>
        </TouchableOpacity>
        
        </View>
    }
    return (
        <ScrollView style={{flex: 1, padding:10}}>
            <ScrollView
            horizontal={true}
            contentContainerStyle={{width:`${100*3}%`}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
                <TouchableOpacity onPress={()=>{setModalwVisible(true);}}>
                <Image style={{margin:10,width:350, height:200,marginBottom:10}} source={require('../assets/sale.jpeg')}/>
                </TouchableOpacity>
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
            <View>
                <Modal transparent={true} visible={modalwVisible}>
                <View style={{backgroundColor:'#1F73D1', flex:2}}>
                    <View style={{marginLeft:10 ,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color:'#fff',padding:10, fontWeight:'bold'}}>WEB VIEW</Text>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalwVisible(!modalwVisible);}}/>
                    </View>
                    <WebView
                    style={{height:200}}
                    source={{
                      uri: 'https://gftpl.in'
                    }}
                  />
                   </View>
                </Modal>
            </View>


            <View>
                <Modal transparent={true} visible={modalmVisible}>
                <View style={{backgroundColor:'#1F73D1', flex:2}}>
                    <View style={{marginLeft:10 ,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color:'#fff',padding:10, fontWeight:'bold'}}>IT SECURITY</Text>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalmVisible(!modalmVisible);}}/>
                    </View>
                    <WebView
                    style={{height:200}}
                    source={{
                      uri: 'https://gftpl.in/services/it-security/'
                    }}
                  />
                   </View>
                </Modal>
            </View>




            <View>
                <Modal transparent={true} visible={modalcVisible}>
                <View style={{backgroundColor:'#1F73D1', flex:2}}>
                    <View style={{marginLeft:10 ,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color:'#fff',padding:10, fontWeight:'bold'}}>MANAGED IT SERVICES</Text>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalcVisible(!modalcVisible);}}/>
                    </View>
                    <WebView
                    style={{height:200}}
                    source={{
                      uri: 'https://gftpl.in/services/managed-it-services/'
                    }}
                  />
                   </View>
                </Modal>
            </View>




            <View>
                <Modal transparent={true} visible={modalzVisible}>
                <View style={{backgroundColor:'#1F73D1', flex:2}}>
                    <View style={{marginLeft:10 ,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color:'#fff',padding:10, fontWeight:'bold'}}>CLOUD SOLUTIONS</Text>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalzVisible(!modalzVisible);}}/>
                    </View>
                    <WebView
                    style={{height:200}}
                    source={{
                      uri: 'https://gftpl.in/services/cloud-solutions/'
                    }}
                  />
                   </View>
                </Modal>
            </View>

            


            <View>
                <Modal transparent={true} visible={modalVisible}>
                <View style={{backgroundColor:'#000000aa', flex:1}}>
                <View style={{marginLeft:360}}>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalVisible(!modalVisible);}}/></View>
                <View style={{backgroundColor:'#fff',padding:40,margin:40,flex:1,borderRadius:10}}>
                   <ScrollView>
                       <Text style={{padding:10,fontSize:20}}>DELIVERY POLICY</Text>
                       <Text>From the perspective of the customer, the delivery policy may be the most important legal document on a website. It should answer questions that are of keen interest to all customers: by what means will my goods be delivered? When will they be delivered?  Do I have to sign for delivery? Will I have to take a day off work?  And how much will it all cost?{'\n'}{'\n'}(1) A separate policy? The first question to ask yourself is whether the delivery policy should be part of the T&Cs of sale, or a separate document.Because it is one of the few sections of the T&Cs that customers may want to read, I normally advise keeping it separate from the rest of the T&Cs. However, if you're trying to keep your legal documentation to a minimum, then it's perfectly acceptable for the policy to form a section of the T&Cs.{'\n'}{'\n'}
                            (2) Legal enforceabilityAnother question to address before you start work on the policy is this: will the policy create legally enforceable rights and obligations? The answer to this depends in large part upon whether obligations and liabilities concerning problem deliveries are set out in the T&Cs or the delivery policy. If you decide that it should, and delivery policy is a separate document, the policy should be incorporated into the contract of sale through the T&Cs of sale.   You'll need to check and amend the T&Cs to ensure that this is done (and don't forget to check any entire agreement clause).
                        </Text>
                        </ScrollView>
                   </View>
                </View>
                </Modal>
            </View>


            <View>
                <Modal transparent={true} visible={modallVisible}>
                <View style={{backgroundColor:'#000000aa', flex:1}}>
                <View style={{marginLeft:360}}>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModallVisible(!modallVisible);}}/></View>
                   <View style={{backgroundColor:'#fff',padding:40,margin:40,flex:1,borderRadius:10}}>
                   <ScrollView><Text style={{padding:10,fontSize:20}}>Return Policy</Text>
                       <Text>People don't have a tendency to read long and boring legal documents online. On the other hand, you have to provide all the necessary information.This is why it is advised to break down your return/refund policy into smaller sections. This will increase the readability of the document, make it easier for customers to find what they need and, at the same time, protect you legally.Despite what you sell, your refund/return policy should usually contain these three sections:How many days a customer has to return the product. Does the counting start from the moment they order it, or from when the product gets shipped to them?If the customer does return a product, you have to specify what kind of refund they are eligible to get. Some stores allow customers to get similar products or get a store credit in the value of the purchased item, while others return the cash spent on the product.At last, you will have to specify who will pay for the return shipping. Some stores don’t charge customers that are in the same state or country as the business is, while others offer free return shipping regardless of the customer’s location.If you run a company that sells digital products (downloadable software, SaaS, digital games, etc.) it is advised to provide these two additional sections:If you allow your customers to get refunds on digital purchases, you have to clearly specify on which ones. In case return/refund policies are different for specific products, you will have to specify each one separately.Sometimes businesses that sell digital products online offer refunds only in certain situations. In this case, you will have to specify each of the situations and provide a short description to each one of them.If customers can make in-store, online and over-the-phone purchases, it is advised to specify the refund/return policy for each one of these. You can do this by adding three very short sections to your agreement (policy for in-store, online and over-the-phone purchase).</Text>
                        </ScrollView>
                   </View>
                </View>
                </Modal>
            </View>


            <View>
                <Modal transparent={true} visible={modalsVisible}>
                <View style={{backgroundColor:'#000000aa', flex:1}}>
                <View style={{marginLeft:360}}>
                    <Icon name="ios-close-circle" color='#fff' size={50} onPress={() => {setModalsVisible(!modalsVisible);}}/></View>
                   <View style={{backgroundColor:'#fff',padding:40,margin:40,flex:1,borderRadius:10}}>
                   <ScrollView><Text style={{padding:10,fontSize:20}}>Price Description </Text>
        <Text>A price is the (usually not negative) quantity of payment or compensation given by one party to another in return for one unit of goods or services.[1] A price is influenced by production costs, supply of the desired item, and demand for the product. A price may be determined by a monopolist or may be imposed on the firm by market conditions. In modern economies, prices are generally expressed in units of some form of currency. (For commodities, they are expressed as currency per unit weight of the commodity, e.g. euros per kilogram or Rands per KG.) Although prices could be quoted as quantities of other goods or services, this sort of barter exchange is rarely seen. Prices are sometimes quoted in terms of vouchers such as trading stamps and air miles. In some circumstances, cigarettes have been used as currency, for example in prisons, in times of hyperinflation, and in some places during World War II. In a black market economy, barter is also relatively common. In many financial transactions, it is customary to quote prices in other ways. The most obvious example is in pricing a loan, when the cost will be expressed as the percentage rate of interest. The total amount of interest payable depends upon credit risk, the loan amount and the period of the loan. Other examples can be found in pricing financial derivatives and other financial assets. For instance the price of inflation-linked government securities in several countries is quoted as the actual price divided by a factor representing inflation since the security was issued.</Text>    
                        </ScrollView>
                   </View>
                </View>
                </Modal>
            </View>


            <TouchableOpacity 
            onPress={() => {
          setModalVisible(true);
        }}>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-business" size={35} color="black" style={{marginLeft:10}}/>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Delivery Within 7 days</Text>
            </View>
            </TouchableOpacity>



            <TouchableOpacity 
            onPress={
                    ()=>{setModalsVisible(true);}
                }>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-pricetags" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Affordable prices</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity 
            onPress={() => {
          setModallVisible(true);
        }}>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150, margin:5,alignItems:'center',justifyContent:'center'}}>
                <Icon name="md-sync" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Easy return policy</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity 
            onPress={() => {
          setModalVisible(true);
        }}>
            <View style={{backgroundColor:'#DCDCDC',height:100,width:150,marginBottom:10,alignItems:'center',justifyContent:'center',margin:5}}>
                <Icon name="md-checkbox-outline" size={35} color="black" style={{marginLeft:10}}/>
                <Text>Assured Quality</Text>
                </View>
                </TouchableOpacity>

                
            </ScrollView> 
            <Text style={{margin:10,fontSize:20}}>OUR SERVICES</Text>
            
            <ScrollView
                horizontal={true}
                contentContainerStyle={{width:`${360}%`}}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled>
                <TouchableOpacity 
                onPress={()=>{setModalmVisible(true);}}>
                <Image style={{margin:5,width:320, height:300,marginBottom:10}} source={require('../assets/security.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setModalcVisible(true);}}>
                    <Image style={{margin:5,width:320, height:300,marginBottom:10}} source={require('../assets/managed-it.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setModalzVisible(true);}}>
                    <Image style={{margin:5,marginBottom:10,width:320,height:300, marginBottom:20}} source={require('../assets/cloud.png')}/>
               
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setModalwVisible(true);}}>
                    <Image style={{margin:5,marginBottom:10,width:320,height:300, marginBottom:20}} source={require('../assets/consultancy.png')}/>
                </TouchableOpacity>
                </ScrollView>
                <Text style={{margin:10,fontSize:20}}>OUR PRODUCTS</Text>
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
    sepStyle: {
        height: 16,
    },
    img:{
        height:200,
        width:400
    }
});

export default Home;