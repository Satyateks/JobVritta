import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VotingPage from '../../VotingPage';
import { useState } from 'react';
import { ViewAnsStyle } from '../ViewAnsStyle';

export default ViewAnsBody = ({ route, data }) => {
  const [loading, setLoading] = useState();
  const navigation = useNavigation(VotingPage);

  const renderItem = ({ item }) => {
    return (
      <View style={ViewAnsStyle.card}>
        <View style={ViewAnsStyle.container}>
          <Text style={ViewAnsStyle.leftText}>QUESTION NUMBER</Text>
          <Text style={ViewAnsStyle.rightText}>{item.que_ID}</Text>
        </View>
        <View style={ViewAnsStyle.container}>
          <Text style={ViewAnsStyle.leftText}>USER NAME</Text>
          <Text style={ViewAnsStyle.rightText}>{item.userName}</Text>
        </View>
        <View style={ViewAnsStyle.container}>
          <Text style={ViewAnsStyle.leftText}>SUBMITTED ANSWER</Text>
          <Text style={ViewAnsStyle.rightText}>{item.submitted_Answer}</Text>
        </View>
        <View style={ViewAnsStyle.container}>
          <Text style={ViewAnsStyle.leftText}>SUBMITTED DATE</Text>
          <Text style={ViewAnsStyle.rightText}>{item.submitted_Date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#b3e6ff'}}>
      <View style={ViewAnsStyle.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={ViewAnsStyle.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={ViewAnsStyle.topBarTitle}>TOTAL ANSWER</Text>
        <View style={ViewAnsStyle.placeholderView} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20 }}>
              {data.length === 0 ? 'No Ans' : null}
            </Text>
          )}
        />
       )} 
    </View>
  );

}

