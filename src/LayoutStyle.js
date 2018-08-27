import {StyleSheet} from 'react-native';
import {themeUse} from './themecolor';
// import {themeUse} from './Setting/Setting';

export const khung = StyleSheet.create({
    toplogo: {
        width: 105, height: 35, marginLeft: 25
    },
    topicon: {
        marginRight: 15
    }
});

export const loginStyle = StyleSheet.create({
    bground: {
        flex: 1
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTop: {
        width: 300,
        height: 70,
        marginTop: 70
    },
    bottomText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: themeUse.textColor,
        marginTop: 150
    },
    loginForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 50
    },
    lineArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        width: 300,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 18
    },
    input: {
        flex: 1,
        height: 40,
        width: 280,
        backgroundColor: 'transparent',
        marginBottom: 15,
        color: themeUse.textColor,
        paddingHorizontal: 0,
        borderRadius: 18
    },
    iconForm: {
        alignItems: 'center',
        padding: 10,
        marginLeft: 5,
        width: 40,
        height: 40
    },
    buttonLogin: {
        backgroundColor: themeUse.primaryColor,
        width: 300,
        padding: 11,
        borderRadius: 18
    },
    buttonText: {
        textAlign: 'center',
        color: themeUse.textColor,
        fontWeight: 'bold'
    }
});

export const receiveStyle = StyleSheet.create({
    loading: {
        flex: 1,
        padding: 25
    },
    bground: {
        flex: 1,
        justifyContent: 'center',
    },
    Parea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0, left: 0, right: 0, bottom: 40,
        position: 'absolute'
    },
    Pimage: {
        width: 220,
        height: 386
    },
    rowbg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderColor: themeUse.borderItem
    },
    blurAbsolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
      },
    rowSubline: {
        flex: 1,
        flexDirection: 'row'
    },
    txtRQ: {
        fontSize: 12,
        color: themeUse.textColor,
        fontWeight: 'bold',
        width: 200,
        height: 50,
        padding: 4
    },
    code_levelArea: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 2,
        paddingRight: 5
    },
    txtCode: {
        fontSize: 10,
        color: themeUse.textColor
    },
    levelIcon: {
        padding: 0,
        marginLeft: 5
    },
    timeArea: {
        flex: 1,
        flexDirection: 'row'
    },
    usersArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    clockIcon: {
        color: themeUse.textColor,
        padding: 2,
        marginLeft: 5
    },
    txtTime: {
        fontSize: 10,
        color: themeUse.textColor,
        paddingBottom: 5
    },
    senderIcon: {
        color: themeUse.textColor,
        padding: 2
    },
    txtSender: {
        fontSize: 10,
        color: themeUse.textColor,
        marginRight: 6
    }
});

