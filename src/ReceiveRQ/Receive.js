import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import khung from '../LayoutStyle'

export default class ReceiveScreen extends Component {
  // static navigationOptions = {
  //   headerRight: <Icon name="ios-paper-plane" color='white' size={24} style={{marginRight: 15}} />,
  //   headerLeft: <Image style={{width: 96, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')} />
  // };

    render() {
      return (
        <View style={styles.container}>
          <Text>Receive</Text>
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