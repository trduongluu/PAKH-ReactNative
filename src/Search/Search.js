import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import SelectMultiple from 'react-native-select-multiple'
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker'
import {Form, Picker} from "native-base";

import Results from './Results'
import DataAction from "../apiData";

var {height, width} = Dimensions.get('window');

const data_search = ['Mã', 'Đơn vị xử lý', 'Người xử lý', 'Trạng thái'];
const data_search_1 = [
    {lable: 'Tiêu đề'},
    {lable: 'Hệ thống'},
    {lable: 'Thời điểm gửi'},
    {lable: 'Hạn hoàn thành'},
    {lable: 'Đơn vị gửi'},
    {lable: 'Người gửi'}];

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            color: '',
            selectedFruits: [],         //thêm lựa chọn tìm kiếm

            start_date: '18-01-2018',     //ngày bắt đầu
            end_date: new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear(),      //ngày kết thúc
            req_title: '',             //tiêu đề
            req_system: '',
            req_dep_code: '',       //đơn vị gửi
            req_user: '',           //người gửi
            ticketid: '',            //mã
            pro_dep_code: '',      //dơn vị xử lý
            req_status: '',         //trạng thái
            pro_user: '',           //người xử lý
            dataDepartCode: [],     //danh sách đơn vị
            dataStaff: [],          // danh sach nhan vien
            dataStaff_pro: [],
            globUser: '',
            infoUser: '',           //Thong tin người dùng
            arrSystemCode: [],          // danh sách hệ thống
        };
    }

    // danh sách hệ thống
    componentWillMount() {
        DataAction.getUser().then((user) => {
            this.setState({globUser: user});
            DataAction.getUserInfo(this.state.globUser).then((objInfo) => {
                this.setState({infoUser: objInfo})
                DataAction.getReqSystemCode(this.state.infoUser.departmentCode).then((obj) => {
                    this.setState({arrSystemCode: obj})

                }).catch((error) => {
                    return ''
                })
            }).catch((error) => {
                return ''
            })
        }).catch((error) => {
            return ''
        })
        //danh sach phong ban
        DataAction.getListDepartCode().then((objw) => {
            this.setState({dataDepartCode: objw});
        }).catch((error) => {
            return ''
        })
    }

