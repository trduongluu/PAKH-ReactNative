import React, { Component } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            pass: '',
            globUser: ''
        }
    }
    
    login(user, pw){
        this.passwordInput.setNativeProps({text: ''});
        if(user == '' || pw == ''){
            Alert.alert('Lỗi', 'Hãy nhập thông tin đăng nhập!');
        }
        else {
            DataAction.userLogin(user, pw).then((response) => {
                if(response.password == null) {
                    Alert.alert('Lỗi', 'Sai Username hoặc Password!');
                } else if(response.password != '') {
                    DataAction.storeUser(response.username);
                    this.props.navigation.navigate('BottomTabNav');
                }
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    componentWillMount(){
        // Check user session info
        DataAction.getUser().then((value) => {
            this.setState({ globUser: value });
            console.log('global = ' + this.state.globUser);
        })
    }

    render() {
      // Check user chưa logout thì skip login action khi mở app lần 2 trở đi
      if (this.state.globUser !== '' && this.state.globUser !== null) {
          this.props.navigation.navigate('BottomTabNav');
      }

      return (
        <LinearGradient colors={['#0057AA', '#A9F8FF']} style={loginStyle.bground}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
        <KeyboardAvoidingView style={loginStyle.bground} behavior='padding' >
          
          <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />

          <View style={loginStyle.logoContainer} >
            <Image style={loginStyle.logoTop} source={require('../img/logo-mobifone-white.png')} />
          </View>

          <View style={loginStyle.loginForm} >
            <View style={loginStyle.lineArea} >
                <Icon style={loginStyle.iconForm} name="user" size={18} color="#fff"/>
                <TextInput
                placeholder='Username' placeholderTextColor='rgba(255,255,255,0.7)'
                style={loginStyle.input} returnKeyType='next'
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCapitalize='none' autoCorrect={false} keyboardType='email-address'
                underlineColorAndroid='transparent'
                onChangeText={username => this.setState({username})} />
            </View>
            <View style={loginStyle.lineArea} >
                <Icon style={loginStyle.iconForm} name="key" size={18} color="#fff"/>
                <TextInput placeholder='Password' placeholderTextColor='rgba(255,255,255,0.7)'
                style={loginStyle.input}  secureTextEntry returnKeyType='go'
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid='transparent'
                onChangeText={pass => this.setState({pass})} />
            </View>
            
            <TouchableOpacity style={loginStyle.buttonLogin}
            onPress={() => {this.login(this.state.username, this.state.pass)}} >
                <Text style={loginStyle.buttonText} >Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={loginStyle.bottomText}>Tiếp nhận và quản lý yêu cầu{'\n'}Hỗ trợ hệ thống công nghệ thông tin</Text>
          </View>

        </KeyboardAvoidingView>
        </LinearGradient>
      );
    }
  }