import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Body, Container, Content, Icon } from 'native-base';
import DataAction from '../apiData';
import {processStyle} from '../LayoutStyle';
import Communications from 'react-native-communications';
import {themeUse} from '../themecolor';
// import {themeUse} from '../Setting/Setting';

export default class History extends Component {
  static navigationOptions = {
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
          <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={{flex: 1}}
            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
            {/* nguoi gui/chuyen tiep yeu cau */}
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
            {/* fw cause 1 */}
              <View style={processStyle.viewContent}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                      <Text style={processStyle.headlines}>
                          Nguyên Nhân Xử Lý (Cấp 1)
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >{this.state.fwIdCause1}</Text>
                  </View>
              </View>
            {/* fw cause 2 */}
              <View style={processStyle.viewContent}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='lens' type='MaterialIcons' style={processStyle.iconCause}/>
                      <Text style={processStyle.headlines}>
                          Nguyên Nhân Xử Lý Nội Bộ (Cấp 3)
                      </Text>
                  </View>
                  <View>
                      <Text style={processStyle.txtDataHistory} >{this.state.fwIdCause3}</Text>
                  </View>
              </View>
            {/* return content ndxl */}
              <View style={processStyle.viewContent}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='document' style={processStyle.iconContent}/>
                      <Text style={processStyle.headlines}>
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
              <View style={processStyle.viewContent}>
                  <View style={{flexDirection: 'row'}}>
                      <Icon name='album' type='MaterialIcons' style={processStyle.iconContent}/>
                      <Text style={processStyle.headlines}>
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