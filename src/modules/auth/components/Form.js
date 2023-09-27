

import React, { useState, useRef } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../../drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginStyles } from '../Login.style';

export default function Form({ setLoginName, setLoginPassword, onSubmit }) {
  const passwordInputRef = useRef(null);

  const handleLoginNameChange = (text) => {
    setLoginName(text);
  };
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };
  const handleLogin = () => {
    onSubmit();
  };

  return (
    <SafeAreaView style={styles.login}>
      <TextInput
        style={LoginStyles.input}
        onChangeText={handleLoginNameChange}
        // onChangeText={text => setLoginName(text)}
        placeholder="Email or Username"
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          passwordInputRef.current.focus();
        }}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={LoginStyles.input}
        onChangeText={handleLoginPasswordChange}
        placeholder="Password"
        secureTextEntry={true}
        // autoCapitalize="none"
        returnKeyType="go"
        blurOnSubmit={false}
        ref={passwordInputRef}
        // onSubmitEditing={handleLogin}
        underlineColorAndroid="transparent"
      />
      <View style={LoginStyles.LoginBtn}>
        <Button onPress={handleLogin} title="Log In" titleStyle={{ color: 'black' }} textDecorationColor={'black'} color={'#f95353'} />
      </View>
    </SafeAreaView>
  );
}




// import { View, TextInput, Button } from 'react-native'
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { styles } from '../../drawer';


// export default function From() {
//   const [loginName, setLoginName] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const navigation = useNavigation();

//   const handleFormSubmit = () => {
//     navigation.navigate('NextScreen', {
//       loginName,
//       loginPassword,
//     });
//   };

//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         // onChangeText={setLoginName}
//         onChangeText={text => setLoginName(text)}
//         placeholder="Email or Username"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         returnKeyType="next"
//         blurOnSubmit={false}
//         // onSubmitEditing={() => {
//         //   passwordInput.focus();
//         // }}
//         underlineColorAndroid="transparent"
//         onSubmitEditing={handleFormSubmit}
//       />
//       <TextInput
//         style={styles.input}
//         // onChangeText={setLoginPassword}
//         onChangeText={text => setLoginPassword(text)}
//         placeholder="Password"
//         secureTextEntry={true}
//         autoCapitalize="none"
//         returnKeyType="go"
//         blurOnSubmit={false}
//         ref={(input) => {
//           passwordInput = input;
//         }}
//         onSubmitEditing={handleFormSubmit}
//       // onSubmitEditing={_userLogin}
//       />
//       <View style={styles.styleLoginBtn}>
//         <Button onPress={handleUserLogin} title="Log In" titleStyle={{ color: 'black' }} textDecorationColor={'black'} color={'#f95353'} />
//       </View>
//     </View>
//   )
// }

// import { View, Text, TextInput, SafeAreaView, Alert, ImageBackground, Image, Button, ScrollView } from 'react-native';
// import * as React from 'react';
// import { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { styles } from '../../drawer/Style';

// const LoginScreen = ({ navigation }) => {
//   const [loginName, setLoginName] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [error, setError] = useState('');

//   const _userLogin = async () => {
//     const loginResponse = await loginUser(loginName, loginPassword);
//     if (loginResponse.success) {
//       const { token } = loginResponse;
//       try {
//         await AsyncStorage.setItem('token', token);
//         navigation.navigate('Parent', { token, name: loginName });
//         console.log(token.data);
//       } catch (e) {
//         // saving error (e)
//       }
//     } else {
//       setError(loginResponse.error);
//     }
//   };

//   return (
//     <View>
//       <ImageBackground source={require("D:/Project/jobVritta/src/assets/2.jpg")} style={styles.backgroundImage}>
//         <SafeAreaView style={{ height: '100%' }}>
//           <Image source={require('D:/Project/jobVritta/src//assets/ss.png')} style={{ width: '100%', height: '27%' }} />
//           <SafeAreaView>
//             <ScrollView>
//               <View style={styles.container}>
//                 <Text style={styles.title}>JobVritta</Text>
//                 {error ? <Text style={styles.error}>{error}</Text> : null}
//                 <View style={styles.login}>
//                   <TextInput
//                     style={styles.input}
//                     onChangeText={setLoginName}
//                     placeholder="Email or Username"
//                     keyboardType="email-address"
//                     returnKeyType="next"
//                     underlineColorAndroid="transparent"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     onChangeText={setLoginPassword}
//                     placeholder="Password"
//                     ref={(input) => {
//                       passwordInput = input;
//                     }}
//                     onSubmitEditing={_userLogin}
//                     underlineColorAndroid="transparent"
//                   />
//                   <View style={styles.styleLoginBtn}>
//                     <Button onPress={_userLogin} title="Log In" titleStyle={{ color: 'black' }} textDecorationColor={'black'} color={'#f95353'} />
//                   </View>
//                 </View>
//               </View>
//             </ScrollView>
//           </SafeAreaView>
//         </SafeAreaView>
//       </ImageBackground>
//     </View>
//   );
// };

// export default LoginScreen;

