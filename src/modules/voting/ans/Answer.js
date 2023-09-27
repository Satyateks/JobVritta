
import React, { useState, useEffect } from 'react';
import { View,Text, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../../constants';
import { AnsBody } from './components/AnsBody';
import { VotingStyle } from '../Voting_style';
import { RadioButton } from 'react-native-paper';

export const Answer = ({ route }) => {
  const { que_id, answer } = route.params;
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const token = await AsyncStorage.getItem('token');
    //     setToken(token);
    //     const response = await fetch(API_ENDPOINTS.Question + que_id, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer ' + token,
    //       } });
    //     if (response.ok) {
    //       const result = await response.json();
    //       setQuestion(result);
    //     } else { console.error('Error fetching question:', response.status) }
    //   } catch (error) {
    //     console.error('Error fetching question:', error);
    //   } finally { setLoading(false); }
    // }; fetchData(); 
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setToken(token);
        const response = await fetch(API_ENDPOINTS.Question + que_id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
    
        if (response.ok) {
          const result = await response.json();
          setQuestion(result);
        } else {
          console.error('Error fetching question:', response.status);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
  }, [que_id]);

  const submitAnswer = async () => {
    // const answer = selectedAnswer === 'yes' ? '1' : '0';
    let answer = (selectedAnswer === null || selectedAnswer === "no") ? "0" : "1";
    try {
      const response = await fetch(API_ENDPOINTS.Answer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ que_id: question?.voting_Que_ID, submitted_Answer: answer }),
      });
      if (response.ok) {
        setAnswerSubmitted(true);
      } else {
        console.error('Failed to submit answer');
      }
    } catch (error) {
      console.error(error);
    }
  };
return(
  <View>
    <AnsBody answerSubmitted={answerSubmitted} selectedAnswer={selectedAnswer} question={question} submitAnswer={submitAnswer} loading={loading}/>
  </View>
)

  // const renderAnswer = () => {
  //   if (question?.submitted_Answer === 1 || question?.submitted_Answer === 0) {
  //     return (
  //       <View style={VotingStyle.ansContainer}>
  //         <Text style={VotingStyle.ans}>My Answer: {question.submitted_Answer === 1 ? 'Yes' : question.submitted_Answer === 0 ? 'No' : ' '}</Text>
  //         <Text style={VotingStyle.ans}>{question.question}</Text>
  //         <Text style={VotingStyle.ans}>Total Yes:     {question.total_Yes}</Text>
  //         <Text style={VotingStyle.ans}>Total No:      {question.total_No}</Text>
  //         <Text style={VotingStyle.ans}>Percentage of Yes:  {question.yes_Per}</Text>
  //         <Text style={VotingStyle.ans}>Percentage of No:  {question.no_Per}</Text>
  //         <Text style={VotingStyle.ans}>Total Answer: {question.total_Answer}</Text>
  //         <Text style={VotingStyle.ans}>Submitted Date: {question.submitted_Date}</Text>
  //         <Text style={VotingStyle.ans}>Closing Date: {question.expiry_Date}</Text>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Text style={VotingStyle.ansBG}>{question?.question}</Text>
  //         {answerSubmitted ? (
  //           <View style={VotingStyle.ansSubmit}>
  //             <Text style={VotingStyle.ans}>Your Answer:   {selectedAnswer === 'yes' ? 'Yes' : 'No'}</Text>
  //             <Text style={VotingStyle.ans}>Total Yes:     {question.total_Yes}</Text>
  //             <Text style={VotingStyle.ans}>Total No:      {question.total_No}</Text>
  //             <Text style={VotingStyle.ans}>Percentage of Yes:  {question.yes_Per}</Text>
  //             <Text style={VotingStyle.ans}>Percentage of No:  {question.no_Per}</Text>
  //             <Text style={VotingStyle.ans}>Total Answer: {question.total_Answer}</Text>
  //             <Text style={VotingStyle.ans}>Submitted Date: {question.submitted_Date}</Text>
  //             <Text style={VotingStyle.ans}>Closing Date: {question.expiry_Date}</Text>
  //           </View>
  //         ) : (
  //           <View  >
  //             <View style={{ flexDirection: 'row', margin: 11, justifyContent: 'space-between' }}>
  //               <Text style={{ marginRight: 10 }}>Yes</Text>
  //               <RadioButton
  //                 value="1" status={selectedAnswer === 'yes' ? 'checked' : 'unchecked'}
  //                 onPress={() => setSelectedAnswer('yes')}
  //                 disabled={answerSubmitted} // style={{marginRight:100, }}
  //               />
  //               <Text style={{ marginLeft: 80 }}>No</Text>
  //               <RadioButton
  //                 value="0"
  //                 status={selectedAnswer === 'no' ? 'checked' : 'unchecked'}
  //                 onPress={() => setSelectedAnswer('no')}
  //                 disabled={answerSubmitted}
  //               />
  //             </View>
  //             {question?.submitted_Answer === null && (
  //               <Button
  //                 title="Submit Answer"
  //                 onPress={submitAnswer}                  
  //                 disabled={!selectedAnswer || answerSubmitted}
  //               />
  //             )}
  //           </View>
  //         )}
  //       </>
  //     );
  //   }
  // };
  // return (
  //   <View style={VotingStyle.ansView}>
  //     <View style={VotingStyle.ansmodel}>
  //       {/* <Text style={styles.title}> ANSWER </Text> */}
  //       {loading ? ( <ActivityIndicator size="large" color="#0000ff" />
  //       ) : ( renderAnswer() )}
  //     </View>
  //   </View>
  // );

};

