
import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import AddUser from '../modules/user/AddUser';
import Users from '../modules/user/Users';
import VotingPage from '../modules/voting/VotingPage';

const Bottom = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Bottom.Navigator screenOptions={{ tabBarHideOnKeyboard: true, }}>
            <Bottom.Screen name="Branchs" component={VotingPage} options={{ headerShown: false, tabBarLabel: 'Branch', tabBarIcon: () => (<Icon name='archive' size={31} color="#005580" />) }} />
            <Bottom.Screen name="Branch" component={AddUser} options={{ headerShown: false, tabBarLabel: 'Branch', tabBarIcon: () => (<Icon name='archive' size={31} color="#005580" />) }} />
            <Bottom.Screen name="Company" component={Users} options={{ headerShown: false, tabBarLabel: 'Company', tabBarIcon: () => (<Icon name='spotify' size={31} color="#215580" />) }} />
        </Bottom.Navigator>
    )
}

export default TabNavigation;



