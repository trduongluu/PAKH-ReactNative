import React, { Component } from 'react';
import {View, Text, FlatList, findNodeHandle, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import {BlurView} from 'react-native-blur';
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

//Dinh nghia 1 Item cua Flatlist
class ItemLayout extends Component {
  render() {
    return(
      <View style={receiveStyle.bground} >
        <View style={receiveStyle.rowbg} >
          <View style={receiveStyle.rowSubline} >
            <Text style={receiveStyle.txtRQ} >Yeu cau: {this.props.item.req_title} tu {this.props.item.req_dep_code}</Text>
            <View style={receiveStyle.code_levelArea} >
              <Text style={receiveStyle.txtCode}>{this.props.item.ticket_id}</Text>
              {this.props.item.req_level == 'KHAN_CAP' ? <Ionicons name="md-star" color='red' size={18} style={receiveStyle.levelIcon} /> : null}
            </View>
          </View>
          <View style={receiveStyle.rowSubline} >
            <View style={receiveStyle.timeArea} >
              <Ionicons name="md-time" size={10} style={receiveStyle.clockIcon} />
              <Text style={receiveStyle.txtTime} >{this.props.item.req_date} - {this.props.item.pro_plan}</Text>
            </View>
            <View style={receiveStyle.usersArea} >
              <Ionicons name="md-contact" size={10} style={receiveStyle.senderIcon} />
              <Text style={receiveStyle.txtSender}>{this.props.item.req_user}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class PhanCong extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      receiveRQ: [],
      tabname: 'PHAN_CONG_XU_LY',
      globUser: ''
    }
  }

  componentWillMount(){
    DataAction.getUser().then((user) => {
      this.setState({ globUser: user });
      console.log('in fetch pcxl = ' + this.state.globUser);
      DataAction.getReceiveRQ(this.state.tabname, this.state.globUser).then((response) => {
        console.log(JSON.stringify(response));
        this.setState({
          receiveRQ: response,
          isLoading: false
        })
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

    render() {
      if(this.state.isLoading){
        return(
          <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.loading}
          start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
            <ActivityIndicator color='#A9F8FF' />
          </LinearGradient>
        )
      }

      return (
        <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
          <View style={receiveStyle.Parea} >
            <Image style={receiveStyle.Pimage} source={require('../img/Ptext.png')} />
          </View>
          <FlatList data={this.state.receiveRQ}
          renderItem={({item, index}) => {
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
            return(
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Process', {
                ticketId: item.ticket_id,
                reqUser: item.req_user,
                reqTitle: item.req_title,
                reqDate: item.req_date
              })} >
              <ItemLayout item={item} index={index} ></ItemLayout>
              </TouchableOpacity>
            );
          }} ></FlatList>
        </LinearGradient>
      );
    }
  }

  export default withNavigation(PhanCong);