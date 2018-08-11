import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import SelectMultiple from 'react-native-select-multiple'
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker'

import Results from './Results'
import DataAction from "../apiData";

var {height, width} = Dimensions.get('window');

const data_search = ['Mã', 'Đơn vị xử lý', 'Người xử lý', 'Trạng thái', 'Đơn vị gửi'];
const data_search_1 = [
    {lable: 'Tiêu đề'},
    {lable: 'Hệ thống'},
    {lable: 'Thời điểm gửi'},
    {lable: 'Hạn hoàn thành'},
    {lable: 'Người gửi'}];

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            color: '',
            selectedFruits: [],         //thêm lựa chọn tìm kiếm
            dataResultRequest: [],      //data kết quả tìm kiếm yêu cầu

            start_date: '18-01-2018',     //ngày bắt đầu
            end_date: new Date(),      //ngày kết thúc
            req_title: '',             //tiêu đề
            req_system: '',
            req_dep_code: '',       //đơn vị gửi
            req_user: '',           //người gửi
            ticketid: '',            //mã
            pro_dep_code: '',      //dơn vị xử lý
            req_status: '',         //trạng thái
            pro_user: '',           //người xử lý
            dataDepartCode: [],
        };
    }

    // chọn thêm trường tìm kiếm
    onSelectionsChange = (selectedFruits) => {
        this.setState({selectedFruits})
    };

    // Đóng mở Modal
    _toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    // xóa trường tìm kiếm
    onDeleteItem = (index) => {
        let newTaskList = this.state.selectedFruits.filter((item, i) => i != index);
        this.setState({selectedFruits: newTaskList});
    }

    //chức năng tìm kiếm
    _Search = () => {
        DataAction.getSearchRequest(this.state.start_date, this.state.end_date, this.state.req_title, this.state.req_dep_code, this.state.req_system, this.state.req_user, this.state.pro_dep_code, this.state.pro_user, this.state.ticketid, this.state.req_status).then((obj) => {
            this.setState({dataResultRequest: obj})
        }).catch((error) => {
            this.state({dataResultRequest: ''})
        })
    };

    //chọn đơn vị xử lý, đơn vị gửi
    chooseDepartCode = () =>{
        DataAction.getListDepartCode().then((obj) => {
            this.state({dataDepartCode: obj});
        }).catch((error) => {
            this.state({dataDepartCode: ''});
        })
    };

    // Lấy thông tin khi người dùng nhập thông tin
    setTextSearch = (lableText, valueText) => {
        if (lableText === 'Tiêu đề') {
            this.setState({req_title: valueText})
        }
        else if (lableText === 'Thời điểm gửi') {
            this.setState({start_date: valueText})
        }
        else if (lableText === 'Hạn hoàn thành') {
            this.setState({end_date: valueText})
        }
        else if (lableText === 'Hệ thống') {
            this.setState({req_system: valueText})
        }
        else if (lableText === 'Người gửi') {
            this.setState({req_user: valueText})
        }
        else if (lableText === 'Mã') {
            this.setState({ticketid: valueText})
        }
        else if (lableText === 'Đơn vị xử lý') {
            this.setState({pro_dep_code: valueText})
        }
        else if (lableText === 'Người xử lý') {
            this.setState({pro_user: valueText})
        }
        else if (lableText === 'Trạng thái') {
            this.setState({req_status: valueText})
        }
        else if (lableText === 'Đơn vị gửi') {
            this.setState({req_dep_code: valueText})
        }
    };

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')}/>
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={styles.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <TouchableOpacity style={styles.view_icon_add}
                                  onPress={this._toggleModal}>
                    <Image source={require('../img/icon_add_white.png')} style={{width: 35, height: 35}}/>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible} backdropOpacity='0.7'>
                    <View style={styles.view_modal}>
                        <SelectMultiple
                            items={data_search}
                            selectedItems={this.state.selectedFruits}
                            onSelectionsChange={this.onSelectionsChange}/>
                        <View style={styles.view_ok}>
                            <TouchableOpacity onPress={this._toggleModal} style={styles.touchable_ok}>
                                <Text style={styles.txt_btn_search}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={{height: '50%', width: '100%'}}>
                    <ScrollView style={{marginTop: 30}}>
                        {
                            data_search_1.map((item, i) => {
                                if (item.lable === 'Thời điểm gửi') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={styles.input_search}>
                                                <DatePicker
                                                    style={{height: 30, justifyContent:'center'}}
                                                    //date={this.state.start_date}
                                                    date={this.state.start_date}
                                                    mode="date"
                                                    placeholder="thời điểm gửi"
                                                    format="DD-MM-YYYY"
                                                    minDate="1990-01-01"
                                                    maxDate="2100-12-31"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        dateInput: {
                                                            marginLeft: 36,
                                                            borderWidth: 0,
                                                        },
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 5,
                                                            height: 22,
                                                            width: 22,
                                                            marginLeft: 0,
                                                        }
                                                    }}
                                                    onDateChange={(date) => {this.setState({start_date: date})}}
                                                />
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else if (item.lable === 'Hạn hoàn thành') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={styles.input_search}>
                                                <DatePicker
                                                    style={{height: 30, justifyContent:'center'}}
                                                    date={this.state.end_date}
                                                    mode="date"
                                                    placeholder="Hạn hoàn thành"
                                                    format="DD-MM-YYYY"
                                                    minDate="2016-05-01"
                                                    maxDate="2016-06-01"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 5,
                                                            height: 22,
                                                            width: 22,
                                                            marginLeft: 0,
                                                        },
                                                        dateInput: {
                                                            marginLeft: 36,
                                                            borderWidth: 0,
                                                        }
                                                    }}
                                                    onDateChange={(date) => {this.setState({end_date: date})}}
                                                />
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={styles.input_search}>
                                                <TextInput
                                                    style={styles.txt_input_search}
                                                    underlineColorAndroid="transparent"
                                                    placeholderTextColor='#bbbdcd'
                                                    placeholder={item.lable}
                                                    onChangeText={(text) => {
                                                        this.setTextSearch(item.lable, text)
                                                    }}
                                                />
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                            })
                        }
                        {
                            this.state.selectedFruits.map((item, i) => {
                                if (i === this.state.selectedFruits.length - 1) {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={[styles.input_search]}>
                                                <TextInput
                                                    style={styles.txt_input_search}
                                                    underlineColorAndroid="transparent"
                                                    placeholderTextColor='#bbbdcd'
                                                    placeholder={item.value}
                                                    onChangeText={(text) => {
                                                        this.setTextSearch(item.value, text)
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity style={{flex: 0.2, marginTop: 15}}
                                                              onPress={() => this.onDeleteItem(this.state.selectedFruits.length - 1)}>
                                                <Image source={require('../img/icon_minus_black.png')}
                                                       style={styles.view_icon_minus}/>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                                return (
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 0.2}}></View>
                                        <View style={styles.input_search}>
                                            <TextInput
                                                style={styles.txt_input_search}
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor='#bbbdcd'
                                                placeholder={item.value}
                                                onChangeText={(text) => {
                                                    this.setTextSearch(item.value, text)
                                                }}
                                            />
                                        </View>
                                        <View style={{flex: 0.2}}></View>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                {this._Search()}
                <View style={styles.view_btn_search}>
                    <TouchableOpacity
                        style={styles.btn_search}
                        onPress={() => this.props.navigation.navigate('Results', {data_2: this.state.dataResultRequest})}>
                        <Text style={styles.txt_btn_search}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

