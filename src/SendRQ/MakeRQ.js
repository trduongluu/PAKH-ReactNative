import React, {Component} from 'react';
import {View, Text, Image, FlatList, Alert} from 'react-native';
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
import {sendStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import {themeUse} from '../themecolor';
// import {themeUse} from '../Setting/Setting';

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
    onValueChange_level(value) {
        this.setState({
            selected_level: value,
        });
    }

    //thay đổi hệ thống
    onValueChange_system(value) {
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
    onValueChange_request(value) {
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

    onValueChange_request_child(value) {
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
        headerTitle: 'Tạo yêu cầu'
    };

    render() {
        return (
            <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content>
                    <View style={{margin: 15}}>
                        <Item floatingLabel
                              style={{
                                  borderBottomWidth: 1,
                                  borderColor: themeUse.textColor
                              }}
                        >
                            <Label style={{paddingBottom: 5, fontSize: 20, color: themeUse.textColor}}>
                                TIÊU ĐỀ
                            </Label>
                            <Input style={{color: themeUse.textColor}} onChangeText={(text) => this.setState({title: text})}/>
                        </Item>


                        <Form style={sendStyle.bo}>
                            <Text style={{color: themeUse.textColor}}>MỨC ĐỘ</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_level}
                                onValueChange={this.onValueChange_level.bind(this)}
                                style={sendStyle.picker}
                            >
                                <Picker.Item label="Bình thường" value="BINH_THUONG"/>
                                <Picker.Item label="Khẩn cấp" value="KHAN_CAP"/>
                            </Picker>
                        </Form>

                        <Form style={sendStyle.bo}>
                            <Text style={{color: themeUse.textColor}}>HỆ THỐNG</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_system}
                                onValueChange={this.onValueChange_system.bind(this)}
                                style={sendStyle.picker}
                            >
                                {this.state.arrSystemCode.map((item) => {
                                    return (
                                        <Picker.Item label={item.systemName} value={item.systemCode}/>
                                    );
                                })}

                            </Picker>
                        </Form>
                        {this.state.arrRequestParent.length !== 0 ? <Form style={sendStyle.bo}>
                            <Text style={{color: themeUse.textColor}}>YÊU CẦU CHA</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_request}
                                onValueChange={this.onValueChange_request.bind(this)}
                                style={sendStyle.picker}
                            >
                                <Picker.Item label="ALL" value="111"/>
                                {this.state.arrRequestParent.map((item) => {
                                    return (
                                        <Picker.Item label={item.request_name} value={item.request_code}/>
                                    );
                                })}
                            </Picker>
                        </Form> : <View></View>}
                        {this.state.arrRequestChild.length !== 0 ? <Form style={sendStyle.bo}>
                            <Text style={{color: themeUse.textColor}}>YÊU CẦU CON</Text>

                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected_request_child}
                                onValueChange={this.onValueChange_request_child.bind(this)}
                                style={sendStyle.picker}
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
                        <Text style={{color: themeUse.textColor, fontWeight: 'bold'}}>Nội Dung Yêu Cầu</Text>
                    </View>
                    <Textarea
                        rowSpan={5} bordered
                        placeholder="Nhập nội dung yêu cầu..."
                        placeholderTextColor={themeUse.placeholdertxtColor}
                        style={sendStyle.textArea}
                        onChangeText={(text) => this.setState({content_request: text})}
                    />


                    <View style={sendStyle.centerCol}>
                        <View>
                            <Button transparent onPress={() => this._chooseFile()}>
                                <Icon name='attach' style={{color: themeUse.primaryColor}}/>
                            </Button>
                        </View>
                        <View style={{width: '30%'}}>
                            <Button
                                style={sendStyle.btnF1}
                                onPress={() => {this.insertRequest(), this.props.navigation.navigate('SendTopbar')}}
                            >
                                <Text style={sendStyle.textFoot}>Gửi Yêu Cầu</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={{height: 30}}/>

                </Content>
            </LinearGradient>
        );
    }
}