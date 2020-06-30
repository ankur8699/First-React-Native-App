import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';



const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#1F73D1' barStyle="light-content"/>
        <View style={styles.header}>
            <Image 
            source={require('../assets/downloads.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <View style={[styles.footer, {
                backgroundColor: '#fff'
            }]}
        >
            <Text style={[styles.title, {
                color: '#1F73D1'
            }]}>Welcome to my app</Text>
            <Button style={styles.button} title="Login "
            onPress={()=>navigation.navigate('Login')}/>
            
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1F73D1'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#1F73D1',
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent:'center'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 50,
     
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
