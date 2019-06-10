import React, { Component } from 'react'
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';
import Logo from './Logo';
import Form from './Form';

export default class Login extends Component {
    render() {
        return (
            
            <LinearGradient
                colors={['#2cb5e8','#9fb8ad', '#1fc8db']}
                style={styles.container}>
                        <View style={styles.container}>
                            <Logo/>
                            <Form type="Sign in"/>
                            <View style={styles.signupTextCont}>
                                <Text style={styles.signupText}>Dont have an account yet?</Text>
                                <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                            </View>
                        </View>
                </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        // backgroundColor:'#1fc8db',
        // ImageBackground:'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',                
        flex: 1,
        alignItems:'center',
        justifyContent :'center'    
    },
    
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'    
    },
    
    signupText: {
        color:'#636e72',
        fontSize:14    
    },
    
    signupButton: {
        color:'#636e72',
        fontSize:14,
        fontWeight:'500'    
    }
    
});