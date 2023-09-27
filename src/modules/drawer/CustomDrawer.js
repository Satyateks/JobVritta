
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import VotingPage from '../voting/VotingPage';
import AllocateScreen from '../allocate/Allocate.screen';
import Users from '../user/Users';



const CustomDrawer = ({ navigation }) => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const dropdownItems1 = [
    { label: 'PO ', action: () => navigation.navigate('PO') },
    { label: 'ECI', action: () => navigation.navigate('ECI') },
    { label: 'Margin', action: () => navigation.navigate('Margin') },
    { label: 'Submission', action: () => navigation.navigate('Submission') },
  ];
  const dropdownItems2 = [
    { label: 'C_PO', action: () => navigation.navigate('C_PO') },
    { label: 'CompanyECI', action: () => navigation.navigate('C_ECI') },
    { label: 'C_Margin', action: () => navigation.navigate('C_Margin') },
    { label: 'Submission', action: () => navigation.navigate('C_Submission') },
  ];

  const toggleDropdown1 = () => { setShowDropdown1(!showDropdown1) };
  const toggleDropdown2 = () => { setShowDropdown2(!showDropdown2) };

  const Separator = () => <View style={{ borderBottomColor: '#262626', borderBottomWidth: StyleSheet.hairlineWidth, }} />

  return (
    <View style={{ flex: 1.5 }}>
      <View>
        {/* <View style={{ flex: 0.45, backgroundColor: '#008080', paddingTop: 11, paddingHorizontal: 11, marginBottom: 11 }}>
        <Image source={{ uri: 'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png', }}
          style={{ height: 101, width: 101, borderRadius: 4, }} />
        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, }}> Admin</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 1, marginBottom: 11 }}> Administrator Account</Text>
      </View>
      <TouchableOpacity onPress={toggleDropdown1} style={styles.dropdownHeader}>
        <Text style={styles.dropdownHeaderText}>Branch</Text>
        <View style={styles.dropdownIconContainer}>
          <Text style={styles.dropdownIcon}>{showDropdown1 ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showDropdown1 && (
        <View style={styles.dropdownContent}>
          {dropdownItems1.map(item => (
            <TouchableOpacity
              key={item.label}
              onPress={() => {
                toggleDropdown1();
                item.action();
              }}
              style={styles.dropdownItem}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Separator />
      <TouchableOpacity onPress={toggleDropdown2} style={styles.dropdownHeader}>
        <Text style={styles.dropdownHeaderText}>Company</Text>
        <View style={styles.dropdownIconContainer}>
          <Text style={styles.dropdownIcon}>{showDropdown2 ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showDropdown2 && (
        <View style={styles.dropdownContent}>
          {dropdownItems2.map(item => (
            <TouchableOpacity
              key={item.label}
              onPress={() => {
                toggleDropdown2();
                item.action();
              }}
              style={styles.dropdownItem}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Separator /> */}</View>
      <TouchableOpacity onPress={() => navigation.navigate("VotingPage")}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}>Voting</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() => navigation.navigate("Allocate")}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}> <Icon name="address-card" size={31} color="#005580" />  Allocate</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() => navigation.navigate(Users)}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}> <Icon name="address-card" size={31} color="#005580" />   User</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() =>
        Alert.alert(
          'Log out',
          'Do you want to logout?',
          [{ text: 'Cancel', onPress: () => { return null } },
          {
            text: 'Confirm', onPress: () => {
              navigation.navigate('Login')
              AsyncStorage.clear();
            }
          },],
          { cancelable: false })}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 21, marginLeft: 21, flexDirection: 'column-reverse' }}><Icon name="sign-out" size={31} color="#005580" />  Logout </Text>
      </TouchableOpacity>
      <Separator />
    </View>
  );
};

const styles = {
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  dropdownHeaderText: {
    fontSize: 24,
    marginRight: 1,
    fontWeight: 'bold'
  },
  dropdownIconContainer: {
    // marginLeft: 'auto',
  },
  dropdownIcon: {
    fontSize: 24,
  },
  dropdownContent: {
    backgroundColor: '#f0f0f0',
    fontSize: 21,
  },
  dropdownItem: {
    paddingVertical: 1,
    paddingHorizontal: 15,
  },
};

export default CustomDrawer;


// // import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
// // import React from 'react';

// // const CustomDrawers = ({ navigation }) => {

// //   const Separator = () => <View style={{ borderBottomColor: '#262626', borderBottomWidth: StyleSheet.hairlineWidth, }} />;

// //   return (
// //     <View style={{ flex: 1, backgroundColor: '#e6f2ff' }}>
// //       <View style={{ flex: 0.5, backgroundColor: '#008080', paddingTop: 11, paddingHorizontal: 11, }}>
// //         <Image source={{ uri: 'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png', }}
// //           style={{ height: 101, width: 101, borderRadius: 4, }} />
// //         <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, }}> Admin</Text>
// //         <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 1, }}> Administrator Account</Text>
// //       </View>
// //       <Separator />
// //       <View style={{}}>
// //         <TouchableOpacity onPress={() => navigation.navigate('Submission')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>Submission</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('PO')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>PO</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('ECI')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>ECI</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('Margin')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>Margin</Text>
// //         </TouchableOpacity>
// //         <Separator />
// //         <Text style={{color:'#99d6ff', fontSize:21}}>Company</Text>
// //         <TouchableOpacity onPress={() => navigation.navigate('C_Submission')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>C_Submission</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('C_PO')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>C_PO</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('C_ECI')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>C_ECI</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('C_Margin')}>
// //           <Text style={{ fontSize: 31, fontWeight: 'bold' }}>C_Margin</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <Separator />
// //       <TouchableOpacity onPress={() =>
// //         Alert.alert(
// //           'Log out',
// //           'Do you want to logout?',
// //           [{ text: 'Cancel', onPress: () => { return null } },
// //           {
// //             text: 'Confirm', onPress: () => {
// //               navigation.navigate('LoginScreen')
// //               // AsyncStorage.clear();
// //             }
// //           },],
// //           { cancelable: false })}>
// //         <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 26, marginLeft: 21, flexDirection: 'column-reverse' }}>Logout</Text>
// //       </TouchableOpacity>
// //     </View>
// //   )
// // }

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
// import VotingPage from '../voting/VotingPage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Users from '../Users';
// import BranchScreen from '../Branch.screen';
// import { Company } from '../components';

