import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Button, Icon, Content, Picker, Textarea } from 'native-base';
import {processStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import Communications from 'react-native-communications';
import {themeUse} from '../themecolor';
// import {themeUse} from '../Setting/Setting';

var today = new Date();
let ngayxl = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear();
var reqUser = '';
var ticketId = '';

export default class Process extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: <MaterialIcon name="history" color={themeUse.inactiveIconBottom} size={24} style={{marginRight: 15}} 
    onPress={() => navigation.navigate('History', {
        reqUser: reqUser,
        ticketId: ticketId
    })} />,
    headerTitle: 'Xử lý',
    // headerTitleStyle: { flex: 1, textAlign: 'center', alignItems: 'center' }
  });

  constructor(props) {
    super(props);
    this.state = {
        selectedIdCause1: '',
        selectedIdCause2: '',
        selectedIdCause3: '',
        ticketId: this.props.navigation.state.params.ticketId,
        reqTitle: this.props.navigation.state.params.reqTitle,
        reqDate: this.props.navigation.state.params.reqDate,
        reqUser: this.props.navigation.state.params.reqUser,
        fullname: '',
        phone: '',
        departmentCode: '',
        nguyennhanCap1: [],
        nguyennhanCap2: [],
        nguyennhanCap3: [],
        isCap1Clicked: false,
        isCap2Clicked: false,
        ndxl: '',
        ndxlNB: '',
        idRqForward: '',
        fwDep: '',
        fwUser: '',
        fwContent: ''
    };
    reqUser = this.props.navigation.state.params.reqUser;
    ticketId = this.props.navigation.state.params.ticketId;
  }

  chonCap1(value) {
    DataAction.getNguyenNhanCap2(value).then((response) => {
        this.setState({
            nguyennhanCap2: response
        });
        if (JSON.stringify(response) !== '[]') {
            this.setState({isCap1Clicked: true})
        }
        console.log('cap 2 ne: ' + this.state.nguyennhanCap2);
    });
    this.setState({
        selectedIdCause1: value
    });
  }

  chonCap2(value) {
    DataAction.getNguyenNhanCap3(value).then((response) => {
        this.setState({
            nguyennhanCap3: response
        });
        if (JSON.stringify(response) !== '[]') {
            this.setState({isCap2Clicked: true})
        }
        console.log('cap 3 ne: ' + this.state.nguyennhanCap3);
    });
    this.setState({
        selectedIdCause2: value
    });
  }

  renderCap1() {
    items = [];
    for(let item of this.state.nguyennhanCap1){
        items.push(<Picker.Item key={item.id} label={item.causeName} value={item.id} />)
    }
    return items;
  }

  renderCap2() {
    items = [];
    for(let item of this.state.nguyennhanCap2){
        items.push(<Picker.Item key={item.id} label={item.causeName} value={item.id} />)
    }

    return (
        <View style={processStyle.pickItemSpace}>
            <View style={{flexDirection: 'row'}}>
                <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                <Text style={processStyle.headlines}>
                    Nguyên Nhân Cấp 2
                </Text>
            </View>
            <View style={processStyle.pickerline}>
                <Picker
                    // iosHeader="Select one"
                    mode="dropdown"
                    placeholder="Select one cause"
                    selectedValue={this.state.selectedIdCause2}
                    onValueChange={(itemValue, itemIndex) => this.chonCap2(itemValue)}
                    style={processStyle.picker}
                    itemTextStyle={{ fontSize: 12 }}
                    textStyle={processStyle.contentText}
                    itemStyle={{
                        paddingLeft: 10
                    }}
                >
                    {items}
                </Picker>
            </View>
        </View>
    );
  }

  renderCap3(){
    items = [];
    for(let item of this.state.nguyennhanCap3){
        items.push(<Picker.Item key={item.id} label={item.causeName} value={item.id} />)
    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                <Text style={processStyle.headlines}>
                    Nguyên Nhân Cấp 3
                </Text>
            </View>
            <View style={processStyle.pickerline}>
                <Picker
                    // iosHeader="Select one"
                    mode="dropdown"
                    placeholder="Select one cause"
                    selectedValue={this.state.selectedIdCause3}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedIdCause3: itemValue})}
                    style={processStyle.picker}
                    itemTextStyle={{ fontSize: 12 }}
                    textStyle={processStyle.contentText}
                    itemStyle={{
                        paddingLeft: 10
                    }}
                >
                    {items}
                </Picker>
            </View>
        </View>
    );
  }

  kethuc() {
    DataAction.getUser().then((value) => {
        DataAction.getUserInfo(value).then((user) => {
            DataAction.putRequest(this.state.ticketId, ngayxl, this.state.ndxl, user.username, user.departmentCode).then((resultPutRQ) => {
                if (this.state.idRqForward != '' && this.state.idRqForward != null) {
                    DataAction.putRqDetail(this.state.idRqForward, this.state.reqDate, user.departmentCode, user.username, ngayxl, this.state.ndxlNB, this.state.ndxl, this.state.selectedIdCause1, this.state.selectedIdCause3).then((resultPutRQD) => {
                        console.log('put RQ: ' + JSON.stringify(resultPutRQ));
                        console.log('put RQDetail: ' + JSON.stringify(resultPutRQD));
                        if (JSON.stringify(resultPutRQ) == 'true' && JSON.stringify(resultPutRQD) == 'true') {
                            Alert.alert('Thành công', 'Xử lý của bạn đã được kết thúc.');
                            this.props.navigation.navigate("ReceiveTopbar");
                        } else {
                            Alert.alert('Thất bại', 'Xử lý của bạn chưa được kết thúc.');
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
                } else {
                    console.log('put RQ: ' + JSON.stringify(resultPutRQ));
                    if (JSON.stringify(resultPutRQ) == 'true') {
                        Alert.alert('Thành công', 'Xử lý của bạn đã được kết thúc.');
                        this.props.navigation.navigate("ReceiveTopbar");
                    } else {
                        Alert.alert('Thất bại', 'Xử lý của bạn chưa được kết thúc.');
                    }
                }
            }).catch((error) => {
                console.log(error)
            });
        }).catch((error) => {
            console.log(error)
        });
    })
  }

  chuyentiep() {
    DataAction.getUser().then((value) => {
        DataAction.getUserInfo(value).then((user) => {
            DataAction.responseRQ(this.state.ticketId, this.state.fwDep, this.state.fwUser, this.state.fwContent, this.state.reqDate, user.departmentCode, user.username, this.state.ndxl, this.state.ndxlNB, this.state.selectedIdCause1, this.state.selectedIdCause3).then((result) => {
                console.log('response: ' + JSON.stringify(result));
                if (JSON.stringify(result) == 'true') {
                    Alert.alert('Thành công', 'Xử lý của bạn đã được chuyển tiếp.');
                    this.props.navigation.navigate("ReceiveTopbar");
                } else {
                    Alert.alert('Thất bại', 'Xử lý của bạn chưa được chuyển tiếp.');
                }
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        });
    })
  }

  componentWillMount() {
    DataAction.getUserInfo(this.state.reqUser).then((response) => {
        this.setState({
            fullname: response.fullname,
            phone: response.phone,
            departmentCode: response.departmentCode
        })
        }).catch((error) => {
        console.log(error)
    });
    DataAction.getNguyenNhanCap1().then((response) => {
        // response.map(cause => {
        //     this.setState({nguyennhanCap1: [...this.state.nguyennhanCap1, cause.causeName]});
        // })
        this.setState({nguyennhanCap1: response})
    }).catch((error) => {
        console.log(error)
    });
    DataAction.getRecentRqDetail(this.state.ticketId).then((response) => {
        this.setState({
            idRqForward: response.id,
            fwDep: response.fw_dep_code,
            fwUser: response.fw_user,
            fwContent: response.fw_content
        })
    }).catch((error) => {
        console.log(error)
    })
  }

    render() {
      return (
        <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={{flex: 1}}
            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
            <Content style={{flex: 1}} >

                <View style={processStyle.topInfoUser}>
                    <View style={processStyle.leftTophead}>
                        <Text style={processStyle.txtHeadtop}>
                            Người Gửi
                        </Text>
                    </View>
                    <View style={processStyle.rightTophead}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='person' type='MaterialIcons' style={processStyle.topheadIcon}/>
                            <Text style={processStyle.topheadText}>{this.state.fullname} - Phòng {this.state.departmentCode}</Text>
                        </View>
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => Communications.phonecall(this.state.phone, true)} >
                            <Icon name='call' type='MaterialIcons' style={processStyle.topheadIcon}/>
                            <Text style={processStyle.topheadText}>Gọi {this.state.phone}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        {/* nguyen nhan dropdown box */}
            <View style={{margin: 12}} >
                <View style={processStyle.pickItemSpace}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                        <Text style={processStyle.headlines}>
                            Nguyên Nhân Cấp 1
                        </Text>
                    </View>
                    <View style={processStyle.pickerline}>
                        <Picker
                            // iosHeader="Select one"
                            mode="dropdown"
                            placeholder="Select one cause"
                            selectedValue={this.state.selectedIdCause1}
                            onValueChange={(itemValue, itemIndex) => this.chonCap1(itemValue)}
                            style={processStyle.picker}
                            itemTextStyle={{ fontSize: 12 }}
                            textStyle={processStyle.contentText}
                            itemStyle={{
                                paddingLeft: 10
                            }}
                        >
                            {this.renderCap1()}
                        </Picker>
                    </View>
                </View>
                {/* cap 2 */}
                    { this.state.isCap1Clicked ? this.renderCap2() : null }
                {/* cap 3 */}
                    { this.state.isCap2Clicked ? this.renderCap3() : null }
            </View>
            
        {/* Phan noi dung */}
                <View style={processStyle.viewContent}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='assignment' type='MaterialIcons' style={processStyle.iconContent}/>
                        <Text style={processStyle.headlines}>
                            Nội Dung Yêu Cầu
                        </Text>
                    </View>
                    <View>
                        <Text style={processStyle.contentText} >{this.state.reqTitle}</Text>
                    </View>
                </View>
            {/* noi dung xu ly */}
                <View style={processStyle.viewContent}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='document' style={processStyle.iconContent}/>
                        <Text style={processStyle.headlines}>
                            Nội Dung Xử Lý
                        </Text>
                    </View>
                    <Textarea
                        rowSpan={4} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor={themeUse.placeholdertxtColor}
                        style={processStyle.textArea}
                        onChangeText={ndxl => this.setState({ndxl})}
                    />
                </View>
            {/* noi dung xu ly noi bo */}
                <View style={processStyle.viewContent}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='album' type='MaterialIcons' style={processStyle.iconContent}/>
                        <Text style={processStyle.headlines}>
                            Nội Dung Xử Lý Nội Bộ
                        </Text>
                    </View>
                    <Textarea
                        rowSpan={4} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor={themeUse.placeholdertxtColor}
                        style={processStyle.textArea}
                        onChangeText={ndxlNB => this.setState({ndxlNB})}
                    />
                </View>
                
        {/* 2 Button bottom */}
                <View style={processStyle.rowButtonBot}>
                    <View style={processStyle.centerRow}>
                        <Button
                            style={processStyle.btn}
                            onPress={() => this.kethuc()}
                        >
                            <Text style={processStyle.textFoot}>Kết Thúc</Text>
                        </Button>
                    </View>
                    <View style={processStyle.centerRow}>
                        <Button
                            style={processStyle.btn}
                            onPress={() => this.chuyentiep()}
                        >
                            <Text style={processStyle.textFoot}>Chuyển Tiếp</Text>
                        </Button>
                    </View>
                </View>

            </Content>
        </LinearGradient>
      );
    }
  }