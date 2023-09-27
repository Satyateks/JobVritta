
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import BranchBody from './components/BranchBody';

export default function BranchScreen() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
        if (storedToken) {
          getDashboardData(storedToken);
          getDayWiseData(storedToken);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 900000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (token) {
      getDashboardData(token);
      getDayWiseData(token);
    }}, [token]);

  const getDashboardData = async (token) => {
    try {
      const response = await fetch(API_ENDPOINTS.BranchRequirement, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },});
      const result = await response.json();
      setData1(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getDayWiseData = async (token) => {
    try {
      const response = await fetch(API_ENDPOINTS.BranchRequirementDayWise, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const result = await response.json();
      setData2(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <View>
        <BranchBody data1={data1} data2={data2} />
      </View>
  );
}


// import React, { useState, useEffect } from 'react';
// import { View, Image, Text, ImageBackground, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { styles } from '../drawer/Style';
// import { API_ENDPOINTS } from '../../constants';

// export default function Branch({navigation}) {
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
//   }, [token]);

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.BranchRequirement, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         },
//       });
//       const result1 = await response.json();
//       setData1(result1);
//       // navigation.navigate('BranchRenderhHeader', { token: setData1});
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getDayWiseData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.BranchRequirementDayWise, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         },
//       });
//       const result = await response.json();
//       setData2(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>
//         {item.branchName + '-' + item.companyName.split(' ')[0]}
//       </Text>
//       <Text style={styles.cell}>{item.totalRequirement}</Text>
//       <Text style={styles.cell}>{item.totalAllocation}</Text>
//       <Text style={styles.cell}>{item.totalServices}</Text>
//       <Text style={styles.cell}>{item.serving}</Text>
//     </View>
//   );

//   const renderHeader = () => (
//     <View style={styles.row}>
//       <Text style={styles.headerText}>Branch Name</Text>
//       <Text style={styles.headerText}>T.Req#</Text>
//       <Text style={styles.headerText}>T.Alloc#</Text>
//       <Text style={styles.headerText}>T.Services</Text>
//       <Text style={styles.headerText}>Serving</Text>
//     </View>
//   );

//   const renderFooter = () => (
//     <View>
//       {data2 && (
//         <View>
//           <View style={styles.row}>
//             <Text style={{ color: '#fff' }}>Day Total-</Text>
//             <Text style={styles.cell1}>{data2.dayTotalReq}</Text>
//             <Text style={styles.cell1}>{data2.dayTotalAllocation}</Text>
//             <Text style={styles.cell1}>{data2.dayTotalService}</Text>
//             <Text style={styles.cell1}>{data2.dayTotalServing}</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={{ color: '#fff' }}>Week Total</Text>
//             <Text style={styles.cell1}>{data2.weekTotalReq}</Text>
//             <Text style={styles.cell1}>{data2.weekTotalAllocation}</Text>
//             <Text style={styles.cell1}>{data2.weekTotalService}</Text>
//             <Text style={styles.cell1}>{data2.weekTotalServing}</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={{ color: '#fff' }}>Month Total-</Text>
//             <Text style={styles.cell1}>{data2.monthTotalReq}</Text>
//             <Text style={styles.cell1}>{data2.monthTotalAllocation}</Text>
//             <Text style={styles.cell1}>{data2.monthTotalService}</Text>
//             <Text style={styles.cell1}>{data2.monthTotalServing}</Text>
//           </View>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View>
//       <ImageBackground source={{uri: 'https://wallpaperaccess.com/full/2044489.jpg'}}style={{ height: '100%' }}>
//         <View style={styles.txtview}>
//           <Image source={{uri:'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png'}}style={styles.img}/>
//           <Text style={styles.txt}> Welcome to JobVritta</Text>
//         </View>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <FlatList data={data1}
//               // keyExtractor={(item) => item.branchName}
//               renderItem={renderItem}
//               ListHeaderComponent={renderHeader}
//               ListFooterComponent={renderFooter}
//             />
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }


