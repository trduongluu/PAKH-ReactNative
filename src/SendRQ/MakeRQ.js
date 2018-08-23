import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList,Alert} from 'react-native';
import {receiveStyle} from '../LayoutStyle';
import LinearGradient from 'react-native-linear-gradient';
import {DocumentPicker, DocumentPickerUtil} from 'react-native-document-picker';
import {
    Button,
    Icon,
    Item,
    Input,
    Content,
    Picker,
    Form, Textarea, Label
} from 'native-base';
import common from "../common/Common";
import styles from './styles';
import Send from './Send'
import DataAction from '../apiData';

export default class MakeRQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            globUser: '',               // ten nguoi dung
            arrSystemCode: [],          // danh sách hệ thống
            arrRequestParent: [],             //danh sach yeu cau cap cha
            arrRequestChild: [],           //danh sach yeu cau cap con
            selected_level: "",     // chọn level
            selected_system: "",        //chọn hệ thống
            selected_request: "",   // chọn loai request
            title: '',                  // tiêu đề
            content_request: '',        // nội dung yêu cầu
            file_dir: '',               // đường dẫn file
            infoUser: '',           //
            selected_request_child: '', //yeu cau con
            idRequestParent: ''
        };
    }

// danh sách hệ thống
    componentWillMount() {
        DataAction.getUser().then((user) => {
            this.setState({globUser: user});
            console.log('Tao yeu cau = ' + this.state.globUser);
            DataAction.getUserInfo(this.state.globUser).then((objInfo) => {
                this.setState({infoUser: objInfo})
                DataAction.getReqSystemCode(this.state.infoUser.departmentCode).then((obj) => {
                    this.setState({arrSystemCode: obj})
                    if(this.state.arrSystemCode.length > 0){

                        this.state.arrSystemCode.map((item, i) => {
                            if(i === 0){
                                DataAction.getRequestTypesParent(this.state.infoUser.departmentCode, item.request_code,this.state.globUser).then((objabc) => {
                                    this.setState({arrRequestParent: objabc})
                                }).catch((error)=>{
                                    return ''
                                })
                            }
                        })

                    }
                }).catch((error) => {
                    return ''
                })
            }).catch((error) => {
                return ''
            })
        })
    }

    // thay đổi mức đọ request
    onValueChange_level(value: string) {
        this.setState({
            selected_level: value,
        });
    }

    //thay đổi hệ thống
    onValueChange_system(value: string) {
        this.setState({
            selected_system: value
        });
          DataAction.getRequestTypesParent(this.state.infoUser.departmentCode, value,this.state.globUser).then((obj) => {
              this.setState({arrRequestParent: obj});
          }).catch((error)=>{
              return ''
          })
       /* DataAction.getRequestTypesParent("KT", "TDH_VP", "ADMIN").then((obj) => {
            this.setState({arrRequestParent: obj});
        }).catch((error) => {
            return ''
        })*/
    }

    //thay đổi cấp yêu cầu
    onValueChange_request(value: string) {
        this.setState({
            selected_request: value
        });
        this.state.arrRequestParent.map((item) =>{
            if(item.request_code === value){
                DataAction.getRequestTypesChild(this.state.infoUser.departmentCode, this.state.selected_system,item.id).then((obj) => {
                    this.setState({arrRequestChild: obj});
                }).catch((error) => {
                    return ''
                })
            }else {
                this.setState({arrRequestChild: []});
            }
        })
    }

    onValueChange_request_child(value: string) {
        this.setState({
            selected_request_child: value
        });
    }

// chọn file
    _chooseFile = () => {
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()]

        }, (error, res) => {
            // Android
            if (res === null) {
                this.setState({file_dir: ''})
            }
            else {
                this.setState({file_dir: res.uri})
            }
        });
    };
