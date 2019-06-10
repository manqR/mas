import React, { Component } from 'react'
import {StyleSheet,Text,View,Image} from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image  style={{width:225, height: 70}}
                    source={require('../images/logo.png')}
                />            
                <Text style={styles.logoText}></Text>            
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'    
    },
    
    logoText : {
        marginVertical: 25,
        fontSize:16,
        color:'#636e72'    
    }
    
});
    