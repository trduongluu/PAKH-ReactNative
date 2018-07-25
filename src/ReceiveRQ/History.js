import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {} from '../LayoutStyle';

export default class History extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerTitle: 'Xử lý gần nhất'
  };

    render() {
      return (
        <View style={styles.container}>
          <Text>History</Text>
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