// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_ENDPOINTS } from '../../constants';
// import CompanyBody from './components/CompanyBody';

// export default function CompanyScreen() {
//   // const { name } = route.params;
//   const [data1, setData1] = useState(null);
//   const [data2, setData2] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();
//     const interval = setInterval(() => {
//       getDashboardData();
//       getDayWiseData();
//     }, 900000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (token) {
//       getDashboardData();
//       getDayWiseData();
//     }
//   }, [token])

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.CompanyRequirement, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         }
//       });
//       const result = await response.json();
//       setData1(result);
//       // console.log('data1 {"\n"}', data1)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getDayWiseData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.CompanyRequirementDayWise, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         }
//       });
//       const result = await response.json();
//       setData2(result);
//       // console.log("console data 2 {'\n'}", data2)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View >
//       <CompanyBody data1={data1} data2={data2} />
//     </View >
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'

export default function CompanyScreen() {
  console.log("CompanyScreen company scetlrewtlk" )
  return (
    <View>
      <Text>Company.screen</Text>
      <Text>Company.screen</Text>
      <Text>Company.screen</Text>
      <Text>Company.screen</Text>
    </View>
  )
}