// thay đổi hệ thống
    onValueChange_system(value: string) {
        this.setState({
            req_system: value,
        });
    }

    //thay đổi đơn vị gửi
    onValueChange_DepartCode(value: string) {
        this.setState({
            req_dep_code: value,
        });
        if (value === "") {
            this.setState({
                dataStaff: []
            })
        }
        else {
            DataAction.getStaffDepartment(value).then((obj) => {
                this.setState({
                    dataStaff: obj
                })
            }).catch((error) => {
                return ''
            })
        }
    }

    // Thay đổi người gửi
    onValueChange_Rep_User(value: string) {
        this.setState({
            req_user: value,
        });
    }

    //Thay đổi đơn vị xử lý
    onValueChange_pro_dep_code(value: string) {
        this.setState({
            pro_dep_code: value,
        });
        if (value === "") {
            this.setState({
                dataStaff_pro: []
            })
        }
        else {
            DataAction.getStaffDepartment(value).then((obj) => {
                this.setState({
                    dataStaff_pro: obj
                })
            }).catch((error) => {
                return ''
            })
        }
    }

    //Thay đổi người xuử lí
    onValueChange_pro_user(value: string) {
        this.setState({
            pro_user: value,
        });
    }

    //Thay đổi trạng thái
    onValueChange_req_status(value: string) {
        this.setState({
            req_status: value,
        });
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
    // update state khi người dùng nhập thông tin
    setTextSearch = (lableText, valueText) => {
        if (lableText === 'Tiêu đề') {
            this.setState({req_title: valueText})
        }
        else if (lableText === 'Mã') {
            this.setState({ticketid: valueText})
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
                <Modal isVisible={this.state.isModalVisible}>
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
                <View style={{height: '60%', width: '100%'}}>
                    <ScrollView style={{marginTop: 30}}>
                        {
                            data_search_1.map((item, i) => {
                                if (item.lable === 'Thời điểm gửi') {
                                    return (

                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <DatePicker
                                                        style={{
                                                            height: 30,
                                                            justifyContent: 'center',
                                                        }}
                                                        //date={this.state.start_date}
                                                        date={this.state.start_date}
                                                        mode="date"
                                                        placeholder="thời điểm gửi"
                                                        format="DD-MM-YYYY"
                                                        minDate="2000-01-01"
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
                                                        onDateChange={(date) => {
                                                            this.setState({start_date: date})
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else if (item.lable === 'Hạn hoàn thành') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <DatePicker
                                                        style={{height: 30, justifyContent: 'center'}}
                                                        date={this.state.end_date}
                                                        mode="date"
                                                        placeholder="Hạn hoàn thành"
                                                        format="DD-MM-YYYY"
                                                        minDate="2000-01-01"
                                                        maxDate="2100-12-31"
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
                                                        onDateChange={(date) => {
                                                            this.setState({end_date: date})
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>

                                    );
                                }
                                else if (item.lable === 'Hệ thống') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <Form style={{
                                                        height: 30, flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Picker
                                                            mode="dropdown"
                                                            selectedValue={this.state.req_system}
                                                            onValueChange={this.onValueChange_system.bind(this)}
                                                            style={[styles.picker]}
                                                        >
                                                            <Picker.Item label="Tất cả" value=""/>
                                                            {this.state.arrSystemCode.map((item) => {
                                                                return (
                                                                    <Picker.Item label={item.systemName}
                                                                                 value={item.systemCode}/>
                                                                );
                                                            })}
                                                        </Picker>
                                                    </Form>
                                                </View>
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else if (item.lable === 'Đơn vị gửi') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <Form style={{
                                                        height: 30, flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Picker

                                                            mode="dropdown"
                                                            selectedValue={this.state.req_dep_code}
                                                            onValueChange={this.onValueChange_DepartCode.bind(this)}
                                                            style={[styles.picker]}
                                                        >
                                                            <Picker.Item label="Tất cả" value=""/>
                                                            {this.state.dataDepartCode.map((item) => {
                                                                return (
                                                                    <Picker.Item label={item.departmentName}
                                                                                 value={item.departmentCode}/>
                                                                );
                                                            })}
                                                        </Picker>
                                                    </Form>
                                                </View>
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else if (item.lable === 'Người gửi') {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <Form style={{
                                                        height: 30, flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Picker

                                                            mode="dropdown"
                                                            selectedValue={this.state.req_user}
                                                            onValueChange={this.onValueChange_Rep_User.bind(this)}
                                                            style={[styles.picker]}
                                                        >
                                                            <Picker.Item label="Tất cả" value=""/>
                                                            {this.state.dataStaff.map((item) => {
                                                                return (
                                                                    <Picker.Item label={item.fullname}
                                                                                 value={item.username}/>
                                                                );
                                                            })}
                                                        </Picker>
                                                    </Form>
                                                </View>
                                            </View>
                                            <View style={{flex: 0.2}}></View>
                                        </View>
                                    );
                                }
                                else {
                                    return (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 0.2}}></View>
                                            <View style={{flex: 0.6}}>
                                                <Text style={[styles.txt_value_sent]}>{item.lable}:</Text>
                                                <View style={styles.input_search}>
                                                    <TextInput
                                                        style={styles.txt_input_search}
                                                        underlineColorAndroid="transparent"
                                                        placeholderTextColor='rgba(255,255,255,0.7)'
                                                        placeholder={item.lable}
                                                        onChangeText={(text) => {
                                                            this.setTextSearch(item.lable, text)
                                                        }}
                                                    />
                                                </View>
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
                                    if (item.value === 'Mã') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}:</Text>
                                                    <View style={[styles.input_search]}>
                                                        <TextInput
                                                            style={styles.txt_input_search}
                                                            underlineColorAndroid="transparent"
                                                            placeholderTextColor='rgba(255,255,255,0.7)'
                                                            placeholder={item.value}
                                                            onChangeText={(text) => {
                                                                this.setTextSearch(item.value, text)
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{flex: 0.2, marginTop: 15}}
                                                                  onPress={() => this.onDeleteItem(this.state.selectedFruits.length - 1)}>
                                                    <Image source={require('../img/icon_minus_black.png')}
                                                           style={styles.view_icon_minus}/>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                    else if (item.value === 'Đơn vị xử lý') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}:</Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker

                                                                mode="dropdown"
                                                                selectedValue={this.state.pro_dep_code}
                                                                onValueChange={this.onValueChange_pro_dep_code.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                {this.state.dataDepartCode.map((item) => {
                                                                    return (
                                                                        <Picker.Item label={item.departmentName}
                                                                                     value={item.departmentCode}/>
                                                                    );
                                                                })}
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{flex: 0.2, marginTop: 15}}
                                                                  onPress={() => this.onDeleteItem(this.state.selectedFruits.length - 1)}>
                                                    <Image source={require('../img/icon_minus_black.png')}
                                                           style={styles.view_icon_minus}/>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }
                                    else if (item.value === 'Người xử lý') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}:</Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker

                                                                mode="dropdown"
                                                                selectedValue={this.state.pro_user}
                                                                onValueChange={this.onValueChange_pro_user.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                {this.state.dataStaff_pro.map((item) => {
                                                                    return (
                                                                        <Picker.Item label={item.fullname}
                                                                                     value={item.username}/>
                                                                    );
                                                                })}
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{flex: 0.2, marginTop: 15}}
                                                                  onPress={() => this.onDeleteItem(this.state.selectedFruits.length - 1)}>
                                                    <Image source={require('../img/icon_minus_black.png')}
                                                           style={styles.view_icon_minus}/>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }

                                    else if (item.value === 'Trạng thái') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}: </Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker
                                                                mode="dropdown"
                                                                selectedValue={this.state.req_status}
                                                                onValueChange={this.onValueChange_req_status.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                <Picker.Item label="Phân công xử lí"
                                                                             value="PHAN_CONG_XU_LY"/>
                                                                <Picker.Item label="Đã xử lý" value="DA_XU_LY"/>
                                                                <Picker.Item label="Đang xử lý" value="DANG_XU_LY"/>
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{flex: 0.2, marginTop: 15}}
                                                                  onPress={() => this.onDeleteItem(this.state.selectedFruits.length - 1)}>
                                                    <Image source={require('../img/icon_minus_black.png')}
                                                           style={styles.view_icon_minus}/>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }

                                }
                                else {
                                    if (item.value === 'Mã') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}:</Text>
                                                    <View style={[styles.input_search]}>
                                                        <TextInput
                                                            style={styles.txt_input_search}
                                                            underlineColorAndroid="transparent"
                                                            placeholderTextColor='rgba(255,255,255,0.7)'
                                                            placeholder={item.value}
                                                            onChangeText={(text) => {
                                                                this.setTextSearch(item.value, text)
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }
                                    else if (item.value === 'Đơn vị xử lý') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}</Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker

                                                                mode="dropdown"
                                                                selectedValue={this.state.pro_dep_code}
                                                                onValueChange={this.onValueChange_pro_dep_code.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                {this.state.dataDepartCode.map((item) => {
                                                                    return (
                                                                        <Picker.Item label={item.departmentName}
                                                                                     value={item.departmentCode}/>
                                                                    );
                                                                })}
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <View style={{flex: 0.2}}></View>
                                            </View>
                                        );
                                    }
                                    else if (item.value === 'Người xử lý') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}</Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker

                                                                mode="dropdown"
                                                                selectedValue={this.state.pro_user}
                                                                onValueChange={this.onValueChange_pro_user.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                {this.state.dataStaff_pro.map((item) => {
                                                                    return (
                                                                        <Picker.Item label={item.fullname}
                                                                                     value={item.username}/>
                                                                    );
                                                                })}
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <View style={{flex: 0.2}}></View>
                                            </View>

                                        );
                                    }

                                    else if (item.value === 'Trạng thái') {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 0.2}}></View>
                                                <View style={{flex: 0.6}}>
                                                    <Text style={[styles.txt_value_sent]}>{item.value}</Text>
                                                    <View style={styles.input_search}>
                                                        <Form style={{
                                                            height: 30, flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Picker
                                                                mode="dropdown"
                                                                selectedValue={this.state.req_status}
                                                                onValueChange={this.onValueChange_req_status.bind(this)}
                                                                style={[styles.picker]}
                                                            >
                                                                <Picker.Item label="Tất cả" value=""/>
                                                                <Picker.Item label="Phân công xử lí"
                                                                             value="PHAN_CONG_XU_LY"/>
                                                                <Picker.Item label="Đã xử lý" value="DA_XU_LY"/>
                                                                <Picker.Item label="Đang xử lý" value="DANG_XU_LY"/>
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </View>
                                                <View style={{flex: 0.2}}></View>
                                            </View>
                                        );
                                    }


                                }
                                return (
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 0.2}}></View>
                                        <View style={{flex: 0.6}}>
                                            <Text style={[styles.txt_value_sent]}>{item.value}</Text>
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
                                        </View>
                                        <View style={{flex: 0.2}}></View>
                                    </View>


                                );
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.view_btn_search}>
                    <TouchableOpacity
                        style={styles.btn_search}
                        onPress={() => this.props.navigation.navigate('Results', {
                            sd: this.state.start_date,
                            ed: this.state.end_date,
                            rt: this.state.req_title,
                            rdc: this.state.req_dep_code,
                            rs: this.state.req_system,
                            ru: this.state.req_user,
                            pdc: this.state.pro_dep_code,
                            pu: this.state.pro_user,
                            tick: this.state.ticketid,
                            rstatus: this.state.req_status
                        })}>
                        <Text style={styles.txt_btn_search}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

