import {StyleSheet, Dimensions} from 'react-native';
import common from "../common/Common";

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

    color_theme: {
        backgroundColor: common.color_theme,
    },
    background: {
        backgroundColor: 'white',
    },


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
        borderBottomWidth: 3,
        borderBottomColor: '#6677ff',
        paddingBottom: 5
    },
    txt_result_search_1: {
        fontSize: 10,
        color: '#fff'
    },
    txt_result_search_2: {
        fontWeight: 'bold',
        color: '#fff'
    },
    picker: {
        marginTop: 15,
        paddingBottom: 2,
        height: 30,
        color: 'white'
    },

    bo: {
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingBottom: -5
    },

    textArea:{
        margin: 15,
        borderRadius: 7
    },

    textFoot: {
        color: 'white',
        fontWeight: 'bold'
    },

    btnF1: {
        backgroundColor: '#0057AA',
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
        backgroundColor: '#F7B500',
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
        color: 'white',
        marginLeft: 7,
        fontSize: 25
    },

    line: {
        backgroundColor: '#8B8B8B',
        height: 2,
    }


});

export default styles;