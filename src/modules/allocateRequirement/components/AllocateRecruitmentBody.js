import { View, Text, FlatList, ImageBackground, ActivityIndicator, Button } from 'react-native';
import { styles } from '../../drawer';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';


export default function AllocateRecruitmentBody({ data2, newAPIData, selectedItems, handleSubmit, setSelectedItems }) {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleCheckboxChange = (item) => {
    if (item.allocateID !== 0) { return }
    const updatedSelectedItems = [...selectedItems];
    const index = updatedSelectedItems.indexOf(item);
    if (index > -1) {
      updatedSelectedItems.splice(index, 1);
    } else { updatedSelectedItems.push(item); }
    setSelectedItems(updatedSelectedItems);
    setIsSubmitEnabled(updatedSelectedItems.length > 0);
  };

  const renderHeader = () => (
    <View>
      {newAPIData && newAPIData.length > 0 && (
        <View>
          {newAPIData.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.headerText}>{item.req_ID}</Text>
              <Text style={styles.headerText}>{item.req_PostedBySalesManager_Name}</Text>
              <Text style={styles.headerText}>{item.req_Job_Title}</Text>
              <Text style={styles.headerText}>{item.req_Duration}</Text>
              <Text style={styles.headerText}>{item.city_Name}</Text>
            </View>
          ))}
        </View>
      )}
      {data2 && data2.length > 0 && (
        <View>
          {data2.map((item, index) => (
            <View style={styles.row} key={index}>
              <CheckBox
                // style={styles.checkbox}
                value={item.allocateID === 0 ? selectedItems.includes(item) : true}
                onValueChange={() => handleCheckboxChange(item)}
                disabled={item.allocateID !== 0}
              />
              <Text style={styles.cell1}>{item.user_Name}</Text>
            </View>
          ))}
        </View>
      )}<View style={{ marginBottom: 35 }}>
        <Button title="Submit" onPress={handleSubmit} disabled={!isSubmitEnabled} />
      </View>
    </View>
  );
  
 return (
    <View>
      <ImageBackground
        source={{ uri: 'https://wallpaperaccess.com/full/2044489.jpg' }}
        style={{ height: '100%' }}
      >
        <View style={{ flexDirection: 'row', marginTop: 11, borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
          <Text style={styles.headerText} >Req ID</Text>
          <Text style={styles.headerText} >Sales Manager</Text>
          <Text style={styles.headerText} >Job Title</Text>
          <Text style={styles.headerText} >Duration</Text>
          <Text style={styles.headerText} >Location</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            {data2 ? (
              <FlatList
                data={data2}
                keyExtractor={(item, index) => item.req_ID + '_' + index}
                ListHeaderComponent={renderHeader}
              />
            ) : (
              <ActivityIndicator size="large" />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );

}