// const CustomDrawer = ({ navigation }) => {
//   const [showDropdown1, setShowDropdown1] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);

//   const dropdownItems1 = [
//     { label: 'PO ', action: () => navigation.navigate('PO') },
//     { label: 'ECI', action: () => navigation.navigate('ECI') },
//     { label: 'Margin', action: () => navigation.navigate('Margin') },
//     { label: 'Submission', action: () => navigation.navigate('Submission') },
//   ];
//   const dropdownItems2 = [
//     { label: 'C_PO', action: () => navigation.navigate('C_PO') },
//     { label: 'CompanyECI', action: () => navigation.navigate('C_ECI') },
//     { label: 'C_Margin', action: () => navigation.navigate('C_Margin') },
//     { label: 'Submission', action: () => navigation.navigate('C_Submission') },
//   ];

//   const toggleDropdown1 = () => {
//     setShowDropdown1(!showDropdown1);
//   };
//   const toggleDropdown2 = () => {
//     setShowDropdown2(!showDropdown2);
//   };

//   const Separator = () => <View style={styles.separator} />;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={{
//             uri: 'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.headerText}>Admin</Text>
//         <Text style={styles.subHeaderText}>Administrator Account</Text>
//       </View>
//       <TouchableOpacity onPress={() => navigation.navigate(BranchScreen)}>
//         <Text style={styles.menuItem}> <Icon name="address-card" size={31} color="#005580" />  Branch</Text>
//       </TouchableOpacity>
//       <Separator />
//       <TouchableOpacity onPress={toggleDropdown1} style={styles.dropdownHeader}>
//         <Text style={styles.dropdownHeaderText}>Branch</Text>
//         <View style={styles.dropdownIconContainer}>
//           <Text style={styles.dropdownIcon}>{showDropdown1 ? '▲' : '▼'}</Text>
//         </View>
//       </TouchableOpacity>
//       {showDropdown1 && (
//         <View style={styles.dropdownContent}>
//           {dropdownItems1.map(item => (
//             <TouchableOpacity
//               key={item.label}
//               onPress={() => {
//                 toggleDropdown1();
//                 item.action();
//               }}
//               style={styles.dropdownItem}
//             >
//               <Text>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//       <Separator />
//       <TouchableOpacity onPress={toggleDropdown2} style={styles.dropdownHeader}>
//         <Text style={styles.dropdownHeaderText}>Company</Text>
//         <View style={styles.dropdownIconContainer}>
//           <Text style={styles.dropdownIcon}>{showDropdown2 ? '▲' : '▼'}</Text>
//         </View>
//       </TouchableOpacity>
//       {showDropdown2 && (
//         <View style={styles.dropdownContent}>
//           {dropdownItems2.map(item => (
//             <TouchableOpacity
//               key={item.label}
//               onPress={() => {
//                 toggleDropdown2();
//                 item.action();
//               }}
//               style={styles.dropdownItem}
//             >
//               <Text>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//       <Separator />
//       <TouchableOpacity onPress={() => navigation.navigate(VotingPage)}>
//         <Text style={styles.menuItem}>Voting</Text>
//       </TouchableOpacity>
//       <Separator />
//       <TouchableOpacity onPress={() => navigation.navigate(BranchScreen)}>
//         <Text style={styles.menuItem}>  BranchScreen</Text>
//       </TouchableOpacity>
//       <Separator />
//       <TouchableOpacity
//         onPress={() =>
//           Alert.alert(
//             'Log out',
//             'Do you want to logout?',
//             [
//               { text: 'Cancel', onPress: () => { return null; } },
//               {
//                 text: 'Confirm', onPress: () => {
//                   navigation.navigate('Login');
//                   AsyncStorage.clear();
//                 }
//               }
//             ],
//             { cancelable: false }
//           )
//         }
//       >
//         <Text style={styles.logoutText}><Icon name="sign-out" size={31} color="#005580" />  Logout</Text>
//       </TouchableOpacity>
//       <Separator />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1.5,
//   },
//   header: {
//     flex: 0.45,
//     backgroundColor: '#008080',
//     paddingTop: 11,
//     paddingHorizontal: 11,
//     marginBottom: 11,
//   },
//   image: {
//     height: 101,
//     width: 101,
//     borderRadius: 4,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     marginTop: 5,
//   },
//   subHeaderText: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 1,
//     marginBottom: 11,
//   },
//   dropdownHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 11,
//     marginVertical: 11,
//   },
//   dropdownHeaderText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   dropdownIconContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 3,
//     padding: 4,
//   },
//   dropdownIcon: {
//     fontSize: 18,
//   },
//   dropdownContent: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 11,
//     marginBottom: 11,
//   },
//   dropdownItem: {
//     paddingVertical: 8,
//   },
//   menuItem: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     margin: 11,
//   },
//   logoutText: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     marginTop: 21,
//     marginLeft: 21,
//     flexDirection: 'column-reverse',
//   },
//   separator: {
//     borderBottomColor: '#262626',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default CustomDrawer;

