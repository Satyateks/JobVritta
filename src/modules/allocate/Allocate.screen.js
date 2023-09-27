
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import AllocateBody from './components/AllocateBody';
import AllocateRecruitment from '../allocateRequirement/AllocateRecruitment.screen';

export default function AllocateScreen({navigation}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    };
    getToken();
    const interval = setInterval(() => {getDashboardData();},50000);
    return () => clearInterval(interval);
  }, []);
// console.log(setData.data)
  useEffect(() => {if (token) { getDashboardData()}},[token])
  
  const getDashboardData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.Allocate, {
      // const response = await fetch("https://api.jobvritta.com/api/Requirement_MAST?filter={%22fromDate%22:%222023-07-09T04:00:00.000Z%22,%22toDate%22:%222023-07-14T09:18:16.392Z%22,%22client%22:%22%22,%22end_Client%22:%22%22,%22contact_Person%22:%22%22,%22req_ID%22:%22%22,%22req_Hold_UnHoldStatus%22:null,%22req_Priority%22:null,%22served_status%22:null,%22reqType%22:null,%22req_Category%22:null,%22job_Type%22:null,%22req_Term%22:null,%22req_InterviewProcess%22:null,%22req_PostedBySalesManager%22:null,%22req_SubmittedByRecruiter%22:null,%22company%22:null,%22branch%22:null,%22team%22:null}&tb=1", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setData(data);
      return data || [];
    } catch (error) { console.log(error);
      return [];
    } finally { setLoading(false)}};
  
  return (
    <View>
      <AllocateBody data={data} navigation={navigation}/>
    </View>
  )
}


