import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function AllocateBody({ data, navigation }) {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.leftText}>Req ID:</Text>
          <Text style={styles.cardTitle} onPress={() => navigation.navigate('AllocateRecruitment', { requirement_id: item.requirement_id, req_ID: item.req_ID, })}>{item.req_ID}</Text>
          {/* <Text style={styles.cardTitle} onPress={() => navigation.navigate('AllocateRecruitment', { requirement_id: item.requirement_id, req_ID: item.req_ID, })}>{item.req_ID}</Text> */}
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Job Title:</Text>
          <Text style={styles.rightText}>{item.req_Job_Title}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>JOB Type:</Text>
          <Text style={styles.rightText}>{item.job_Type}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Job Term:</Text>
          <Text style={styles.rightText}>{item.req_Term}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Duration:</Text>
          <Text style={styles.rightText}>{item.req_Duration}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Location:</Text>
          <Text style={styles.rightText}>{item.location}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Date:</Text>
          <Text style={styles.rightText}>{item.pDate}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Client:</Text>
          <Text style={styles.rightText}>{item.client}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>My Contact Person:</Text>
          <Text style={styles.rightText}>{item.contact_Person_Name}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Status:</Text>
          <Text style={styles.rightText}>{item.hold}</Text>
        </View>
      </View>
    )};

  return (
    <View >
      <Text style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center', color: '#1845f3', backgroundColor: '#e6f2ff', elevation: 21 }}>Recruiter Requirement</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.req_ID.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftText: {
    marginRight: 10,
    // fontSize:18,
    fontWeight: '900',
  },
  rightText: {
    marginLeft: 10,
    // fontsize:18,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 8,
  },
  cardTitle: {
    // fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right',
    color: '#0055ff'
  },
});



