import React, {Component} from 'react';
import {View, Text, FlatList, findNodeHandle, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from 'react-native-blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {receiveStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import DetailsSend from './DetailsSend'
import { withNavigation } from 'react-navigation';


//Dinh nghia 1 Item cua Flatlist
class ItemLayout extends Component {
    render() {
        return (
            <View style={receiveStyle.bground}>
                <View style={receiveStyle.rowbg}>
                    <View style={receiveStyle.rowSubline}>
                        <Text style={receiveStyle.txtRQ}>Yeu cau: {this.props.item.req_content}</Text>
                        <View style={receiveStyle.code_levelArea}>
                            <Text style={receiveStyle.txtCode}>{this.props.item.ticket_id}</Text>
                            {this.props.item.req_level == 'KHAN_CAP' ? <Ionicons name="md-star" color='red' size={18} style={receiveStyle.levelIcon} /> : null}
                        </View>
                    </View>
                    <View style={receiveStyle.rowSubline}>
                        <View style={receiveStyle.timeArea}>
                            <Ionicons name="md-time" size={10} style={receiveStyle.clockIcon}/>
                            <Text style={receiveStyle.txtTime}>{this.props.item.req_date} - {this.props.item.pro_plan}</Text>
                        </View>
                        <View style={receiveStyle.usersArea}>
                            <Ionicons name="md-send" size={10} style={receiveStyle.senderIcon}/>
                            <Text style={receiveStyle.txtSender}>{this.props.item.req_user}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class PhanCongXL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            sendRQ: [],
            tabname: 'PHAN_CONG_XU_LY',
            globUser: '',
            seed: 1,
            refreshing: false
        }
    }

    LoadData() {
        DataAction.getUser().then((user) => {
            this.setState({globUser: user});
            console.log('in fetch pcxl send = ' + this.state.globUser);
            DataAction.getSendRQ(this.state.tabname, this.state.globUser).then((response) => {
                this.setState({
                    sendRQ: response,
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

    componentDidMount() {
        this.LoadData();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.loading}
                                start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                    <ActivityIndicator color='#A9F8FF'/>
                </LinearGradient>
            )
        }

        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <View style={receiveStyle.Parea}>
                    <Image style={receiveStyle.Pimage} source={require('../img/Ptext.png')}/>
                </View>
                <FlatList data={this.state.sendRQ}
                          renderItem={({item, index}) => {
                              return (
                                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsSend', {dataDetails: item})}>
                                      <ItemLayout item={item} index={index}></ItemLayout>
                                  </TouchableOpacity>
                              );
                          }}
                          refreshing={this.state.refreshing} onRefresh={this.handleRefresh} ></FlatList>
            </LinearGradient>
        );
    }
}
export default withNavigation(PhanCongXL);