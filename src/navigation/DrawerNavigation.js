
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../modules/drawer/CustomDrawer';
// import BottomNavigation from './TabNavigation';

import ECIScreen from '../modules/branchECI/ECI.screen';
import POscreen from '../modules/branchPO/PO.screen';
import MarginScreen from '../modules/branchMargin/Margin.Screen';
import SubmissionScreen from '../modules/branchSubmission/Submission.screeen';

import CompanyPO from '../modules/companyPO/CompanyPO.screen';
import CompanyECIscreen from '../modules/companyECI/CompanyECI.screen';
import CompanyMargin from '../modules/companyMargin/CompanyMargin.screen';
import CompanySubmission from '../modules/companySubmission/CompanySubmission.screen';

import VotingPage from '../modules/voting/VotingPage';
import { Answer } from '../modules/voting/ans/Answer';
import ViewAnsScreen from '../modules/voting/viewTotalAns/ViewAnsScreen';

import AllocateScreen from '../modules/allocate/Allocate.screen';
import AllocateRecruitment from '../modules/allocateRequirement/AllocateRecruitment.screen';
import Users from '../modules/user/Users';
import AddUser from '../modules/user/AddUser';
import TabNavigation from './TabNavigation';


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            {/* <Drawer.Navigator>   */}

            <Drawer.Screen name="JOBVRITTA" component={TabNavigation} options={{ headerTitle: false, headershown: false }} />
            <Drawer.Screen name="PO" component={POscreen} options={{ headershown: false, tabBarIcon: () => (<Icon name='cog' size={31} color="#34bfff" />) }} />
            <Drawer.Screen name="ECI" component={ECIScreen} options={{ headershown: false, }} />
            <Drawer.Screen name="Margin" component={MarginScreen} options={{ headerShown: false, }} />
            <Drawer.Screen name="Submission" component={SubmissionScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="C_PO" component={CompanyPO} options={{ headerShown: false, }} />
            <Drawer.Screen name="C_ECI" component={CompanyECIscreen} options={{ headerShown: false, }} />
            <Drawer.Screen name="C_Margin" component={CompanyMargin} options={{ headerShown: false, }} />
            <Drawer.Screen name="C_Submission" component={CompanySubmission} options={{ headerShown: false, }} />
            <Drawer.Screen name="VotingPage" component={VotingPage} options={{ headerShown: false, }} />
            <Drawer.Screen name="ViewAns" component={ViewAnsScreen} options={{ headerShown: false, }} />
            <Drawer.Screen name="Answer" component={Answer} options={{ headerShown: false, }} />
            <Drawer.Screen name="Allocate" component={AllocateScreen} options={{ headerShown: false, }} />
            <Drawer.Screen name="AllocateRecruitment" component={AllocateRecruitment} options={{ headerShown: false }} />
            <Drawer.Screen name="Users" component={Users} options={{ headerShown: false }} />
            <Drawer.Screen name="AddUser" component={AddUser} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
