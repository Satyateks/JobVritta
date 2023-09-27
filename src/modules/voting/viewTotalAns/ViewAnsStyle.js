import { StyleSheet, } from 'react-native';

export const ViewAnsStyle = StyleSheet.create({
  
        topBar: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1845f3',
          paddingVertical: 10,
          paddingHorizontal: 16,
          elevation: 11,
        },
        backButton: {
          color: '#fff',
          fontSize: 26,
        },
        topBarTitle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        },
        placeholderView: {
          width: 70,
        },
        container: {
          flex: 1,
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        },
        leftText: {
          marginRight: 10,
          fontWeight: '900',
        },
        rightText: {
          marginLeft: 10,
          fontWeight: '500',
        },
        card: {
          backgroundColor: '#e6e6ff',
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          elevation: 8,
        },
      
})