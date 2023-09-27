import { View, Text, FlatList,ImageBackground, } from 'react-native';
import { styles } from '../../drawer';

export default function SubmissionBody({data1, data2}) {

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.branchName + "-" + (item.companyName.split(" ")[0])}</Text>
            <Text style={styles.cell}>{item.totalSubmission}</Text>
            <Text style={styles.cell}>{item.totalSalesRejected}</Text>
            <Text style={styles.cell}>{item.totalPVRejected}</Text>
            <Text style={styles.cell}>{item.totalEndClientSubmission}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.row}>
            <Text style={styles.headerText}>Branch Name</Text>
            <Text style={styles.headerText}>T.SUB#</Text>
            <Text style={styles.headerText}>T.RejbySM#</Text>
            <Text style={styles.headerText}>T.RejByPV</Text>
            <Text style={styles.headerText}>T.ECS</Text>
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
                        <Text style={{ color: '#fff' }}>Week Total</Text>
                        <Text style={styles.cell1}>{data2.weekTotalSubmission}</Text>
                        <Text style={styles.cell1}>{data2.weekTotalSalesRejected}</Text>
                        <Text style={styles.cell1}>{data2.weekTotalPVRejected}</Text>
                        <Text style={styles.cell1}>{data2.weekTotalEndClientSub}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={styles.cell1}>{data2.monthTotalSubmission}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalSalesRejected}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalPVRejected}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalEndClientSub}</Text>
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
                <View style={{ padding: 5, flexDirection: 'row', backgroundColor: ['#288691', '#9485878'] }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, color: "#39004d", }}> Branch Submission:-</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <FlatList
                            data={data1}
                            // keyExtractor={item => item.branchName}
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