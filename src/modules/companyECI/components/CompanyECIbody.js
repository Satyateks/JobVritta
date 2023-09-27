
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { styles } from '../../drawer';


export default function CompanyECIbody({ data1, data2 }) {

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.companyName}</Text>
            <Text style={styles.cell}>{item.totalECI}</Text>
            <Text style={styles.cell}>{item.totalBackoutECI}</Text>
            <Text style={styles.cell}>{item.totalConfirmedECI}</Text>
            <Text style={styles.cell}>{item.totalRescheduledECI}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.row}>
            <Text style={styles.headerText}>Company Name</Text>
            <Text style={styles.headerText}>T.ECI#</Text>
            <Text style={styles.headerText}>Backout#</Text>
            <Text style={styles.headerText}>Confirmed</Text>
            <Text style={styles.headerText}>Rescheduled</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={styles.cell1}>{data2.dayTotalECI}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalBackoutECI}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalConfirmedECI}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalRescheduledECI}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={styles.cell1}>{data2.monthTotalECI}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalBackoutECI}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalConfirmedECI}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalRescheduledECI}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalECI}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalBackoutECI}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalConfirmedECI}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalRescheduledECI}</Text>
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
                    <Text style={styles.txt}> Company ECI:-</Text>
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