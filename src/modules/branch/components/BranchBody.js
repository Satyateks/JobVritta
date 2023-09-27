
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BranchStyle } from '../../Table.style';
import { ActivityIndicator } from 'react-native-paper';
import { useState, useEffect } from 'react';


export default function BranchBody({ data1, data2 }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading process
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 2000);
  }, []);
  const renderHeader = () => (
    <View style={BranchStyle.row}>
      <Text style={BranchStyle.headerText}>Branch Name</Text>
      <Text style={BranchStyle.headerText}>T.Req#</Text>
      <Text style={BranchStyle.headerText}>T.Alloc#</Text>
      <Text style={BranchStyle.headerText}>T.Services</Text>
      <Text style={BranchStyle.headerText}>Serving</Text>
    </View>
  );
  const renderFooter = () => (
    <View>
      {data2 && (
        <View>
          <View style={BranchStyle.row}>
            <Text style={{ color: '#fff' }}>Day Total-</Text>
            <Text style={BranchStyle.cell1}>{data2.dayTotalReq}</Text>
            <Text style={BranchStyle.cell1}>{data2.dayTotalAllocation}</Text>
            <Text style={BranchStyle.cell1}>{data2.dayTotalService}</Text>
            <Text style={BranchStyle.cell1}>{data2.dayTotalServing}</Text>
          </View>
          <View style={BranchStyle.row}>
            <Text style={{ color: '#fff' }}>Week Total</Text>
            <Text style={BranchStyle.cell1}>{data2.weekTotalReq}</Text>
            <Text style={BranchStyle.cell1}>{data2.weekTotalAllocation}</Text>
            <Text style={BranchStyle.cell1}>{data2.weekTotalService}</Text>
            <Text style={BranchStyle.cell1}>{data2.weekTotalServing}</Text>
          </View>
          <View style={BranchStyle.row}>
            <Text style={{ color: '#fff' }}>Month Total-</Text>
            <Text style={BranchStyle.cell1}>{data2.monthTotalReq}</Text>
            <Text style={BranchStyle.cell1}>{data2.monthTotalAllocation}</Text>
            <Text style={BranchStyle.cell1}>{data2.monthTotalService}</Text>
            <Text style={BranchStyle.cell1}>{data2.monthTotalServing}</Text>
          </View>
        </View>
      )}
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={BranchStyle.row}>
      <Text style={BranchStyle.cell}>
        {item.branchName + '-' + item.companyName.split(' ')[0]}
      </Text>
      <Text style={BranchStyle.cell}>{item.totalRequirement}</Text>
      <Text style={BranchStyle.cell}>{item.totalAllocation}</Text>
      <Text style={BranchStyle.cell}>{item.totalServices}</Text>
      <Text style={BranchStyle.cell}>{item.serving}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ImageBackground source={{ uri: 'https://wallpaperaccess.com/full/2044489.jpg' }} style={{ height: '100%' }}>
        {/* <View style={BranchStyle.txtview}>
          <Image source={{uri:'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png'}}style={styles.img}/>
          <Text style={BranchStyle.txt}> Welcome to JobVritta</Text>
        </View> */}
        <View style={BranchStyle.container}>
          <View style={BranchStyle.header}>
            {loading ? (
              <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator size="large" />
              </View>
            ) : (<FlatList data={data1}
              // keyExtractor={(item) => item.branchName}
              renderItem={renderItem}
              ListHeaderComponent={renderHeader}
              ListFooterComponent={renderFooter} />)}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

