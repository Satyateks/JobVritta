import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_ENDPOINTS } from '../../constants';
import CompanyPObody from './components/CompanyPObody';


const CompanyPO = () => {
    // const { name } = route.params;
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            setToken(token);
        };
        getToken();
        const interval = setInterval(() => {
            getDashboardData(); // Fetch data every 10 seconds
            getDayWiseData();
        }, 900000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (token) {
            getDashboardData();
            getDayWiseData();
        }
    }, [token])

    const getDashboardData = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.CompanyPO, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData1(result);
        } catch (error) {
            console.error(error);
        }
    };

    const getDayWiseData = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.CompanyPODayWise, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData2(result);
            // console.log("console data 2 {'\n'}", data2)
        } catch (error) {
            console.error(error);
        }
    };

 return(
    <View>
        <CompanyPObody data1={data1} data2={data2}/>
    </View>
 )
}

export default CompanyPO;