/**

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../constants';

export const Answer = ({ route }) => {
  const { que_id, ansSubmit } = route.params;
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setToken(token);
        const response = await fetch(API_ENDPOINTS.Question + que_id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        if (response.ok) {
          const result = await response.json();
          setQuestion(result);
        } else {
          console.error('Error fetching question:', response.status);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [que_id]);

  useEffect(() => {
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
  }, [route]);

  const submitAnswer = async () => {
    let answer = selectedAnswer === null || selectedAnswer === 'no' ? '0' : '1';
    try {
      const response = await fetch(API_ENDPOINTS.Answer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ Que_ID: question?.voting_Que_ID, Submitted_Answer: answer }),
      });
      if (response.ok) {
        setAnswerSubmitted(true);
      } else {
        console.error('Failed to submit answer');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderAnswer = () => {
    if (question?.submitted_Answer === '1') {
      return (
        <View style={{ flex: 1, padding: 11, backgroundColor: '#e6e6ff', borderRadius: 21, margin: 11 }}>
          <Text>Question: {question.question}</Text>
          <Text>Your Answer: {question.submitted_Answer}</Text>
          <Text>Submitted Date: {question.submitted_Date}</Text>
          <Text>Closing Date: {question.expiry_Date}</Text>
          <Text>Yes: {question.total_Yes}</Text>
          <Text>No: {question.total_No}</Text>
          <Text>Total Answer: {question.total_Answer}</Text>
        </View>
      );
    } else if (question?.submitted_Answer === '0') {
      return (
        <View style={{ flex: 1, padding: 11, backgroundColor: '#e6e6ff', borderRadius: 21, margin: 11 }}>
          <Text>Question: {question.question}</Text>
          <Text>Your Answer: {question.submitted_Answer}</Text>
          <Text>Submitted Date: {question.submitted_Date}</Text>
          <Text>Closing Date: {question.expiry_Date}</Text>
          <Text>Yes: {question.total_Yes}</Text>
          <Text>No: {question.total_No}</Text>
          <Text>Total Answer: {question.total_Answer}</Text>
        </View>
      );
    } else {
      return (
        <>
          <Text style={{ fontSize: 18 }}>{question?.question}</Text>
          {answerSubmitted ? (
            <Text>Your Answer: {selectedAnswer === 'yes' ? 'Yes' : 'No'}</Text>
          ) : (
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ marginRight: 10 }}>Yes</Text>
              <RadioButton
                value="yes"
                status={selectedAnswer === 'yes' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedAnswer('yes')}
                disabled={answerSubmitted}
              />
              <Text style={{ marginRight: 10 }}>No</Text>
              <RadioButton
                value="no"
                status={selectedAnswer === 'no' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedAnswer('no')}
                disabled={answerSubmitted}
              />
              <Button
                title="Submit Answer"
                onPress={submitAnswer}
                disabled={!selectedAnswer || answerSubmitted}
              />
            </View>
          )}
        </>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Answer Page</Text>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          renderAnswer()
        )}
      </View>
    </View>
  );
};
 */


