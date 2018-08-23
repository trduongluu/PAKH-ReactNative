import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Body, Container, Content, Icon } from 'native-base';
import DataAction from '../apiData';
import {processStyle} from '../LayoutStyle';

export default class History extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0057AA',
    },
    headerTitle: 'Xử lý gần nhất'
  };

  constructor(props) {
      super(props);
      this.state = {
          reqUser: this.props.navigation.state.params.reqUser,
          ticketId: this.props.navigation.state.params.ticketId,
          fullname: '',
          phone: '',
          departmentCode: '',
          ndxl: '',
          ndxlNB: '',
          fwIdCause1: ''
      }
      console.log('params: ' + this.props.navigation.state.params.reqUser);
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
    DataAction.getRecentRqDetail(this.state.ticketId).then((response) => {
        this.setState({
            ndxl: response.return_content,
            ndxlNB: response.return_content_private,
            fwIdCause1: response.dic_cause_id,
            fwIdCause3: response.dic_cause_id_private
        })
    }).catch((error) => {
        console.log(error)
    })
  }

    render() {
      return (
        <Container>
          <LinearGradient colors={['#0057AA', '#A9F8FF']} style={{flex: 1}}
            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
            {/* nguoi gui/chuyen tiep yeu cau */}
              <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
                  <View style={{flex: 2, justifyContent: 'center', marginLeft:20}}>
                      <Text style={{fontWeight:'bold', color:'#A9F8FF', fontSize: 12}}>
                          Người Gửi
                      </Text>
                  </View>
                  <View style={{flex:3, borderLeftWidth: 1, borderLeftColor: '#A9F8FF', paddingLeft: 10}}>
                      <View style={{flexDirection: 'row'}}>
                          <Icon name='person' type='MaterialIcons' style={{fontSize: 12, color:'#A9F8FF', padding: 3}}/>
                          <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}>{this.state.fullname} - Phòng {this.state.departmentCode}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                          <Icon name='call' type='MaterialIcons' style={{fontSize: 12, color:'#A9F8FF', padding: 3}}/>
                          <Text style={{color:'#A9F8FF', fontSize: 12, marginLeft: 2}}>Gọi {this.state.phone}</Text>
                      </View>
                  </View>
              </View>
            {/* fw cause 1 */}
              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nguyên Nhân Xử Lý (Cấp 1)
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >{this.state.fwIdCause1}</Text>
                  </View>
              </View>
            {/* fw cause 2 */}
              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nguyên Nhân Xử Lý Nội Bộ (Cấp 3)
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >{this.state.fwIdCause3}</Text>
                  </View>
              </View>
            {/* return content ndxl */}
              <View style={{margin: 15, marginBottom: 0}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='document' style={processStyle.iconContent}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nội Dung Xử Lý
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >
                          {this.state.ndxl}
                      </Text>
                  </View>
              </View>
            {/* return content private ndxlNB */}
              <View style={{margin: 15}}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='album' type='MaterialIcons' style={processStyle.iconContent}/>
                      <Text style={{fontWeight:'bold', color:'white', fontSize: 12, marginTop: -3, marginLeft: 4}}>
                          Nội Dung Xử Lý Nội Bộ
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >
                          {this.state.ndxlNB}
                      </Text>
                  </View>
              </View>

          </LinearGradient>

        </Container>
      );
    }
  }