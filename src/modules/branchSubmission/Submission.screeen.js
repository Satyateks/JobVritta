import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../drawer/Style';
import SubmissionBody from './components/SubmissionBody';


export default function SubmissionScreen() {
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
            const response = await fetch('https://api.jobvritta.com/api/dashboard/submission', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData1(result);
            // console.log('data1 {"\n"}', data1)
        } catch (error) {
            console.error(error);
        }
    };

    const getDayWiseData = async () => {
        try {
            const response = await fetch('https://api.jobvritta.com/api/dashboard/submissionDayWise', {
                method: 'GET',
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
        <SubmissionBody data1={data1} data2={data2}/>
    </View>
   )
}