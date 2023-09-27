import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
      // navigation.navigate('LoginScreen',{ token });
    }, 1000)
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'black' }}>
      <Image
        source={require('../assets/logo.jpg')}
      />
      <Image
        source={require('D:/Project/jobVritta/src/assets/jobVrittalogo.jpg')}
      />
      
      <Text style={{ fontSize: 41, fontWeight: '900', color:'#005580',textAlignVertical:'top' }}><ActivityIndicator size='large' color='#005580'/>  Loading...</Text>
    </View>
    //  <Text style={{fontSize:71, fontWeight:'900'}}>npm i react-native-splash-screen</Text>
  )
}

export default Splash;