
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Dialog from 'react-native-dialog';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../drawer';
import { VotingStyle } from './Voting_style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VotingBody({ questions, onSave, navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAskButton = () => {
    setDialogVisible(true);
  };

  const handleCancelButton = () => {
    setDialogVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setSelectedDate(currentDate);
    setShowDatePicker(false);
  };

  const showDatepicker = () => {setShowDatePicker(true);};
//   const handleSaveButton = () => { setDialogVisible(false); };
  const renderItem = ({ item }) => {
    return (
      <View style={VotingStyle.renderContainer}>
        <View style={VotingStyle.modelBg}>
          <Text style={VotingStyle.ModelQus}>
            {item.voting_Que_ID}:- {item.question}
          </Text>
          <Icon
            name="eye"
            size={21}
            color="green"
            onPress={() =>
              navigation.navigate('Answer', {
                que_id: item.voting_Que_ID,
                answer: item.submitted_Answer,
              })
            }
          />
        </View>
        <Text style={{ marginRight: 21 }}>MY ANSWER: {item.submitted_Answer === 1 ? 'Yes,' : item.submitted_Answer === 0 ? 'No,' : ' '}</Text>
          <Text style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>Expiry Date: {item.expiry_Date}</Text>
        <Text>Total Yes: {item.total_Yes}  <Text>Total NO: {item.total_No}</Text>
        </Text>
        <Text style={{ color: '#4d4dff' }} onPress={() => navigation.navigate('ViewAns', { que_id: item.voting_Que_ID })}>
          Total Answer: {item.total_Answer}
        </Text>
        {/* <Text>Submit Date: {item.submitted_Date}</Text> */}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={VotingStyle.container}>
      <Text style={VotingStyle.title}>Voting Page</Text>
      <View style={styles.styleLoginBtn}>
        <Button title="+ PUT YOUR QUOTE " onPress={handleAskButton} color="#e60099" />
      </View>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Ask a Question</Dialog.Title>
        <Dialog.Input placeholder="Enter your question" multiline onChangeText={(text) => setNewQuestion(text)} />
        <TouchableOpacity onPress={showDatepicker}>
          <Text>Select Expiry Date {selectedDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker value={selectedDate} mode="date" display="default" onChange={handleDateChange} />
        )}
        <Dialog.Button label="Save" onPress={()=> {
          onSave(newQuestion, selectedDate)
        setDialogVisible(false)
        } } />
        <Dialog.Button label="Cancel" onPress={handleCancelButton} />
      </Dialog.Container>
      <FlatList data={questions} renderItem={renderItem} keyExtractor={(item) => item.voting_Que_ID.toString()} />
    </SafeAreaView>
  );
}


// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, TouchableOpacity, FlatList, } from 'react-native';
// import Dialog from 'react-native-dialog';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { styles } from '../drawer';
// import { VotingStyle } from './Voting_style';

// export default function VotingBody({questions, handleSaveButton,  }) {
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [dialogVisible, setDialogVisible] = useState(false);

//   const handleAskButton = () => { setDialogVisible(true); };
  
//   const handleCancelButton = () => { setDialogVisible(false) };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || new Date();
//     setSelectedDate(currentDate);
//     setShowDatePicker(false);
//   };
//   const showDatepicker = () => { setShowDatePicker(true) };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={VotingStyle.renderContainer}>
//         <View style={VotingStyle.modelBg}>
//           <Text style={VotingStyle.ModelQus}>{item.voting_Que_ID}:-   {item.question}</Text>
//           <Icon name="eye" size={21} color="green" onPress={() => navigation.navigate('Answer', { que_id: item.voting_Que_ID, answer: item.submitted_Answer, })} />
//         </View>
//         <Text style={{ marginRight: 21, }}>MY ANSWER: {item.submitted_Answer === 1 ? 'Yes,' : item.submitted_Answer === 0 ? 'No,' : ' '}                <Text style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>Expiry Date: {item.expiry_Date}</Text></Text>
//         <Text>Total Yes: {item.total_Yes}       <Text>Total NO: {item.total_No}</Text></Text>
//         <Text style={{ color: "#4d4dff" }} onPress={() => navigation.navigate('ViewAns', { que_id: item.voting_Que_ID, })}>Total Answer: {item.total_Answer}</Text>
//         {/* <Text>Submit Date: {item.submitted_Date}</Text> */}
//       </View>
//     );
//   };

//     return (
//         <View style={VotingStyle.container}>
//           <Text style={VotingStyle.title}>Voting Page</Text>
//           <View style={styles.styleLoginBtn}>
//             <Button title="+ PUT YOUR QUOTE " onPress={handleAskButton} color="#e60099" />
//           </View>
//           <FlatList
//             data={questions}
//             renderItem={renderItem}
//           keyExtractor={(item) => item.voting_Que_ID.toString()}
//           />
//           <Dialog.Container visible={dialogVisible}>
//             <Dialog.Title>Ask a Question</Dialog.Title>
//             <Dialog.Input
//               placeholder="Enter your question"
//               multiline
//               onChangeText={(text) => setNewQuestion(text)}
//             />
//             <TouchableOpacity onPress={showDatepicker}>
//                 <Text>Select Expiry Date {selectedDate.toDateString()}</Text>
//             </TouchableOpacity>
    
//             {showDatePicker && (
//               <DateTimePicker
//                 value={selectedDate}
//                 mode="date" display="default"
//                 onChange={handleDateChange}
//               />
//             )}
//             <Dialog.Button label="Save" onPress={handleSaveButton} />
//             <Dialog.Button label="Cancel" onPress={handleCancelButton} />
//           </Dialog.Container>
//         </View>
//       );
// }