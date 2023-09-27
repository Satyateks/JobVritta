import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {
  return (
   <AppNavigation/>
  )
}



// import React, { useEffect, useState } from 'react';
// import { Appearance, useColorScheme } from 'react-native';
// import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';

// import AppNavigation from './src/navigation/AppNavigation';

// export default function App() {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme === 'dark' ? DarkTheme : DefaultTheme);

//   useEffect(() => {
//     const subscription = Appearance.addChangeListener(handleAppearanceChange);
//     return () => subscription.remove();
//   }, []);

//   const handleAppearanceChange = ({ colorScheme }) => {
//     setTheme(colorScheme === 'dark' ? DarkTheme : DefaultTheme);
//   };

//   return (
//     <NavigationContainer theme={theme}>
//       <AppNavigation />
//     </NavigationContainer>
//   );
// }


// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [theme, setTheme] = useState('default');

//   const toggleTheme = () => {
//     if (theme === 'default') {
//       setTheme('dark');
//     } else if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('default');
//     }
//   };

//   const getThemeStyles = () => {
//     if (theme === 'dark') {
//       return styles.darkTheme;
//     } else if (theme === 'light') {
//       return styles.lightTheme;
//     } else {
//       return styles.defaultTheme;
//     }
//   };

//   return (
//     <View style={[styles.container, getThemeStyles()]}>
//       <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
//         <Text style={styles.themeButtonText}>Toggle Theme</Text>
//       </TouchableOpacity>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   defaultTheme: {
//     backgroundColor: '#F0F0F0',
//   },
//   darkTheme: {
//     backgroundColor: '#292929',
//   },
//   lightTheme: {
//     backgroundColor: '#FFFFFF',
//   },
//   themeButton: {
//     backgroundColor: '#E0E0E0',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   themeButtonText: {
//     color: '#333333',
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 18,
//     color: '#333333',
//   },
// });
