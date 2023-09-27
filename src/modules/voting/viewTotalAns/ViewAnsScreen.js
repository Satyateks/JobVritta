
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../../constants';
import VotingPage from '../VotingPage';
import ViewAnsBody from './components/ViewAnsBody';

const ViewAnsScreen = ({ route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [currentQueId, setCurrentQueId] = useState(null);
  const navigation = useNavigation(VotingPage);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token); };
    getToken();
  }, []);

  useEffect(() => {
    const { que_id } = route.params;
    setCurrentQueId(que_id);
  }, [route.params]);

  useEffect(() => {
    if (token && currentQueId) { getDashboardData();}
  }, [token, currentQueId]);

  const getDashboardData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.ViewAllAns + currentQueId, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return(
    <View>
      <ViewAnsBody data={data}/>
    </View>
  )
  };
export default ViewAnsScreen;




// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFocusEffect } from '@react-navigation/native'; // Import the useFocusEffect hook
// import { API_ENDPOINTS } from '../../constants';

// const ViewAns = ({ route }) => {
//   const { que_id } = route.params;
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       getDashboardData();
//     }
//   }, [token]);

//   // const getDashboardData = async () => {
//   //   try {
//   //     const response = await fetch(API_ENDPOINTS.ViewAllAns + que_id, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'Authorization': 'Bearer ' + token
//   //       }
//   //     });
//   //     const data = await response.json();
//   //     setData(data);
//   //     return data || [];
//   //   } catch (error) {
//   //     console.log(error);
//   //     return [];
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.ViewAllAns + que_id, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });
//       const responseData = await response.text();

//       // Check if the response is empty
//       if (!responseData) {
//         console.log('Empty response');
//         return [];
//       }

//       // Parse the response data
//       const data = JSON.parse(responseData);
//       setData(data);
//       return data || [];
//     } catch (error) {
//       console.log(error);
//       return [];
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>QUESTION NUMBER </Text>
//           <Text style={styles.rightText}>{item.que_ID}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>USER NAME</Text>
//           <Text style={styles.rightText}>{item.userName}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITIED ANSWER</Text>
//           <Text style={styles.rightText}>{item.submitted_Answer}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITTED DATE </Text>
//           <Text style={styles.rightText}>{item.submitted_Date}</Text>
//         </View>
//       </View>
//     );
//   };

//   // Use the useFocusEffect hook to refresh data when the screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       getDashboardData();
//       return () => {
//         // Clean up function
//       };
//     }, [])
//   );
//   useFocusEffect(
//     React.useCallback(() => {
//       getDashboardData();
//       return () => {
//         // Clean up function
//         setData([]); // Clear the data when the component is unmounted
//       };
//     }, []) // Empty dependency array to run effect only once
//   );
//   return (
//     <View style={{ backgroundColor: '#b3e6ff', flex: 1 }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 41, textAlign: 'center', color: '#1845f3', margin: 21 }}>TOTAL ANSWER</Text>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : (
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           // keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };



// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_ENDPOINTS } from '../../constants';
// import VotingPage from './VotingPage';

// const ViewAns = ({ route }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);
//   const [currentQueId, setCurrentQueId] = useState(null);

//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();
//   }, []);

//   useEffect(() => {
//     const { que_id } = route.params;
//     setCurrentQueId(que_id);
//   }, [route.params]);

