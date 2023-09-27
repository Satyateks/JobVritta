
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { styles } from '../../drawer';


export default function CompanySubmissionBody({ data1, data2 }) {
    
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            {/* <Text style={styles.cell}>{item.branchName+"-"+(item.companyName.split(" ")[0])}</Text> */}
            <Text style={styles.cell}>{item.companyName}</Text>
            <Text style={styles.cell}>{item.totalSubmission}</Text>
            <Text style={styles.cell}>{item.totalSalesRejected}</Text>
            <Text style={styles.cell}>{item.totalPVRejected}</Text>
            <Text style={styles.cell}>{item.totalEndClientSubmission}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.row}>
            {/* <Text style={styles.headerText}>Branch Name</Text> */}
            <Text style={styles.headerText}>Company Name</Text>
            <Text style={styles.headerText}>Sub#</Text>
            <Text style={styles.headerText}>SalesRej#</Text>
            <Text style={styles.headerText}>PV REj</Text>
            <Text style={styles.headerText}>ECS</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={styles.cell1}>{data2.dayTotalSubmission}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalSalesRejected}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalPVRejected}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalEndClientSub}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={styles.cell1}>{data2.monthTotalSubmission}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalSalesRejected}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalPVRejected}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalEndClientSub}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalSubmission}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalSalesRejected}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalPVRejected}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalEndClientSub}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View >
            <ImageBackground
                source={{ uri: 'https://cdn.wallpapersafari.com/24/74/wl1eVE.jpg' }}
                style={{ height: '100%' }}>
                <View style={styles.txtview} >
                    <Text style={styles.txt}> Company Submission:-</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <FlatList
                            data={data1}
                            // keyExtractor={item => item.companyName}
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ListFooterComponent={renderFooter}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
}