
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import ECIbody from './components/ECIbody';

export default function ECIScreen() {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [token, setToken] = useState(null);
    const [ errors, seterrors] =useState()

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            setToken(token);
        };
        getToken();
        const interval = setInterval(() => {
            getDashboardData(); // Fetch data every 10 seconds
            getDayWiseData(); // fetch data every 9 Min
        }, 90000);
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
            const response = await fetch(API_ENDPOINTS.BranchECI, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData1(result);
        } catch (error) {
            console.error(error);
            seterrors(error)
        }
    };

    const getDayWiseData = async () => {
        try {
            const response = await fetch(API_ENDPOINTS.BranchECIDayWise, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData2(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <ECIbody data1={data1} data2={data2} net={errors}/>
            {/* {error && <Text style={{fontSize:21}}>{error.toString()}</Text>} */}
        </View>
    );
}



