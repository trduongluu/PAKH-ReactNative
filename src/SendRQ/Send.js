import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sendStyle} from '../LayoutStyle';

export default class Send extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerRight: <Icon name="paper-plane" color='white' size={24} style={{marginRight: 15}}
    onPress={() => navigation.navigate('MakeRQ')} />,
    headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')} />
  });

    render() {
      return (
        <View style={styles.container}>
          <Text>Send</Text>
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