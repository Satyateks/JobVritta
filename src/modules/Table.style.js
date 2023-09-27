import { StyleSheet, } from 'react-native';

export const BranchStyle = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    cell1: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    txtview: {
        // padding: 7,
        flexDirection: 'row',
        backgroundColor: ['#288691', '#9485878']
    },
    img: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        height: 90,
        width: 90,
        // borderRadius: 200,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        color: "#39004d",
        textAlign: 'center'
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 51,
    },
    header: {
        flexDirection: 'row',
        padding: 6,
        marginBottom: 10,
    },
  })