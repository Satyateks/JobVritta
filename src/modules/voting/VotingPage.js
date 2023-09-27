
import React, { useState, useEffect } from 'react';
import { View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import VotingBody from './VotingBody';
import { SafeAreaView } from 'react-native-safe-area-context';

const VotingPage = ({ navigation, }) => {
  const [token, setToken] = useState(null);
  const [questions, setQuestions] = useState([]);
  // const [newQuestion, setNewQuestion] = useState('');
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [showDatePicker, setShowDatePicker] = useState(false);
  // const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token)
    };
    getToken();
    const interval = setInterval(() => { fetchQuestions(); }, 1000);
    // const interval = setInterval(fetchQuestions, 1000);
    return () => clearInterval(interval)
  }, []);
  useEffect(() => { if (token) { fetchQuestions(); } }, [token]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.Voting, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      });
      const result = await response.json();
      setQuestions(result);
    } catch (error) { //  console.error('first api console error ', error);
    }
  };

  const handleSaveButton = async (newQuestion, selectedDate) => {
  
    try {
      const response = await fetch(API_ENDPOINTS.Voting, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }, 
        body: JSON.stringify({
          question: newQuestion,
          expiry_Date: selectedDate.toISOString(),
        }),
      });
      console.log("POST API BODY CONSOLE DATA  ",JSON.stringify({question: newQuestion,expiry_Date: selectedDate.toISOString()}))
      if (response.ok) {
        // setDialogVisible(false);
        fetchQuestions();
      } else { console.info('Failed to save question') }
    } catch (error) { console.error(error) }
  };
 
return(
  <SafeAreaView>
    <VotingBody onSave={handleSaveButton} questions={questions} navigation={navigation} />
  </SafeAreaView>
)
};
export default VotingPage;





