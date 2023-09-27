import { StyleSheet,  } from 'react-native';
import { FontFamily, FontSize } from '../../theme';

export const VotingStyle = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:"#ff9999"
    },
    title:{
        fontSize: 31, 
        textAlign: 'center', 
        color: "#f0f0f5", 
        fontWeight: '800', 
        marginTop: 5,
    },
    renderContainer:{
        // flex: 1, 
        padding: 11, 
        backgroundColor: "#e6e6ff", 
        elevation: 11, 
        borderRadius: 21,
        margin: 11
    },
    modelBg:{
        flexDirection: 'row',
         justifyContent: 'space-between',
    },
    ModelQus:{
         fontSize: 15, 
         fontWeight: 'bold',
          marginBottom: 11 
    },
    ans: {
        fontSize: 25,
        fontWeight: 'bold',
        fontSize:FontSize.xl,
        fontFamily:FontFamily.light,
        // color: "#39004d",
        margin:5,
    },
    ansContainer:{
         padding: 21, margin: 21,
          backgroundColor: "#e6e6ff", borderRadius: 21, 
        justifyContent: 'space-between', elevation: 11 
    },
    ansBG:{ fontSize: 18, margin: 10, fontSize:22 },
    ansSubmit:{ padding: 21, margin: 21, backgroundColor: "#e6e6ff", borderRadius: 21, justifyContent: 'space-between', elevation: 11 },
    ansView:{  backgroundColor: '#b3e6ff' },
    ansmodel:{ justifyContent: 'center', alignItems: 'center', marginTop: 200, marginLeft:10, marginRight:10, backgroundColor: "#fff", borderRadius: 40,elevation:10 }
})