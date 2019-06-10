import React, { Component } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

let CryptoJS = require("crypto-js");


// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
// console.log("encrypted text", ciphertext.toString());

// var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);
// console.log("decrypted text", plaintext);

export default class Form extends Component {

    state  = {username : '', password : '' };
   

    serialize = obj => {
        let str = [];
        for (let p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    };

    SignIn(e) {
        e.preventDefault();

        const { username, password } = this.state;
        // this.props.onLogin({ user }); 
        // console.log(username,' username')
        // console.log(password,' password')

        let ciphertext = CryptoJS.AES.encrypt(password, 'passw0rd123!@#');       
        console.log(ciphertext.toString())

        axios('', {
            method: "POST",
            headers: {
              Accept: "application/json",
                      "Content-Type": "application/x-www-form-urlencoded"
            },
            data: this.serialize({
                username: username,
                password: ciphertext,
            })
        }).then(response => {
            console.log(response,'dasdasd');
        }).catch(error => {
            console.log(error.response);
        });


    }
     
    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value = {this.state.username}
                    onChangeText = {username => this.setState({username})}
                    placeholder="Username"
                    placeholderTextColor = "#636e72"
                    selectionColor="#b2bec3"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}            
                />
                
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    onChangeText = {password => this.setState({password})}
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholderTextColor = "#636e72"
                    ref={(input) => this.password = input}            
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text onPress={this.SignIn.bind(this)} style={styles.buttonText}>{this.props.type}</Text>            
                </TouchableOpacity>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'    
    },
    
    inputBox: {
        width:300,
        height:40,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 15,
        paddingHorizontal:25,
        fontSize:12,
        color:'#34495e',
        marginVertical: 10    
    },
    
    button: {
        width:300,
        backgroundColor:'#0088cf',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13    
    },
    
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'    
    }    
})