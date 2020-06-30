import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,TextInput,StatusBar,Alert,TextInputComponent
} from 'react-native';

import { AuthContext} from '../components/context';    

const Login = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const {Signin} =React.useContext(AuthContext);

    const textInputChange=(val)=>{
        if(val.length!=0){
           setData(
               {
                   ...data,
                   username:val,
                   check_textInputChange:true
               }
           );
        }else{setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
        }
    }
    const handlePassword=(val)=>{
           setData(
               {
                   ...data,
                   password:val,
                   check_textInputChange:true
               });
        }
    

    const Loginhandle=( username, password )=>{
        Signin(username,password);
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>LOGIN </Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>UserName</Text>
             <TextInput 
             
             placeholder="Enter Username"
             style={styles.textInput}
             onChangeText={(val)=>textInputChange(val)}
             />   
            
             <Text style={styles.text_footer}>Password</Text>
             <TextInput 
             placeholder="Enter Password"
             style={styles.textInput}
             onChangeText={(val)=>handlePassword(val)}
             secureTextEntry
             /> 
        <Button style={styles.button} title='Login'
        onPress={() => {Loginhandle(data.username,data.password)}}
        />
        </View>
       
      </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1F73D1',
     
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginLeft:10
    },
    
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 30,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });