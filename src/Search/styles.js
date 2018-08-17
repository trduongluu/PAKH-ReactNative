import {StyleSheet, Dimensions} from 'react-native'
import common from "../common/Common";

const styles = StyleSheet.create({
    bground: {
        flex: 1
    },
    color_theme: {
        backgroundColor: common.color.color_theme,
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



    text_top: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view_top: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4076b9'
    },
    input_search: {
        flex: 0.6,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#bbbdcd',
        borderRadius: 15,
    },
    icon_time: {
        color: 'white',
        paddingTop:2,
        paddingRight: 2
    },
    txt_resulf_search_1: {
        fontSize: 10,
        color: '#fff'
    },
    txt_resulf_search_2: {
        fontWeight: 'bold',
        color: '#fff'
    },
    view_header: {
        flexDirection: 'row',
        backgroundColor: '#0057AA',
        height: 70
    },
    icon_back: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    txt_header: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    view_one: {
        borderBottomColor: '#000',
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
        color: '#fff'
    },
    view_hethong: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15
    },
    view_time: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    txt_time: {
        fontWeight: 'bold',
        flex: 0.4,
        justifyContent: 'center',
        color: '#fff'
    },
    view_sum_sent: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    view_sent: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#000'
    },
    txt_sent: {
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff'
    },
    txt_value_sent: {color: '#fff'},
    view_content_reques: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    txt_value_reques: {
        fontWeight: 'bold',
        flex: 0.4,
        justifyContent: 'center',
        color: '#fff'
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
        color: 'white'
    },
    view_icon_minus: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    view_btn_search: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn_search: {
        width: 100,
        paddingTop: 10,
        paddingBottom: 22,
        backgroundColor: '#2f40ff',
        borderRadius: 20
    },
    txt_btn_search: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    view_sum_item: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5
    },
    view_modal: {
        backgroundColor: '#fff',
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
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#2f40ff',
        borderRadius: 10
    },
});
export default styles