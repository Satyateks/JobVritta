import { View, } from 'react-native';
import React from 'react';
import DrawerNavigation from '../../navigation/DrawerNavigation';


export const Parent = () => {
  return (
    <View style={{flex:1}}>
      <DrawerNavigation/>
    </View>
  )
}

// import { View } from 'react-native';
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DrawerNavigation from '../drawer/DrawerNavigation';

// const Stack = createNativeStackNavigator();

// export const Parent = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="DrawerNavigation"
//           component={DrawerNavigation}
//           options={{ headerShown: false }}
//         />
//         {/* Other screens within the Parent stack */}
//       </Stack.Navigator>
//     </View>
//   );
// };
