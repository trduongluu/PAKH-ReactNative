import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import {settingStyle} from '../LayoutStyle';

export  default class Setting extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerLeft: <Image style={{width: 96, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')} />
  };

    render() {
      return (
        <View style={styles.container}>
          <Text>Setting</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });