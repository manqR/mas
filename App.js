import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Form from './components/src/Form';
import Login from './components/src/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,    
  },
});
