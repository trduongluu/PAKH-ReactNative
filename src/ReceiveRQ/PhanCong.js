import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {receiveStyle} from '../LayoutStyle';
import DataAction from '../apiData';

var dataTest = [
  { "yeucau": "Tinh cuoc thue bao", "donvi": "TC", "code": "109245",
  "start": "25/05/2018", "end": "30/05/2018", "sender": "Nguyen Hong" },
  { "yeucau": "Yuki no hana", "donvi": "BH", "code": "100992",
  "start": "11/05/2018", "end": "30/05/2018", "sender": "Luu Quang Vu Minh" },
  { "yeucau": "Cham day noi dau", "donvi": "AH", "code": "198777",
  "start": "12/05/2018", "end": "30/05/2018", "sender": "Nguyen Dung" },
  { "yeucau": "Nap tien dien thoai", "donvi": "DD", "code": "123098",
  "start": "22/05/2018", "end": "30/05/2018", "sender": "Nguyen Ba" },
  { "yeucau": "Tra loi khach hang", "donvi": "EE", "code": "125333",
  "start": "15/05/2018", "end": "30/05/2018", "sender": "Nguyen Ha" }
]

class ItemLayout extends Component {
  render() {
    return(
      <View style={receiveStyle.rowbg} >
        <View style={receiveStyle.rowSubline} >
          <Text style={receiveStyle.txtRQ} >Yeu cau: {this.props.item.yeucau} tu {this.props.item.donvi}</Text>
          <View style={receiveStyle.code_levelArea} >
            <Text style={receiveStyle.txtCode}>{this.props.item.code}</Text>
            <Ionicons name="md-star" color='red' size={18} style={receiveStyle.levelIcon} />
          </View>
        </View>
        <View style={receiveStyle.rowSubline} >
          <View style={receiveStyle.timeArea} >
            <Ionicons name="md-time" size={10} style={receiveStyle.clockIcon} />
            <Text style={receiveStyle.txtTime} >{this.props.item.start} - {this.props.item.end}</Text>
          </View>
          <View style={receiveStyle.usersArea} >
            <Ionicons name="md-contact" size={10} style={receiveStyle.senderIcon} />
            <Text style={receiveStyle.txtSender}>{this.props.item.sender}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class PhanCong extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount(){
    DataAction.getReceiveRQ().then((response) => {
      this.setState({
        data: response,
        isLoading: false
      });
    }).catch((error) => {
      console.log(error)
    });
  }

    render() {
      return (
        <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
          <FlatList data={dataTest}
          renderItem={({item, index}) => {
            return(
              <ItemLayout item={item} index={index} ></ItemLayout>
            );
          }} ></FlatList>
        </LinearGradient>
      );
    }
  }