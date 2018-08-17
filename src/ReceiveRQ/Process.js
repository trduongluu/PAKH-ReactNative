import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tabs, Tab, TabHeading, ScrollableTab, Item,
        Input, Content, Footer, FooterTab, Picker, Textarea } from 'native-base';
import {} from '../LayoutStyle';
import styles from './styles';
import DataAction from '../apiData';

export default class Process extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerRight: <MaterialIcon name="history" color='white' size={24} style={{marginRight: 15}} 
    onPress={() => navigation.navigate('History')} />,
    headerTitle: 'Xử lý'
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
        isLoadingCap2: true
    };
  }

  renderCap1() {
    items = [];
    for(let item of this.state.nguyennhanCap1){
        items.push(<Picker.Item key={item.id} label={item.causeName} value={item.id} />)
    }
    return items;
  }

  chonCap1(value) {
    this.setState({
        selectedIdCause1: value,
        isCap1Clicked: true,
        isLoadingCap2: true
    })
  }

  renderCap2() {
    DataAction.getNguyenNhanCap2(this.state.selectedIdCause1).then((response) => {
        this.setState({
            nguyennhanCap2: response,
            isLoadingCap2: false
        });
        console.log('cap 2 ne: ' + JSON.stringify(this.state.nguyennhanCap2));
    });
    
    items = [];
    for(let item of this.state.nguyennhanCap2){
        items.push(<Picker.Item key={item.id} label={item.causeName} value={item.id} />)
    }

    return (
        <View style={{marginBottom: 12}}>
            <View style={{flexDirection: 'row'}}>
                <Icon name='ios-paper' style={{fontSize: 12, color: 'white'}}/>
                <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                    Nguyên Nhân Cấp 2
                </Text>
            </View>
            <View style={{borderBottomWidth: 1, paddingBottom: 2}}>
                <Picker
                    // iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.state.selectedIdCause2}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedIdCause2: itemValue})}
                    style={styles.picker}
                    itemTextStyle={{ color: '#A9F8FF', fontSize: 12 }}
                    textStyle={{ color: "#A9F8FF", fontSize: 12 }}
                    itemStyle={{
                        backgroundColor: "#fff",
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
    DataAction.getNguyenNhanCap3(this.state.selectedIdCause2).then((response) => {
        this.setState({nguyennhanCap3: response})
    })
  }

  componentDidMount() {
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
    })
  }

    render() {
      return (
        <Content>
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={{flex: 1}}
            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >

                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
                    <View style={{flex: 2, justifyContent: 'center', marginLeft:20}}>
                        <Text style={{fontWeight:'bold', color:'#A9F8FF', fontSize: 12}}>
                            Người Gửi
                        </Text>
                    </View>
                    <View style={{flex:3, borderLeftWidth: 1, borderLeftColor: '#A9F8FF', paddingLeft:10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='person' style={{fontSize: 12, color:'#A9F8FF', padding: 3}}/>
                            <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}> {this.state.fullname} - Phòng {this.state.departmentCode}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='call' style={{fontSize: 12, color: '#A9F8FF', padding: 3}}/>
                            <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}> Gọi {this.state.phone}</Text>
                        </View>
                    </View>
                </View>

        {/* nguyen nhan dropdown box */}
            <View style={{margin: 12}} >
                <View style={{marginBottom: 12}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-paper' style={{fontSize: 12, color: 'white'}}/>
                        <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                            Nguyên Nhân Cấp 1
                        </Text>
                    </View>
                    <View style={{borderBottomWidth: 1, paddingBottom: 2}}>
                        <Picker
                            // iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selectedIdCause1}
                            onValueChange={(itemValue, itemIndex) => this.chonCap1(itemValue)}
                            style={styles.picker}
                            itemTextStyle={{ color: '#A9F8FF', fontSize: 12 }}
                            textStyle={{ color: "#A9F8FF", fontSize: 12 }}
                            itemStyle={{
                                backgroundColor: "#fff",
                                paddingLeft: 10
                            }}
                        >
                            {this.renderCap1()}
                        </Picker>
                    </View>
                </View>
                {/* cap 2 */}
                    {(this.state.isCap1Clicked) ? this.renderCap2() : null }
                {/* cap 3 */}
                {/* <View style={{marginBottom: 0}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-paper' style={{fontSize: 12, color: 'white'}}/>
                        <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                            Nguyên Nhân Cấp 3
                        </Text>
                    </View>
                    <View style={{borderBottomWidth: 1, paddingBottom: 2}}>
                        <Picker
                            // iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selectedIdCause3}
                            onValueChange={(itemValue, itemIndex) => this.setState({selectedIdCause3: itemValue})}
                            style={styles.picker}
                            itemTextStyle={{ color: '#A9F8FF', fontSize: 12 }}
                            textStyle={{ color: "#A9F8FF", fontSize: 12 }}
                            itemStyle={{
                                backgroundColor: "#fff",
                                paddingLeft: 10
                            }}
                        >
                            {this.renderItem()}
                        </Picker>
                    </View>
                </View> */}
            </View>
            
        {/* Phan noi dung */}
                <View style={{margin: 15, marginBottom: 0}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-paper' style={{fontSize: 12, color: '#fff'}}/>
                        <Text style={{fontWeight:'bold', color:'#fff', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                            Nội Dung Yêu Cầu
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: '#fff', fontSize: 12}} >
                            Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4/2018
                        </Text>
                    </View>
                </View>

                <View style={{margin: 15, marginBottom: 0}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='document' style={{fontSize: 12, color: 'white'}}/>
                        <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                            Nội Dung Xử Lý
                        </Text>
                    </View>
                    <Textarea
                        rowSpan={4} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.textArea}
                    />
                </View>

                <View style={{margin: 15}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='document' style={{fontSize: 12, color: 'white'}}/>
                        <Text style={{fontWeight:'bold', color:'white',fontSize: 12, marginTop: -3, marginLeft: 4}}>
                            Nội Dung Xử Lý Nội Bộ
                        </Text>
                    </View>
                    <Textarea
                        rowSpan={4} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.textArea}
                    />
                </View>
                
        {/* 2 Button bottom */}
                <View style={styles.rowButtonBot}>
                    <View style={styles.centerRow}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text style={styles.textFoot}>Kết Thúc</Text>
                        </Button>
                    </View>
                    <View style={styles.centerRow}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text style={styles.textFoot}>Chuyển Tiếp</Text>
                        </Button>
                    </View>
                </View>

            </LinearGradient>
        </Content>
      );
    }
  }