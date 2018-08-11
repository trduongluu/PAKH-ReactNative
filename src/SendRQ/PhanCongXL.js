import React, {Component} from 'react';
import {View, Text, FlatList, findNodeHandle, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from 'react-native-blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {receiveStyle} from '../LayoutStyle';
import DataAction from '../apiData';


//Dinh nghia 1 Item cua Flatlist
class ItemLayout extends Component {
    render() {
        return (
            <View style={receiveStyle.bground}>
                <View style={receiveStyle.rowbg}>
                    <View style={receiveStyle.rowSubline}>
                        <Text style={receiveStyle.txtRQ}>Yeu cau: {this.props.item.req_content}
                            tu {this.props.item.req_dep_code}</Text>
                        <View style={receiveStyle.code_levelArea}>
                            <Text style={receiveStyle.txtCode}>{this.props.item.ticket_id}</Text>
                            <Ionicons name="md-star" color='red' size={18} style={receiveStyle.levelIcon}/>
                        </View>
                    </View>
                    <View style={receiveStyle.rowSubline}>
                        <View style={receiveStyle.timeArea}>
                            <Ionicons name="md-time" size={10} style={receiveStyle.clockIcon}/>
                            <Text style={receiveStyle.txtTime}>{this.props.item.req_date}
                                - {this.props.item.pro_plan}</Text>
                        </View>
                        <View style={receiveStyle.usersArea}>
                            <Ionicons name="md-contact" size={10} style={receiveStyle.senderIcon}/>
                            <Text style={receiveStyle.txtSender}>{this.props.item.req_user}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default class PhanCong extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            receiveRQ: [],
            tabname: 'PHAN_CONG_XU_LY'
        }
    }

    componentDidMount() {
        DataAction.getSendRQ(this.state.tabname).then((response) => {
            this.setState({
                receiveRQ: response,
                isLoading: false
            });
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <View style={receiveStyle.Parea}>
                    <Image style={receiveStyle.Pimage} source={require('../img/Ptext.png')}/>
                </View>
                <FlatList data={this.state.receiveRQ}
                          renderItem={({item, index}) => {
                              // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                              return (
                                  <TouchableOpacity>
                                      <ItemLayout item={item} index={index}></ItemLayout>
                                  </TouchableOpacity>
                              );
                          }}></FlatList>
            </LinearGradient>
        );
    }
}