/*
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Que = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const response = await fetch('https://api.jobvritta.com/api/Voting_Questions/queDetails?que_id=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setQuestions(result);
          console.log(result)
        } else {
          console.error('Error fetching questions:', response.status);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, padding: 11, backgroundColor: '#ff9baf', borderRadius: 21, margin: 11 }}>
        <Text>Question: {item.question}</Text>
        <Text>Closing Date: {item.expiry_Date}</Text>
        <Text>Yes: {item.total_Yes}</Text>
        <Text>No: {item.total_No}</Text>
        <Text>Total Answer: {item.total_Answer}</Text>
        <Text>Submitted Date: {item.submitted_Date}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 31, textAlign: 'center' }}>Voting Page</Text>
      <FlatList
        data={questions}
        renderItem={renderItem}
        // keyExtractor={(item) => item.voting_Que_ID.toString()}
      />
    </View>
  );
};
*/



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const Que = () => {
//     const [questions, setQuestions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [answerSubmitted, setAnswerSubmitted] = useState(false);
//     const [token, setToken] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');

//                 const response = await fetch('https://api.jos-queDetails?que_id=1', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: 'Bearer ' + token,
//                     },
//                 });

//                 if (response.ok) {
//                     const result = await response.json();
//                     setQuestions([result]); // Store the response in an array for the FlatList
//                 } else {
//                     console.error('Error fetching questions:', response.status);
//                 }
//             } catch (error) {
//                 console.error('Error fetching questions:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//         fetchAnswer();
//     }, []);


//     const submitAnswer = async () => {
//         try {
//             // Make an API call to save the answer
//             const response = await fetch('https://api.jobvri-answer?Submitted_Answer=0&Que_ID=12', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: 'Bearer ' + token
//                 },
//                 body: JSON.stringify({ answer: selectedAnswer })
//             });

//             if (response.ok) {
//                 // Answer submitted successfully
//                 setAnswerSubmitted(true);
//             } else {
//                 // Handle error case
//                 console.error('Failed to submit answer');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };


//     const fetchAnswer = async () => {
//         try {
//             const response = await fetch('https://api.job-addAnswer?Submitted_Answer=0&Que_ID=12', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: 'Bearer ' + token
//                 }
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 if (result.answer) {
//                     // Answer has been submitted
//                     setAnswerSubmitted(true);
//                 }
//             } else {
//                 console.error('Failed to fetch answer');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };


//     const renderItem = ({ item }) => {
//         return (
//             <View style={{ flex: 1, padding: 11, backgroundColor: '#e6e6ff', borderRadius: 21, margin: 11 }}>
//                 <Text>Question: {item.question}</Text>
//                 <Text>Closing Date: {item.expiry_Date}</Text>
//                 <Text>Yes: {item.total_Yes}</Text>
//                 <Text>No: {item.total_No}</Text>
//                 <Text>Total Answer: {item.total_Answer}</Text>
//                 <Text>Submitted Date: {item.submitted_Date}</Text>
//             </View>
//         );
//     };

//     if (loading) {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     return (
//         <View style={{ flex: 1 }}>
//              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text style={{ fontSize: 24, marginBottom: 20 }}>Answer Page</Text>
//                 {answerSubmitted ? (
//                     <FlatList
//                         data={questions}
//                         renderItem={renderItem}
//                         keyExtractor={(item) => item.voting_Que_ID.toString()}
//                     />
//                 ) : (
//                     <>
//                         <Text style={{ fontSize: 18 }}>put your answer ? (<RadioButton></RadioButton>) do not display, if ans is not submited then redio buttton block display, ans submitted and display in screen on this code    {item.question}</Text>
//                         {/* <Text>Question: {item.question}</Text> */}
//                         <View style={{ flexDirection: 'row', marginTop: 10 }}>
//                             <Text style={{ marginRight: 10 }}>Yes</Text>
//                             <RadioButton
//                                 value="1"
//                                 status={selectedAnswer === 'yes' ? 'checked' : 'unchecked'}
//                                 onPress={() => setSelectedAnswer('yes')}
//                                 disabled={answerSubmitted}
//                             />
//                             <Text style={{ marginRight: 10 }}>No</Text>
//                             <RadioButton
//                                 value="0"
//                                 status={selectedAnswer === 'no' ? 'checked' : 'unchecked'}
//                                 onPress={() => setSelectedAnswer('no')}
//                                 disabled={answerSubmitted}
//                             />
//                         </View>
//                         <Button
//                             title="Submit Answer"
//                             onPress={submitAnswer}
//                             disabled={!selectedAnswer || answerSubmitted}
//                         />
//                     </>
//                 )}
//             </View>
//             <FlatList
//                 data={questions}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.voting_Que_ID.toString()}
//             />
//         </View> )};



