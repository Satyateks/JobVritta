import * as React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../modules/auth/Login.screen';
import { Parent } from '../modules/screen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isloggedin, setLogged] = useState(null)
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token) { setLogged(true) }
      else { setLogged(false) }
    }
    checkLoginStatus()
  }, [])

  if (isloggedin === null) {
    return null
  } else {
    return (
      <NavigationContainer options={{ tabBarHideOnKeyboard: true, }}>
        <Stack.Navigator initialRouteName={isloggedin ? 'Parent' : 'LoginScreen'} screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Parent" component={Parent} options={{ title: 'Welcome' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
export default AppNavigation;