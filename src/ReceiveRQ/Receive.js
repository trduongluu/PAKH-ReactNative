import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {receiveStyle} from '../LayoutStyle';
import PhanCong from './PhanCong';

export default class Receive extends Component {
  // static navigationOptions =  ({navigation}) => ({
  //   headerStyle: {
  //     backgroundColor: '#0057AA',
  //   },
  //   headerRight: <Icon name="user" color='white' size={24} style={{marginRight: 15}} 
  //   onPress={() => navigation.navigate('Profile')} />,
  //   headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')} />
  // });

    render() {
      return (
        <PhanCong />
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