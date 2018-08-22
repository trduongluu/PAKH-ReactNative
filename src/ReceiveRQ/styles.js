import {StyleSheet, Dimensions} from 'react-native';
import common from "../common/Common";

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
    picker: {
        height: 40,
        color: 'white'
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

export default styles;