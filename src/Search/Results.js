import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator} from 'react-native'
import {Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import {receiveStyle} from '../LayoutStyle';
import Details from './Details'
import Common from "../common/Common";
import DataAction from "../apiData";

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataResultRequest: [],      //data kết quả tìm kiếm yêu cầu

            start_date: this.props.navigation.state.params.sd,     //ngày bắt đầu
            end_date: this.props.navigation.state.params.ed,      //ngày kết thúc
            req_title: this.props.navigation.state.params.rt,             //tiêu đề
            req_system: this.props.navigation.state.params.rs,
            req_dep_code: this.props.navigation.state.params.rdc,       //đơn vị gửi
            req_user: this.props.navigation.state.params.ru,           //người gửi
            ticketid: this.props.navigation.state.params.tick,            //mã
            pro_dep_code: this.props.navigation.state.params.pdc,      //dơn vị xử lý
            req_status: this.props.navigation.state.params.rstatus,         //trạng thái
            pro_user: this.props.navigation.state.params.pu,           //người xử lý

            isLoading: true,
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Kết quả'
    };

    //chức năng tìm kiếm
    componentWillMount(){
        DataAction.getSearchRequest(this.state.start_date, this.state.end_date, this.state.req_title, this.state.req_dep_code, this.state.req_system, this.state.req_user, this.state.pro_dep_code, this.state.pro_user, this.state.ticketid, this.state.req_status).then((obj) => {
            this.setState({
                dataResultRequest: obj,
                isLoading: false,
            })
            console.log("ADDD")
        }).catch((error) => {
            this.state({dataResultRequest: ''})
        })
    };

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
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={styles.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <StatusBar translucent={true} backgroundColor='transparent'/>
                <Content style={{marginHorizontal: 7}}>
                    <FlatList data={this.state.dataResultRequest}
                              renderItem={({item, index}) => {
                                  // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                                  return (
                                      <TouchableOpacity style={styles.view_sum_item}
                                                        onPress={() => this.props.navigation.navigate('Details', {dataDetails: item})}>
                                          <View style={{flexDirection: 'row'}}>
                                              <View style={{flex: 0.9}}>
                                                  <Text style={styles.txt_resulf_search_2}>Yêu
                                                      cầu: {item.req_title}</Text>
                                                  <View style={{flexDirection: 'row'}}>
                                                      <Text style={styles.txt_resulf_search_1}>Từ </Text><Text
                                                      style={[styles.txt_resulf_search_1, {fontWeight: 'bold'}]}>{item.req_dep_code} </Text>
                                                      <Text style={styles.txt_resulf_search_1}>đến </Text><Text
                                                      style={styles.txt_resulf_search_1}>{item.pro_dep_code} </Text>
                                                  </View>
                                              </View>
                                              <View style={{flex: 0.1}}>
                                                  <Text style={styles.txt_resulf_search_1}>{item.ticket_id}</Text>
                                                  <Ionicons name="md-star" color='red' size={18}
                                                            style={receiveStyle.levelIcon}/>
                                              </View>
                                          </View>
                                          <View style={{flexDirection: 'row'}}>
                                              <View style={{flex: 0.45, justifyContent: 'flex-end'}}>
                                                  <View style={{flexDirection: 'row'}}>
                                                      <Ionicons name="md-time" size={10}
                                                                style={styles.icon_time}/>
                                                      <Text style={styles.txt_resulf_search_1}>{item.req_date}
                                                          - {item.pro_plan}</Text>
                                                  </View>
                                              </View>
                                              <View style={{flex: 0.35, justifyContent: 'flex-end'}}>
                                                  <Text
                                                      style={styles.txt_resulf_search_1}>{Common.formatPro_dep_code(item.req_status)}</Text>
                                              </View>
                                              <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
                                                  <View style={{flexDirection: 'row'}}>
                                                      <Icon name="send" size={10} style={receiveStyle.senderIcon}/>
                                                      <Text style={styles.txt_resulf_search_1}>{item.req_user}</Text>
                                                  </View>
                                                  <View style={{flexDirection: 'row'}}>
                                                      <Ionicons name="md-contact" size={10}
                                                                style={receiveStyle.senderIcon}/>
                                                      <Text style={styles.txt_resulf_search_1}>{item.pro_user}</Text>
                                                  </View>
                                              </View>
                                          </View>
                                      </TouchableOpacity>
                                  );
                              }}></FlatList>
                </Content>
            </LinearGradient>
        );
    }
}

