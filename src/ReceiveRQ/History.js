import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Textarea, Title } from 'native-base';
import styles from './styles';
import {receiveStyle} from '../LayoutStyle';

export default class History extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerTitle: 'Xử lý gần nhất'
  };

    render() {
      return (
        <Container>
          <LinearGradient colors={['#0057AA', '#A9F8FF']} style={{flex: 1}}
            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >

              <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
                  <View style={{flex: 2, justifyContent: 'center', marginLeft:20}}>
                      <Text style={{fontWeight:'bold', color:'#A9F8FF', fontSize: 12}}>
                          Người Gửi
                      </Text>
                  </View>
                  <View style={{flex:3, borderLeftWidth: 1, borderLeftColor: '#A9F8FF', paddingLeft: 10}}>
                      <View style={{flexDirection: 'row'}}>
                          <Icon name='person' style={{fontSize: 12, color:'#A9F8FF', padding: 3}}/>
                          <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}> Lưu Quang Vũ - Phòng TC</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                          <Icon name='call' style={{fontSize: 12, color:'#A9F8FF', padding: 3}}/>
                          <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}> Gọi 0123456789</Text>
                      </View>
                  </View>
              </View>

              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='ios-paper' style={{fontSize: 12, color: 'white'}}/>
                      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nguyên Nhân Yêu Cầu Cấp 1
                      </Text>
                  </View>
                  <View>
                      <Text style={{color: 'white', fontSize: 12}} >Caution Level 1 Example</Text>
                  </View>
              </View>

              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='ios-paper' style={{fontSize: 12, color: 'white'}}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nguyên Nhân Yêu Cầu Cấp 2
                      </Text>
                  </View>
                  <View>
                      <Text style={{color: 'white', fontSize: 12}} >Caution Level 2 Example</Text>
                  </View>
              </View>

              <View style={{margin: 15, marginBottom: 0}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='document' style={{fontSize: 12, color: 'white'}}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nội Dung Xử Lý
                      </Text>
                  </View>
                  <View>
                      <Text style={{color: 'white', fontSize: 12}} >
                          Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4/2018
                      </Text>
                  </View>
              </View>



              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='document' style={{fontSize: 12, color: 'white'}}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nội Dung Xử Lý Nội Bộ
                      </Text>
                  </View>
                  <View>
                      <Text style={{color: 'white', fontSize: 12}} >
                          Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4/2018
                      </Text>
                  </View>
              </View>


          </LinearGradient>

        </Container>
      );
    }
  }