export const processStyle = StyleSheet.create({
    text_top: {
        color: themeUse.textColor,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view_top: {
        marginLeft: 30,
        paddingVertical: 10,
    },
    view_sum_item: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        paddingBottom: 10,
    },
    txt_result_search_1: {
        fontSize: 10,
        color: themeUse.textColor
    },
    txt_result_search_2: {
        fontWeight: 'bold',
        color: themeUse.textColor
    },
    background: {
        backgroundColor: themeUse.textColor,
    },
    iconCause: {fontSize: 8, color: themeUse.textColor, marginVertical: 4},
    iconContent: {fontSize: 12, color: themeUse.textColor, marginVertical: 2},
    txtDataHistory: {color: themeUse.textColor, fontSize: 12, marginLeft: 10},
    headlines: { fontWeight: 'bold', color: themeUse.textColor, fontSize: 12, marginTop: -3, marginLeft: 4 },
    pickItemSpace: { marginBottom: 12 },
    topInfoUser: { flexDirection: 'row', marginTop: 15, marginBottom: 10 },
    leftTophead: { flex: 2, justifyContent: 'center', marginLeft: 20 },
    txtHeadtop: { fontWeight: 'bold', color: themeUse.textColor, fontSize: 12 },
    rightTophead: { flex: 3, borderLeftWidth: 1, borderLeftColor: themeUse.textColor, paddingLeft: 10 },
    topheadIcon: { fontSize: 12, color: themeUse.textColor, padding: 3 },
    topheadText: { color: themeUse.textColor, fontSize: 12, marginLeft: 2 },
    contentText: { color: themeUse.textColor, fontSize: 12 },
    viewContent: { margin: 15 },
    picker: {
        height: 40,
        color: themeUse.textColor
    },
    pickerline: {
        borderBottomWidth: 1, paddingBottom: 2, borderBottomColor: themeUse.textColor
    },
    textArea:{
        borderRadius: 7,
        borderWidth: 1,
        borderColor: themeUse.textColor,
        color: themeUse.textColor,
        fontSize: 12
    },
    white: {
        color: themeUse.textColor
    },
    centerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowButtonBot: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    centerCol: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn :{
        backgroundColor: themeUse.primaryColor,
        borderRadius: 20,
        height: 30,
        width: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFoot: {
        color: themeUse.textColor,
        fontWeight: 'bold',
        fontSize: 12
    },
    img :{
        width: '100%',
    }
});

export const sendStyle = StyleSheet.create({
    color_theme: {
        backgroundColor: themeUse.primaryColor,
    },
    background: {
        backgroundColor: 'white',
    },
    text_top: {
        color: themeUse.textColor,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view_top: {
        marginLeft: 30,
        paddingVertical: 10,
    },
    view_sum_item: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingBottom: 10,
        paddingTop: 10,
    },
    txt_result_search_1: {
        fontSize: 10,
        color: themeUse.textColor
    },
    txt_result_search_2: {
        fontWeight: 'bold',
        color: themeUse.textColor
    },
    picker: {
        paddingBottom: 2,
        height: 30,
        color: themeUse.textColor
    },
    bo: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: themeUse.textColor,
        paddingBottom: -5
    },
    textArea:{
        margin: 15,
        borderRadius: 7,
        color: themeUse.textColor
    },
    textFoot: {
        color: themeUse.textColor,
        fontWeight: 'bold'
    },
    btnF1: {
        backgroundColor: themeUse.primaryColor,
        borderRadius: 20,
        height: 30,
        width: 110,
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnF2: {
        backgroundColor: themeUse.primaryColor,
        width: '100%',
        borderRadius: 7,
        height: 30,
        marginTop: 15,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerCol: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBack: {
        color: themeUse.textColor,
        marginLeft: 7,
        fontSize: 25
    },
    line: {
        backgroundColor: '#8B8B8B',
        height: 2,
    }
});

export const searchStyle = StyleSheet.create({
    bground: {
        flex: 1
    },
    color_theme: {
        backgroundColor: themeUse.primaryColor,
    },
    background: {
        backgroundColor: 'white',
    },
    centerCol: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#8B8B8B',
        height: 2,
    },

    picker: {
        marginLeft: 10,
        paddingBottom: 2,
        height: 30,
        color: themeUse.textColor,
    },
    text_top: {
        color: themeUse.textColor,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view_top: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: themeUse.primaryColor
    },
    input_search: {
        height: 30,
        marginTop: 5,
        borderWidth: 1,
        borderColor: themeUse.textColor,
        borderRadius: 15,
    },
    icon_time: {
        color: themeUse.textColor,
        paddingTop:2,
        paddingRight: 2
    },
    txt_resulf_search_1: {
        fontSize: 10,
        color: themeUse.textColor
    },
    txt_resulf_search_2: {
        fontWeight: 'bold',
        color: themeUse.textColor
    },
    view_header: {
        flexDirection: 'row',
        backgroundColor: themeUse.primaryColor,
        height: 70
    },
    icon_back: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    txt_header: {
        color: themeUse.textColor,
        fontSize: 15,
        fontWeight: 'bold'
    },
    view_one: {
        borderBottomColor: themeUse.lineColor,
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    view_tinhcuoc: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    txt_tinhcuoc: {
        fontSize: 17,
        fontWeight: 'bold',
        color: themeUse.textColor
    },
    view_hethong: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15
    },
    view_time: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: themeUse.lineColor,
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    txt_time: {
        fontWeight: 'bold',
        flex: 0.4,
        justifyContent: 'center',
        color: themeUse.textColor
    },
    view_sum_sent: {
        borderBottomColor: themeUse.lineColor,
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    view_sent: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: themeUse.lineColor
    },
    txt_sent: {
        fontWeight: 'bold',
        justifyContent: 'center',
        color: themeUse.textColor
    },
    txt_value_sent_details: {color: themeUse.textColor},
    txt_value_sent: {color: themeUse.placeholdertxtColor, marginTop: 4},
    view_content_reques: {
        borderBottomColor: themeUse.lineColor,
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    txt_value_reques: {
        fontWeight: 'bold',
        flex: 0.4,
        justifyContent: 'center',
        color: themeUse.textColor
    },

    // Search
    logo: {width: 87, height: 20},
    view_icon_add: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    },
    txt_input_search: {
        marginLeft: 10,
        marginVertical: -10,
        color: themeUse.textColor,
        paddingVertical: 14
    },
    view_icon_minus: {
        width: 20,
        height: 20,
        marginLeft: 10,
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    view_btn_search: {
        marginTop: '20%',
        margin: '35%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_search: {
        width: 100,
        height: 30,
        // paddingTop: 10,
        // paddingBottom: 22,
        backgroundColor: themeUse.primaryColor,
        borderRadius: 20,

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_btn_search: {
        textAlign: 'center',
        color: themeUse.textColor,
        fontWeight: 'bold'
    },
    view_sum_item: {
        borderBottomWidth: 1,
        borderBottomColor: themeUse.lineColor,
        paddingBottom: 5
    },
    view_modal: {
        backgroundColor: themeUse.textColor,
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10},
    view_ok: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    touchable_ok: {
        width: 60,
        paddingVertical: 4,
        paddingHorizontal: 4,
        backgroundColor: themeUse.primaryColor,
        borderRadius: 10
    }
});

export const settingStyle = StyleSheet.create({
    bground: {
        flex: 1
    },
    headerTop: {marginTop: 20, flexDirection: 'row', justifyContent: 'center'},
    textTop: {color: themeUse.textColor, fontSize: 20, fontWeight: 'bold'},
    viewItem: {
        flexDirection: 'row', flex: 1,
        borderBottomWidth:1, borderBottomColor: themeUse.lineColor,
        paddingVertical: 5, marginTop: 5
    },
    itemLabel: {flex: 0.4, color: themeUse.textColor},
    itemContent: {flex: 0.6, color: themeUse.textColor},
    taikhoanView: {borderBottomWidth: 1, borderBottomColor: themeUse.lineColor, paddingVertical: 10},
    txtHeadlines: {fontWeight: 'bold', color: themeUse.textColor},
    txtChild: {color: themeUse.textColor},
    themeView: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: themeUse.lineColor,
        flexDirection: 'row'
    },
    logoutView: {borderBottomWidth: 1, borderBottomColor: themeUse.lineColor}
});