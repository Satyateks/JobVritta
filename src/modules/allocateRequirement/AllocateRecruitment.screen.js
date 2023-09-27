import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { API_ENDPOINTS } from '../../constants';
import { AllocateRecruitmentBody } from './components';


const AllocateRecruitment = ({ route }) => {
  const [data2, setData2] = useState(null);
  const [token, setToken] = useState(null);
  const [currentreqID, setCurrentreqID] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [newAPIData, setNewAPIData] = useState([]);
  const navigation = useNavigation();


  const getDayWiseData = async () => {
    try {
      const response = await fetch(
        API_ENDPOINTS.AllocateRequirement + currentreqID,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.ok) {
        const result2 = await response.json();
        setData2(result2);
      } else {
        console.log('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNewAPIData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.AllocateReqID + currentreqID, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.ok) {
        const newAPIData = await response.json();
        setNewAPIData(newAPIData);
      } else {
        console.log('Error fetching new API data:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setToken(token);
      } catch (error) {
        console.error(error);
      }
    }
    const interval = setInterval(() => {
      getDayWiseData();
      retrieveSelectedItems();
    }, 90000);

    const initializeComponent = async () => {
      await getToken();
      const { req_ID } = route.params;
      setCurrentreqID(req_ID);
    };
    initializeComponent();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initializeData = () => {
      if (token && currentreqID) {
        getDayWiseData();
        getNewAPIData();
        retrieveSelectedItems();
      }
    };
    initializeData();
  }, [token, currentreqID]);

  useEffect(() => { storeSelectedItems() }, [selectedItems]);


  const storeSelectedItems = async () => {
    try {
      const selectedItemsJSON = JSON.stringify(selectedItems);
      await AsyncStorage.setItem('selectedItems', selectedItemsJSON);
    } catch (error) { console.error(error); }
  };

  const retrieveSelectedItems = async () => {
    try {
      const selectedItemsJSON = await AsyncStorage.getItem('selectedItems');
      if (selectedItemsJSON) {
        const parsedSelectedItems = JSON.parse(selectedItemsJSON);
        setSelectedItems(parsedSelectedItems);
        setIsSubmitEnabled(parsedSelectedItems.length > 0);
      }
    } catch (error) { console.error(error); }
  };

  const handleSubmit = async () => {
    try {
      const items = selectedItems.map((item) => ({
        Recruiter_ID: item.login_ID,
        Req_ID: currentreqID,
        AllocateID: item.allocateID,
      }));
      const response = await fetch(
        API_ENDPOINTS.AllocateReqID,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify(items),
        }
        );
        console.log("console url data", API_ENDPOINTS.AllocateReqID)
      console.log("Body  ", JSON.stringify(items),)
      if (response.ok) {
        console.log('Items successfully sent to the server.');
      } else {
        console.log('Error sending items to the server. Status:', response.status);
      }
    } catch (error) {
      console.log('Error sending items to the server:', error);
    }
    setSelectedItems([]);
    navigation.goBack();
  };

  return (
    <View>
      <AllocateRecruitmentBody data2={data2} newAPIData={newAPIData} selectedItems={selectedItems} handleSubmit={handleSubmit} setSelectedItems={setSelectedItems} />
    </View>
  );
};

export default AllocateRecruitment;



