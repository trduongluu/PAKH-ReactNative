import {StyleSheet} from 'react-native';

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
        color: '#fff',
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
        color: '#fff',
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
        backgroundColor: '#0057AA',
        width: 300,
        padding: 11,
        borderRadius: 18
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
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
        borderColor: '#95afc0'
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
        color: 'white',
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
        color: 'white'
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
        color: 'white',
        padding: 2,
        marginLeft: 5
    },
    txtTime: {
        fontSize: 10,
        color: 'white',
        paddingBottom: 5
    },
    senderIcon: {
        color: 'white',
        padding: 2
    },
    txtSender: {
        fontSize: 10,
        color: 'white',
        marginRight: 6
    }
});

export const processStyle = StyleSheet.create({
    text_top: {
        color: '#fff',
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
        color: '#fff'
    },
    txt_result_search_2: {
        fontWeight: 'bold',
        color: '#fff'
    },
    background: {
        backgroundColor: 'white',
    },
    iconCause: {fontSize: 8, color: 'white', marginVertical: 4},
    iconContent: {fontSize: 12, color: 'white', marginVertical: 2},
    txtDataHistory: {color: 'white', fontSize: 12, marginLeft: 10},
    picker: {
        height: 40,
        color: 'white'
    },
    pickerline: {
        borderBottomWidth: 1, paddingBottom: 2, borderBottomColor: '#fff'
    },
    textArea:{
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'white',
        color: '#fff',
        fontSize: 12
    },
    white: {
        color: 'white'
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
        backgroundColor: '#0057AA',
        borderRadius: 20,
        height: 30,
        width: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFoot: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    img :{
        width: '100%',
    }
});

export const sendStyle = StyleSheet.create({
    abc: {}
});

export const searchStyle = StyleSheet.create({
    abc: {}
});

export const settingStyle = StyleSheet.create({
    abc: {}
});