// tạo yêu cầu mới
    insertRequest = async () => {
        console.log(this.state.title + " " + this.state.content_request )
        if(this.state.title !== '' && this.state.content_request !== ''){
            DataAction.postRequest(this.state.infoUser.departmentCode, this.state.infoUser.username, this.state.title, this.state.selected_level, this.state.selected_system, this.state.selected_request, this.state.content_request, this.state.file_dir).then((obj) => {
                this.setState({insertResult: obj})
                if (this.state.insertResult === true) {
                    Alert.alert(
                        'Tạo yêu cầu thành công',
                        '',
                        [
                            {text: 'OK'},
                        ],
                        {cancelable: false}
                    )
                }
                else {
                    Alert.alert(
                        'FAIL',
                        '',
                        [
                            {text: 'OK'},
                        ],
                        {cancelable: false}
                    )
                }
            })
        }
        else {
            Alert.alert(
                'Nhập đầy đủ tiêu đề và nội dung yêu cầu',
                '',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            )
        }

    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Tạo yêu cầu',
        headerTitleStyle: {color: '#fff'}
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content>
                    <View style={{margin: 15}}>
                        <Item floatingLabel
                              style={{
                                  borderBottomWidth: 1,
                                  borderColor: 'white'
                              }}
                        >
                            <Label style={{paddingBottom: 5, fontSize: 20, color: '#bfd1e3'}}>
                                TIÊU ĐỀ
                            </Label>
                            <Input style={{color: 'white'}} onChangeText={(text) => this.setState({title: text})}/>
                        </Item>


                        <Form style={styles.bo}>
                            <Text style={{color: '#bfd1e3'}}>MỨC ĐỘ</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_level}
                                onValueChange={this.onValueChange_level.bind(this)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Bình thường" value="BINH_THUONG"/>
                                <Picker.Item label="Khẩn cấp" value="KHAN_CAP"/>
                            </Picker>
                        </Form>

                        <Form style={styles.bo}>
                            <Text style={{color: '#bfd1e3'}}>HỆ THỐNG</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_system}
                                onValueChange={this.onValueChange_system.bind(this)}
                                style={styles.picker}
                            >
                                {this.state.arrSystemCode.map((item) => {
                                    return (
                                        <Picker.Item label={item.systemName} value={item.systemCode}/>
                                    );
                                })}

                            </Picker>
                        </Form>
                        {this.state.arrRequestParent.length !== 0 ? <Form style={styles.bo}>
                            <Text style={{color: '#bfd1e3'}}>YÊU CẦU CHA</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_request}
                                onValueChange={this.onValueChange_request.bind(this)}
                                style={styles.picker}
                            >
                                <Picker.Item label="ALL" value="111"/>
                                {this.state.arrRequestParent.map((item) => {
                                    return (
                                        <Picker.Item label={item.request_name} value={item.request_code}/>
                                    );
                                })}
                            </Picker>
                        </Form> : <View></View>}
                        {this.state.arrRequestChild.length !== 0 ? <Form style={styles.bo}>
                            <Text style={{color: '#bfd1e3'}}>YÊU CẦU CON</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_request_child}
                                onValueChange={this.onValueChange_request_child.bind(this)}
                                style={styles.picker}
                            >
                                {this.state.arrRequestChild.map((item) => {
                                    return (
                                        <Picker.Item label={item.request_name} value={item.request_code}/>
                                    );
                                })}
                            </Picker>
                        </Form> : <View></View>}

                    </View>

                    <View style={{alignItems: 'center', marginTop: 30}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Nội Dung Yêu Cầu</Text>
                    </View>
                    <Textarea
                        rowSpan={5} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        style={styles.textArea}
                        onChangeText={(text) => this.setState({content_request: text})}
                    />


                    <View style={styles.centerCol}>
                        <View>
                            <Button transparent onPress={() => this._chooseFile()}>
                                <Icon name='attach' style={{color: 'blue'}}/>
                            </Button>
                        </View>
                        <View style={{width: '30%'}}>
                            <Button
                                style={styles.btnF1}
                                onPress={() => this.insertRequest()}
                            >
                                <Text style={styles.textFoot}>Gửi Yêu Cầu</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={{height: 30}}/>

                </Content>
            </LinearGradient>
        );
    }
}