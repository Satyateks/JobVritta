
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BranchStyle } from '../../Table.style';
import { styles } from '../../drawer';

export default function CompanyBody({ data1, data2 }) {

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.companyName}</Text>
      <Text style={styles.cell}>{item.totalRequirement}</Text>
      <Text style={styles.cell}>{item.totalAllocation}</Text>
      <Text style={styles.cell}>{item.totalServices}</Text>
      <Text style={styles.cell}>{item.serving}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={styles.headerText}>company Name</Text>
      <Text style={styles.headerText}>T.Req#</Text>
      <Text style={styles.headerText}>E.Alloc#</Text>
      <Text style={styles.headerText}>E.Servic#</Text>
      <Text style={styles.headerText}>serving</Text>
    </View>
  );
  const renderFooter = () => (
    <View>
      {data2 && (
        <View  >
          <View style={styles.row}>
            <Text style={{ color: '#fff' }}>Day Total-</Text>
            <Text style={styles.cell1}>{data2.dayTotalReq}</Text>
            <Text style={styles.cell1}>{data2.dayTotalAllocation}</Text>
            <Text style={styles.cell1}>{data2.dayTotalService}</Text>
            <Text style={styles.cell1}>{data2.dayTotalServing}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ color: '#fff' }}>Month Total-</Text>
            <Text style={styles.cell1}>{data2.monthTotalReq}</Text>
            <Text style={styles.cell1}>{data2.monthTotalAllocation}</Text>
            <Text style={styles.cell1}>{data2.monthTotalService}</Text>
            <Text style={styles.cell1}>{data2.monthTotalServing}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ color: '#fff' }}>Quarter Total</Text>
            <Text style={styles.cell1}>{data2.quarterTotalReq}</Text>
            <Text style={styles.cell1}>{data2.quarterTotalAllocation}</Text>
            <Text style={styles.cell1}>{data2.quarterTotalService}</Text>
            <Text style={styles.cell1}>{data2.quarterTotalServing}</Text>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView>
      <ImageBackground source={{ uri: 'https://wallpaperaccess.com/full/2044489.jpg' }} style={{ height: '100%' }}>
        <View style={BranchStyle.container}>
          <View style={BranchStyle.header}>
            <FlatList data={data1}
              // keyExtractor={(item) => item.branchName}
              renderItem={renderItem}
              ListHeaderComponent={renderHeader}
              ListFooterComponent={renderFooter} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

