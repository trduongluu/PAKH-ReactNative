import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import {receiveStyle} from '../LayoutStyle';
import Details from './Details'
import Common from "../common/Common";

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataResult: this.props.navigation.state.params.data_2,
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Kết quả'
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={styles.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <StatusBar translucent={true} backgroundColor='transparent'/>
                {/*<View style={styles.view_header}>
                    <TouchableOpacity style={{flex: 0.2, justifyContent: 'center'}}
                                      onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../img/icon_back.png')}
                               style={styles.icon_back}/>
                    </TouchableOpacity>
                    <View style={{flex: 0.2}}></View>
                    <View style={{flex: 0.2, justifyContent: 'center'}}>
                        <Text style={styles.txt_header}>Tìm kiếm</Text>
                    </View>
                    <View style={{flex: 0.4}}></View>
                </View>*/}
                <Content style={{marginHorizontal: 7}}>
                    <FlatList data={this.state.dataResult}
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

