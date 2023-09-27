
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Pagination } from 'react-native-pagination';

// const Users = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();
//     const interval = setInterval(() => {
//       getDashboardData();
//     }, 90000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (token) {
//       getDashboardData();
//     }
//   }, [token, currentPage]);

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.jobvritta.com/api/User_Mast?filter=null&lazyParams={"first":0,"rows":25,"page":${page},"sortField":"login_ID","sortOrder":-1}&filter=null`,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + token,
//           },
//         }
//       );
//       const result = await response.json();
//       setData((prevData) => [...prevData, ...result]);
//       setTotalPages(result.totalPages);
//       return result || [];
//     } catch (error) {
//       console.log(error);
//       return [];
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       getDashboardData();
//     }
//   }, [token, page]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>UserName</Text>
//           <Text style={styles.cardTitle}>{item.user_Name}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>LoginName</Text>
//           <Text style={styles.rightText}>{item.login_Name}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>EmailID</Text>
//           <Text style={styles.rightText}>{item.user_EmailID}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>Call No</Text>
//           <Text style={styles.rightText}>{item.user_Cell_No}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>BranchName</Text>
//           <Text style={styles.rightText}>{item.branchName}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>Status</Text>
//           <Text style={styles.rightText}>{item.user_Status}</Text>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.leftText}>WorkFrom</Text>
//           <Text style={styles.rightText}>{item.workFrom}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ backgroundColor: '#e6f2ff' }}>
//       <SafeAreaView>
//         <Text style={{ fontWeight: 'bold', margin: 7, marginBottom: 7, fontSize: 36, textAlign: 'center', color: '#1845f3', backgroundColor: '#e6f2ff', elevation: 21 }}>Manage User List </Text>
//         {loading ? (
//           <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 51, }}>
//             <ActivityIndicator size="large" />
//           </View>
//         ) : (
//           <ScrollView>
//             <FlatList
//               data={data}
//               renderItem={renderItem}
//               keyExtractor={(item) => item.id.toString()}
//               onEndReached={() => {
//                 if (currentPage < totalPages) {
//                   setCurrentPage((prevPage) => prevPage + 1);
//                 }
//               }}
//               onEndReachedThreshold={0.1}
//             />
//             <Pagination
//               total={totalPages}
//               current={currentPage}
//               onPageChange={(page) => {
//                 setPage(page);
//                 setCurrentPage(page);
//               }}
//             />
//           </ScrollView>
//         )}
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 11,
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
//     backgroundColor: '#fff',
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
// export default Users;



import React, { useEffect, useState } from 'react';
import { View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserBody } from './components';

const Users = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    };
    getToken();
    const interval = setInterval(() => {
      getDashboardData();
    }, 90000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { if (token) { getDashboardData() } 
}, [token, currentPage]);

  const getDashboardData = async () => {
    try {
      const response = await fetch(`https://api.jobvritta.com/api/User_Mast?filter=null&lazyParams={"first":0,"rows":25,"page":${page},"sortField":"login_ID","sortOrder":-1}&filter=null`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      const result = await response.json();
      setData((prevData) => [...prevData, ...result]);
      setTotalPages(result.totalPages);
      return result || [];
    } catch (error) {console.log(error);      return [];
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getDashboardData();
    }
  }, [token, page]);

  return (
    <View >
      <UserBody data={data} totalPages={totalPages} />
    </View>
  );
};
export default Users;

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { User } from './Index';

// const Users = ({ navigation }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     const getToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       setToken(token);
//     };
//     getToken();

//     const interval = setInterval(() => {
//       getDashboardData();
//     }, 50000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (token) {
//       getDashboardData();
//     }
//   }, [token, currentPage]);

//   const getDashboardData = async () => {
//     try {
//       const response = await fetch(`https://my_api/data.Params={"first":0,"rows":25,"page":${currentPage},"sortField":"login_ID","sortOrder":-1}&filter=null`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       });
//       const result = await response.json();
//       setData((prevData) => [...prevData, ...result]);
//       setTotalPages(result.totalPages);
//       console.log('console error', result);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderItem = ({ item }) => {
//     // ...existing code...
//   };

//   const loadNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <View style={{ backgroundColor: '#e6f2ff' }}>
//       <SafeAreaView>
//         <Text style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center', color: '#1845f3', backgroundColor: '#e6f2ff', elevation: 21 }}>Manage User List </Text>
//         {loading ? (
//           <ActivityIndicator size="large" />
//         ) : (
//           <>
//             <FlatList
//               data={data}
//               renderItem={renderItem}
//               onEndReached={loadNextPage}
//               onEndReachedThreshold={0.1}
//             />
//             {currentPage < totalPages && (
//               <View style={styles.buttonContainer}>
//                 <Button
//                   title="Next Page"
//                   onPress={loadNextPage}
//                   disabled={currentPage >= totalPages}
//                 />
//               </View>
//             )}
//           </>
//         )}
//       </SafeAreaView>
//     </View>
//   );
// };

// export default Users;

