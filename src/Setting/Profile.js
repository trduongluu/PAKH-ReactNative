import React, { Component } from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import {Container, Header, Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import DataAction from "../apiData";

const data =[{name: 'Họ tên'},
    {name: 'Username'},
    {name: 'Số điện thoại'},
    {name: 'Đơn vị'},
    {name: 'Email'}
];
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            infoUser: '',
            globUser: ''
        }
    }
    componentWillMount(){
        DataAction.getUser().then((user) => {
            this.setState({ globUser: user });
            DataAction.getUserInfo(this.state.globUser).then((response) => {
                this.setState({
                    infoUser: response,
                })
                {console.log(this.state.infoUser)};
            }).catch((error) => {
                console.log(error)
            })
        })
    }
    setTextProfile = (lab) => {
        if(lab === 'Họ tên'){
            return this.state.infoUser.fullname;
        }
        else if(lab === 'Username'){
            return this.state.infoUser.username
        }
        else if(lab === 'Số điện thoại'){
            return this.state.infoUser.phone
        }
        else if(lab === 'Đơn vị'){
            return this.state.infoUser.departmentCode
        }
        else if(lab === 'Email'){
            return this.state.infoUser.email
        }
    };

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Profile',
        headerTitleStyle: { color: '#fff' }
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={styles.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
              <Content style={{marginHorizontal: 30}}>
                <View style={{marginTop: 20,flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>THÔNG TIN CỦA BẠN</Text>
                </View>
                <View style={{marginTop: 50}}>
                    {data.map((item) => {
                        return(
                            <View style={{flexDirection: 'row', flex: 1, borderBottomWidth:1, borderBottomColor: '#70bdff', paddingVertical: 5, marginTop: 5}}>
                              <Text style={{flex: 0.4,color: '#fff' }}>{item.name}</Text>
                              <Text style={{flex: 0.6,color: '#fff' }}>{this.setTextProfile(item.name)}</Text>
                            </View>
                        );
                    })}
                </View>
              </Content>
            </LinearGradient>
        );
    }
}
