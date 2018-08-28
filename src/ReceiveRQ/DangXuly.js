import React, { Component } from 'react';
import {View, Text, FlatList, findNodeHandle, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from 'react-native-blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {receiveStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import {themeUse} from '../themecolor';
// import {themeUse} from '../Setting/Setting';

class ItemLayout extends Component {
  render() {
    return(
      <View style={receiveStyle.bground} >
        <View style={receiveStyle.rowbg} >
          <View style={receiveStyle.rowSubline} >
            <View>
            <Text style={receiveStyle.txtRQ} >Yêu cầu: {this.props.item.req_title}</Text>
            <Text style={receiveStyle.txtRQcode}>từ {this.props.item.req_dep_code}</Text>
            </View>
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

export default class DangXuly extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      receiveRQ: [],
      tabname: 'DANG_XU_LY',
      globUser: '',
      seed: 1,
      refreshing: false
    }
  }

  formatDate(inputDate) {
    var date = new Date(inputDate);
    return date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear();
  }

  LoadData() {
    DataAction.getUser().then((user) => {
      this.setState({ globUser: user });
      console.log('in fetch dangxl = ' + this.state.globUser);
      DataAction.getReceiveRQ(this.state.tabname, this.state.globUser).then((response) => {
        this.setState({
          receiveRQ: response,
          isLoading: false,
          refreshing: false
        })
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  handleRefresh = () => {
    this.setState({
      refreshing: true,
      seed: this.state.seed + 1
    }, () => {
      this.LoadData();
    });
  }

  componentWillMount(){
    this.LoadData();
  }

    render() {
      if(this.state.isLoading){
        return(
          <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={receiveStyle.loading}
          start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
            <ActivityIndicator color={themeUse.activityIndicator} />
          </LinearGradient>
        )
      }

      return (
        <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={receiveStyle.bground}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
          <View style={receiveStyle.Parea} >
            <Image style={receiveStyle.Pimage} source={require('../img/Ptext.png')} />
          </View>
          <FlatList data={this.state.receiveRQ}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Process', {
                ticketId: item.ticket_id,
                reqUser: item.req_user,
                reqTitle: item.req_title,
                reqDate: this.formatDate(item.req_date)
              })} >
              <ItemLayout item={item} index={index} ></ItemLayout>
              </TouchableOpacity>
            );
          }}
          refreshing={this.state.refreshing} onRefresh={this.handleRefresh} ></FlatList>
        </LinearGradient>
      );
    }
  }