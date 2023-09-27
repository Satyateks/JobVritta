import { StyleSheet, Dimensions } from 'react-native';
import { Colors, FontFamily, FontSize } from '../../theme';

export const styles = StyleSheet.create({
  
    from: {
        height: '8%',
        width: '29%',
        borderWidth: 1,
        borderRadius: 6,
        margin: 10,
        fontWeight: '900',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 25,
        // fontStyle: 'italic',
        color: "#000",
        // margin: 11,
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
    loginbox: {
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 4,
        elevation: 5,
        margin: '7%',
        marginTop: '21%',
        padding: 11,
        shadowOffset: { width: 1, height: 1 },
    },
    login: {
        padding: 10,
    },
    styleLoginBtn: {
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
    loginBtnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '#f72b2b',
        textAlign: 'center',
    },
    footer1: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'row',
        padding: 6,
        marginBottom: 10,
    },
    txtview: {
        // padding: 7,
        flexDirection: 'row',
        backgroundColor: ['#288691', '#9485878']
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        color: "#39004d",
        textAlign: 'center'
    },
    ans: {
        fontSize: 25,
        fontWeight: 'bold',
        fontSize: FontSize.xl,
        fontFamily: FontFamily.light,
        // color: "#39004d",
        margin:5,
    },
    headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        // overflow: 'hidden',
        // fontFamily:FontFamily.bold,
    },
    allocateheaderText: {
        fontWeight: 'bold',
        // flex: 1,
        textAlign: 'center',
    },
    row1: {
        flexDirection: 'column',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
        padding: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        // display:'flex',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        // overflow: 'hidden'
    },
    cell1: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        flexDirection: 'row'
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 51,
    },
    img: {
        height: 90,
        width: 90,
    },
    messageBox: {
        maxHeight: 110,
        width: '80%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.white
    },
});