//   useEffect(() => {
//     if (token && currentQueId) {
//       getDashboardData();
//     }
//   }, [token, currentQueId]);

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.ViewAllAns + currentQueId, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>QUESTION NUMBER</Text>
//           <Text style={styles.rightText}>{item.que_ID}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>USER NAME</Text>
//           <Text style={styles.rightText}>{item.userName}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITTED ANSWER</Text>
//           <Text style={styles.rightText}>{item.submitted_Answer}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITTED DATE</Text>
//           <Text style={styles.rightText}>{item.submitted_Date}</Text>
//         </View>
//       </View>
//     );
//   }
//   return (
//     <View style={{ backgroundColor: '#b3e6ff',  }}>
//       <View style={styles.top}>
//         <TouchableOpacity onPress={() => navigation.goBack(VotingPage)}>
//           <Text style={styles.backButton}>Back</Text>
//         </TouchableOpacity>
//       <Text style={{ fontWeight: 'bold', fontSize: 41, textAlign: 'center', color: '#1845f3', margin: 21 }}>TOTAL ANSWER</Text>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : (
//         // <FlatList data={data}
//         //   renderItem={renderItem}
//         // keyExtractor={(item) => item.id.toString()} />
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           ListEmptyComponent={() => (
//             <Text style={{flex:1, textAlign: 'center', fontSize: 48,justifyContent:'center'}}>
//               {data.length === 0 ? 'No Answer Found for this Question' : null}
//             </Text>
//           )}
//         />
//       )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   top:{
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#1845f3',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//   },
//   leftText: {
//     marginRight: 10,
//     // fontSize:18,
//     fontWeight: '900',
//   },
//   rightText: {
//     marginLeft: 10,
//     // fontsize:18,
//     fontWeight: '500',
//   },
//   card: {
//     backgroundColor: '#e6e6ff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     elevation: 8,
//   },
//   cardTitle: {
//     // fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     textAlign: 'right',
//     color: '#0055ff'
//   },
// });
// export default ViewAns;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_ENDPOINTS } from '../../constants';

// const ViewAns = ({ route }) => {
//   const { que_id } = route.params;
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);
//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();
//     const interval = setInterval(() => {
//       gettotalans();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (token) {
//       gettotalans();
//     }
//   }, [token])

//   const gettotalans = async () => {
//     try {
//       const response = await fetch(API_ENDPOINTS.ViewAllAns + que_id, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });
//       const data = await response.json();
//       setData(data);
//       return data || [];
//     } catch (error) {
//       console.log(error);
//       return [];
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>QUESTION NUMBER </Text>
//           <Text style={styles.rightText}>{item.que_ID}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>USER NAME</Text>
//           <Text style={styles.rightText}>{item.userName}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITIED ANSWER</Text>
//           <Text style={styles.rightText}>{item.submitted_Answer}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>SUBMITTED DATE </Text>
//           <Text style={styles.rightText}>{item.submitted_Date}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ backgroundColor: '#b3e6ff', flex: 2 }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 41, textAlign: 'center', color: '#1845f3', margin: 21 }}>TOTAL ANSWER</Text>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : (
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   leftText: {
//     marginRight: 10,
//     // fontSize:18,
//     fontWeight: '900',
//   },
//   rightText: {
//     marginLeft: 10,
//     // fontsize:18,
//     fontWeight: '500',
//   },
//   card: {
//     backgroundColor: '#e6e6ff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     elevation: 8,
//   },
//   cardTitle: {
//     // fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     textAlign: 'right',
//     color: '#0055ff'
//   },
// });
// export default ViewAns;



// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_ENDPOINTS } from '../../constants';

// const CardViewComponent = ({ title, value }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>{title}</Text>
//       <Text>{value}</Text>
//     </View>
//   );
// };

// const ViewAns = ({ route }) => {
//   const { que_id } = route.params;
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getToken = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         setToken(token);
//       } catch (error) {
//         console.error(error);
//         setError('Failed to retrieve token: ' + error.message);
//       }
//     };
//     getToken();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       getDashboard();
//       const interval = setInterval(getDashboard, 10000); // Fetch data every 10 seconds
//       return () => clearInterval(interval);
//     }
//   }, [token]);

//   const getDashboard = async () => {
//     try {
//       const response = await fetch(`${API_ENDPOINTS.ViewAllAns}${que_id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setData(result);
//         console.log("console data is a ", result)
//         setLoading(false);
//       } else {
//         throw new Error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Failed to fetch data:ugyjg ' + error.message);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }

//   return (
//     <ScrollView>
//       <View style={{ margin: 5, justifyContent: 'space-between' }}>
//         <CardViewComponent title="QUS ID" value={data?.[0]?.que_ID} />
//         <CardViewComponent title="USER NAME" value={data?.[0]?.userName} />
//         <CardViewComponent
//           title="SUBMIT ANSWER"
//           value={data?.[0]?.submitted_Answer === 1 ? 'Yes' : data?.[0]?.submitted_Answer === 0 ? 'No' : 'No Answer'}
//         />
//         <CardViewComponent title="SUBMIT DATE" value={data?.[0]?.submitted_Date} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     margin: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });

// export default ViewAns;


