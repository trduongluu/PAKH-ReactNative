import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Container, Header, Content} from 'native-base'
import styles from "./styles";


export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemDetail: this.props.navigation.state.params.dataDetails
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Chi tiết'
    };

    render() {
        return (
            <Container>
                {/*<StatusBar translucent={true} backgroundColor='transparent'/>
              <View style={styles.view_header}>
                <TouchableOpacity style={{flex: 0.2, justifyContent: 'center'}}
                                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../img/icon_back.png')}
                         style={styles.icon_back}/>
                </TouchableOpacity>
                <View style={{flex: 0.2}}></View>
                <View style={{flex: 0.2, justifyContent: 'center'}}>
                  <Text style={styles.txt_header}>Chi Tiết</Text>
                </View>
                <View style={{flex: 0.4}}></View>
              </View>*/}
                <Content style={{marginHorizontal: 7}}>
                    <View style={styles.view_one}>
                        <View style={styles.view_tinhcuoc}>
                            <Text style={styles.txt_tinhcuoc}>{this.state.itemDetail.req_title}</Text>
                        </View>
                        <View style={styles.view_hethong}>
                            <View style={{flex: 0.2}}></View>
                            <View style={{flex: 0.3}}>
                                <Text style={{fontWeight: 'bold'}}>Hệ Thống</Text>
                            </View>
                            <View style={{flex: 0.1}}></View>
                            <View style={{flex: 0.4}}>
                                <Text style={{}}>{this.state.itemDetail.req_system_code}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_time}>
                        <Text style={styles.txt_time}>Thời gian</Text>
                        <Text style={{flex: 0.6}}>{this.state.itemDetail.req_date}
                            - {this.state.itemDetail.pro_plan}</Text>
                    </View>
                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người
                                    gửi</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <Text style={styles.txt_value_sent}>{this.state.itemDetail.req_user} -
                                    Phòng {this.state.itemDetail.req_dep_code} </Text>
                                <Text style={styles.txt_value_sent}> Gọi: 0954354535</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người
                                    Nhận</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <Text style={styles.txt_value_sent}>{this.state.itemDetail.pro_user} -
                                    Phòng {this.state.itemDetail.pro_dep_code} </Text>
                                <Text style={styles.txt_value_sent}> Gọi: 0954354535</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Nội dung yêu cầu</Text>
                        <Text>{this.state.itemDetail.req_content}</Text>
                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Nội dung Xử lý</Text>
                        <Text>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text>
                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Tệp Đính Kèm</Text>
                        <Text style={{color: '#3a73ff'}}>teptinhkem.docx</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

