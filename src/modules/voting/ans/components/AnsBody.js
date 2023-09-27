import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../../../drawer/Style';
import { VotingStyle } from '../../Voting_style';

export const AnsBody = ({ route, question, answerSubmitted,submitAnswer,loading }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

 console.log("question", question)
//  console.log("selected answer ", selectedAnswer)
//  console.log("Answe submited  ", answerSubmitted)
//  console.log("aubmitt answer  ", submitAnswer)

    const renderAnswer = () => {
        if (question?.submitted_Answer === 1 || question?.submitted_Answer === 0) {
          return (
            <View style={VotingStyle.ansContainer}>
              <Text style={VotingStyle.ans}>My Answer: {question.submitted_Answer === 1 ? 'Yes' : question.submitted_Answer === 0 ? 'No' : ' '}</Text>
              <Text style={VotingStyle.ans}>{question.question}</Text>
              <Text style={VotingStyle.ans}>Total Yes:     {question.total_Yes}</Text>
              <Text style={VotingStyle.ans}>Total No:      {question.total_No}</Text>
              <Text style={VotingStyle.ans}>Percentage of Yes:  {question.yes_Per}</Text>
              <Text style={VotingStyle.ans}>Percentage of No:  {question.no_Per}</Text>
              <Text style={VotingStyle.ans}>Total Answer: {question.total_Answer}</Text>
              <Text style={VotingStyle.ans}>Submitted Date: {question.submitted_Date}</Text>
              <Text style={VotingStyle.ans}>Closing Date: {question.expiry_Date}</Text>
            </View>
          );
        } else {
          return (
            <>
              <Text style={VotingStyle.ansBG}>{question?.question}</Text>
              {answerSubmitted ? (
                <View style={VotingStyle.ansSubmit}>
                  <Text style={VotingStyle.ans}>Your Answer:   {selectedAnswer === 'yes' ? 'Yes' : 'No'}</Text>
                  <Text style={VotingStyle.ans}>Total Yes:     {question.total_Yes}</Text>
                  <Text style={VotingStyle.ans}>Total No:      {question.total_No}</Text>
                  <Text style={VotingStyle.ans}>Percentage of Yes:  {question.yes_Per}</Text>
                  <Text style={VotingStyle.ans}>Percentage of No:  {question.no_Per}</Text>
                  <Text style={VotingStyle.ans}>Total Answer: {question.total_Answer}</Text>
                  <Text style={VotingStyle.ans}>Submitted Date: {question.submitted_Date}</Text>
                  <Text style={VotingStyle.ans}>Closing Date: {question.expiry_Date}</Text>
                </View>
              ) : (
                <View  >
                  <View style={{ flexDirection: 'row', margin: 11, justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: 10 }}>Yes</Text>
                    <RadioButton
                      value="1" status={selectedAnswer === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setSelectedAnswer('yes')}
                      disabled={answerSubmitted} // style={{marginRight:100, }}
                    />
                    <Text style={{ marginLeft: 80 }}>No</Text>
                    <RadioButton
                      value="0"
                      status={selectedAnswer === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setSelectedAnswer('no')}
                      disabled={answerSubmitted}
                    />
                  </View>
                  {question?.submitted_Answer === null && (
                    <Button
                      title="Submit Answer"
                      onPress={submitAnswer}                  
                      disabled={!selectedAnswer || answerSubmitted}
                    />
                  )}
                </View>
              )}
            </>
          );
        }
      };    
      return (
        <View style={VotingStyle.ansView}>
               <View style={VotingStyle.ansmodel}>
                {/* <Text>{question.voting_Que_ID}</Text> */}
            <Text style={styles.title}> ANSWER </Text>
            {loading ? ( <ActivityIndicator size="large" color="#0000ff" />
            ) : ( renderAnswer() )}
          </View> 
        </View>
      );
}