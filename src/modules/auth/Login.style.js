import { StyleSheet, } from 'react-native';

export const LoginStyles = StyleSheet.create({
    title: {
        fontSize: 51,
        fontStyle: 'italic',
        color: "#fff",
        margin: 11,
    },
    input: {
        height: '21%',
        width: 270,
        borderWidth: 1,
        borderRadius: 6,
        margin: 10,
        fontWeight: '900',
        backgroundColor: '#fff'
    },
    LoginBtn: {
        Color: '#000',
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 2,
        borderRadius: 20,
        // borderColor: "black", //button background/border color
        overflow: "hidden",
        marginBottom: 10,
        textDecorationColor: '#c42bf7',
        // textDecorationColor:'red'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'black'
    }
})