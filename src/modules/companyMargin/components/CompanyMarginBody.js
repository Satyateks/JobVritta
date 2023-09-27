
import { View, Text, FlatList, ImageBackground, } from 'react-native';
import { styles } from '../../drawer';


export default function CompanyMarginBody({ data1, data2 }) {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.companyName}</Text>
            <Text style={styles.cell}>{item.totalMargin}</Text>
            <Text style={styles.cell}>{item.totalRunningMargin}</Text>
            <Text style={styles.cell}>{item.totalEndedMargin}</Text>
            <Text style={styles.cell}>{item.totalFizzledMargin}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.row}>
            <Text style={styles.headerText}>Company Name</Text>
            <Text style={styles.headerText}>T.Margin#</Text>
            <Text style={styles.headerText}>R.Mgn#</Text>
            <Text style={styles.headerText}>E.Mgn</Text>
            <Text style={styles.headerText}>F.Mgn</Text>
        </View>
    );

    const renderFooter = () => (
        <View>
            {data2 && (
                <View style={{}} >
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Day Total-</Text>
                        <Text style={styles.cell1}>{data2.dayTotalMargin}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalRunningMargin}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalEndedMargin}</Text>
                        <Text style={styles.cell1}>{data2.dayTotalFizzledMargin}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Month Total-</Text>
                        <Text style={styles.cell1}>{data2.monthTotalMargin}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalRunningMargin}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalEndedMargin}</Text>
                        <Text style={styles.cell1}>{data2.monthTotalFizzledMargin}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: '#fff' }}>Quarter Total</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalMargin}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalRunningMargin}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalEndedMargin}</Text>
                        <Text style={styles.cell1}>{data2.quarterTotalFizzledMargin}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View >
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAViTewssmGujrzoe-H42eRmy1ExbYxRZ0mA&usqp=CAU' }}
                style={{ height: '100%' }}>
                <View style={styles.txtview}>
                    <Text style={styles.txt}> Company Margin:-</Text>
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