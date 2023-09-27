
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { styles } from '../../drawer';

export default function CompanyPObody({ data1, data2 }) {
    
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            {/* <Text style={styles.cell}>{item.branchName+"-"+(item.companyName.split(" ")[0])}</Text> */}
            <Text style={styles.cell}>{item.companyName}</Text>
            <Text style={styles.cell}>{item.totalPO}</Text>
            <Text style={styles.cell}>{item.totalRunningPO}</Text>
            <Text style={styles.cell}>{item.totalEndedPO}</Text>
            <Text style={styles.cell}>{item.totalFizzledPO}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.row}>
            {/* <Text style={styles.headerText}>Branch Name</Text> */}
            <Text style={styles.headerText}>Company Name</Text>
            <Text style={styles.headerText}>T.PO#</Text>
            <Text style={styles.headerText}>R.PO#</Text>
            <Text style={styles.headerText}>E.PO</Text>
            <Text style={styles.headerText}>F.PO</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={styles.cell1}>{data2.dayTotalPO}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalRunningPO}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalEndedPO}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalFizzledPO}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={styles.cell1}>{data2.monthTotalPO}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalRunningPO}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalEndedPO}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalFizzledPO}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalPO}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalRunningPO}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalEndedPO}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalFizzledPO}</Text>
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
                <View style={styles.txtview}>
                    <Text style={styles.txt}> Company PO:-</Text>
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