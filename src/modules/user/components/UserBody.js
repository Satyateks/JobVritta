
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, SafeAreaView,  } from 'react-native';
// import { styles } from '../../drawer';

export default function UserBody({ data, totalPages}) {
    const[loading, setLoading]= useState(null)
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.container}>
                    <Text style={styles.leftText}>UserName</Text>
                    <Text style={styles.cardTitle}>{item.user_Name}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>LoginName</Text>
                    <Text style={styles.rightText}>{item.login_Name}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>EmailID</Text>
                    <Text style={styles.rightText}>{item.user_EmailID}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>Call No</Text>
                    <Text style={styles.rightText}>{item.user_Cell_No}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>BranchName</Text>
                    <Text style={styles.rightText}>{item.branchName}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>Status</Text>
                    <Text style={styles.rightText}>{item.user_Status}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftText}>WorkFrom</Text>
                    <Text style={styles.rightText}>{item.workFrom}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={{ backgroundColor: '#e6f2ff' }}>
          <SafeAreaView>
            <Text style={{ fontWeight: 'bold',margin:7, marginBottom:7, fontSize: 36, textAlign: 'center', color: '#1845f3', backgroundColor: '#e6f2ff', elevation: 21 }}>Manage User List </Text>
            {loading ? (
              <View style={{alignItems:'center', justifyContent:'center', marginTop:51,}}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={(item) => item.id.toString()}
                onEndReached={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((prevPage) => prevPage + 1);
                    <View >
                      <Button
                        title="Next Page"
                        onPress={() => {
                          if (currentPage < totalPages) {
                            setCurrentPage((prevPage) => prevPage + 1);
                          }
                        }}
                        disabled={currentPage >= totalPages}
                      />
                    </View>
                  }
                }}
                onEndReachedThreshold={0.1}
              />
             )} 
            {/* <View style={styles.buttonContainer}>
                        <Button
                            title="Next Page"
                            onPress={() => {
                                if (currentPage < totalPages) {
                                    setCurrentPage((prevPage) => prevPage + 1);
                                }
                            }}
                            disabled={currentPage >= totalPages}
                        />
                    </View> */}
    
          </SafeAreaView>
        </View>
      );
}

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

