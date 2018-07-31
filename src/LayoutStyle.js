import {StyleSheet} from 'react-native';

export const khung = StyleSheet.create({
    toplogo: {
        width: 96, height: 35, marginLeft: 25
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
    abc: {}
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