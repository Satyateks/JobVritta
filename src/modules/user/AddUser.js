import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import { FontFamily, FontSize } from '../../theme';
import { AdduserBody } from './components';


const AddUser = () => {
    const [token, setToken] = useState(null);
    const [BranchDD, setBranchDD] = useState([]);
    const [CompanyDD, setCompanyDD] = useState([]);
    const [Roles, setRoles] = useState([]);
    const [inputValues, setInputValues] = useState(null);

    // const [Name, setName] = useState('');
    // const [Email, setEmail] = useState('');
    // const [login_Name, setlogin_Name] = useState('');
    // const [Password, setPassword] = useState('');
    // const [PhoneNo, setPhoneNo] = useState('');
    // const [ExtNo, setExtNo] = useState('');
    // const [CallNo, setCallNo] = useState('');
    // const [GtalkID, setGtalkID] = useState('');
    // const [YahooID, setYahooId] = useState('');
    // const [isStatus, setStatus] = useState(false);
    // const [isTempActive, setTempActive] = useState(false);
    // const [selectedWorkFrom, setSelectedWorkFrom] = useState();
    // const [selecteds, setSelecteds] = useState('');
    // const [CompanyDD, setCompanyDD] = useState([]);
    // const [selectedBranchDD, setSelectedBranchDD] = useState('');
    // const [selectedBranch, setSelectedBranch] = useState('');
    // const [BranchDD, setBranchDD] = useState([]);
    // const [selectedRoles, setSelectedRoles] = useState([]);
    // const [Roles, setRoles] = useState([]);


    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            setToken(token);
        };
        getToken();
        const interval = setInterval(() => {
            getCompanydropdown();
            getBranchdropdown();
            getRoledropdown();
        }, 900000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (token) {
            getCompanydropdown();
            getBranchdropdown();
            getRoledropdown();
        }
    }, [token])

    const getCompanydropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownCompanyList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setCompanyDD(result);
        } catch (error) {
            console.error(error);
        }
    };
    const getBranchdropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownBranchList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setBranchDD(result);
            // setBranch(result);
            // setBranch(result[0]?.branch_ID.toString());
        } catch (error) {
            console.error(error);
        }
    };
    const getRoledropdown = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.DropDownRoleList, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setRoles(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFormSubmit = async (inputData) => {
        try {

            const roles = [];
            selectedRoles?.forEach((role) => {roles.push({ role_ID: parseInt(role) });});

            // const branches = [];
            // selectedBranchDD?.forEach((branch) => {branches.push({ branch_ID: parseInt(branch) }); });

            // let obj = BranchDD.find((item) => item.branch_ID === selectedBranch)
            // console.log(obj)
            // const inputValues = {
            //     user_Name: Name,
            //     user_EmailID: Email,
            //     branchName: obj?.branchName,
            //     branch_ID: selectedBranch,
            //     login_Name: login_Name,
            //     login_Password: Password,
            //     temp_Inactive: isTempActive,
            //     user_Cell_No: CallNo,
            //     user_Ext_No: ExtNo,
            //     user_GtalkID: GtalkID,
            //     user_Name: Name,
            //     user_PhoneNo: PhoneNo,
            //     user_Status: isStatus,
            //     user_YahooID: YahooID,
            //     workFrom: selectedWorkFrom
            // };
           
            console.log("click button")
            console.log("url data url data ",API_ENDPOINTS.UserSubmitss + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),)
            const response = await fetch(
                API_ENDPOINTS.UserSubmitss + JSON.stringify(roles) + "&branches=" + JSON.stringify(branches),
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                    body: JSON.stringify(inputValues),
                }
            );
            notification();
            console.log(inputValues);
            if (response.ok) {
                const responseData = await response.json();
                const login_ID = responseData.login_ID;
                console.log('POST request successful.', login_ID);
            } else {
                console.warn('Error sending items to the server. Status:', response.status);
                const massage = await response.text()
                console.log(massage)
            }
        } catch (error) { console.warn('Error sending items to the server:', error); };
    }
    // console.log("inputValue console data ", inputValues)

        return (
        <View>
            <AdduserBody Roles={Roles} BranchDD={BranchDD} CompanyDD={CompanyDD} handleFormSubmit={handleFormSubmit} setInputValues={setInputValues} />
        </View>
    )
};

const notification = () => {
    return (
        <View>
            <Text style={{ color: 'green', fontFamily: FontFamily.bold, fontSize: FontSize.xl }}> From Submit successfully </Text>
        </View>
    )
}

export default AddUser;






