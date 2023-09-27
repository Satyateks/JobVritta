import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'

export default function AdduserBody({ CompanyDD, BranchDD, Roles, handleFormSubmit, setInputValues }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [login_Name, setlogin_Name] = useState('');
    const [Password, setPassword] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const [ExtNo, setExtNo] = useState('');
    const [CallNo, setCallNo] = useState('');
    const [GtalkID, setGtalkID] = useState('');
    const [YahooID, setYahooId] = useState('');
    const [isStatus, setStatus] = useState(false);
    const [isTempActive, setTempActive] = useState(false);
    const [selectedWorkFrom, setSelectedWorkFrom] = useState();
    const [selecteds, setSelecteds] = useState('');
    const [selectedBranchDD, setSelectedBranchDD] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    // const [CompanyDD, setCompanyDD] = useState([]);
    // const [BranchDD, setBranchDD] = useState([]);
    // const [Roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);


//   console.log("company dd  ", CompanyDD)
//   console.log("branch  dd  ", BranchDD)
//   console.log("roles dd  ", Roles)

    const handleSubmit = () => {
        const roles = [];
        selectedRoles?.forEach((role) => { roles.push({ role_ID: parseInt(role) }); });
    
        const branches = [];
        selectedBranchDD?.forEach((branch) => { branches.push({ branch_ID: parseInt(branch) }); });
    
        let obj = BranchDD.find((item) => item.branch_ID === selectedBranch)
        console.log("branch drop done obj console data",obj)
    
        const inputValues = {
            user_Name: Name,
            user_EmailID: Email,
            branchName: obj?.branchName,
            branch_ID: selectedBranch,
            login_Name: login_Name,
            login_Password: Password,
            temp_Inactive: isTempActive,
            user_Cell_No: CallNo,
            user_Ext_No: ExtNo,
            user_GtalkID: GtalkID,
            user_Name: Name,
            user_PhoneNo: PhoneNo,
            user_Status: isStatus,
            user_YahooID: YahooID,
            workFrom: selectedWorkFrom
        };
    
        setInputValues(inputValues); // Set the input values in the parent component
    
        handleFormSubmit(inputValues); // Call the handleFormSubmit function in the parent component
      };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View>
                            <Text style={styles.label}> Name</Text>
                            <TextInput
                                style={styles.input} value={Name}
                                onChangeText={text => setName(text)}
                            />
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input} value={Email}
                                onChangeText={text => setEmail(text)}
                            />
                            <Text style={styles.label}>LoginID</Text>
                            <TextInput
                                style={styles.input} value={login_Name}
                                onChangeText={text => setlogin_Name(text)}
                            />
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input} value={Password}
                                onChangeText={text => setPassword(text)}
                            />
                            <Text style={styles.label}>Branch Name</Text>
                            <SelectList
                                setSelected={setSelectedBranch}
                                // setSelected={(element)=>console.log(element)}
                                data={BranchDD.map(item => ({ key: parseInt(item.branch_ID), value: item.branchName, label: item.branch_ID.toString() }))}
                                save="key"
                            />
                            <Text style={styles.label}>Phone No</Text>
                            <TextInput
                                style={styles.input} value={PhoneNo}
                                onChangeText={text => setPhoneNo(text)}
                            />
                            <Text style={styles.label}>Work From</Text>
                            <Picker
                                style={styles.dropdown}
                                selectedValue={selectedWorkFrom}
                                onValueChange={itemValue => setSelectedWorkFrom(itemValue)}
                                mode="multiple"
                            >
                                <Picker.Item label="Onsite" value="onsite" />
                                <Picker.Item label="Remote" value="remote" />
                            </Picker>
                            <Text style={styles.label}>Ext No</Text>
                            <TextInput
                                style={styles.input}
                                value={ExtNo}
                                onChangeText={text => setExtNo(text)}
                            />
                            <Text style={styles.label}>cell No</Text>
                            <TextInput
                                style={styles.input}
                                value={CallNo}
                                onChangeText={text => setCallNo(text)}
                            />
                            <Text style={styles.label}>GtalkID</Text>
                            <TextInput
                                style={styles.input}
                                value={GtalkID}
                                onChangeText={text => setGtalkID(text)}
                            />
                            <Text style={styles.label}>YahooID</Text>
                            <TextInput
                                style={styles.input}
                                value={YahooID}
                                onChangeText={text => setYahooId(text)}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 11, }}>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Status   </Text>
                                    <CheckBox
                                        value={isStatus}
                                        onValueChange={setStatus}
                                        style={styles.checkbox}
                                    />
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Temp Inactive  </Text>
                                    <CheckBox
                                        value={isTempActive}
                                        onValueChange={setTempActive}
                                        style={styles.checkbox}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ margin: 21 }}>
                            <Text style={styles.label}> Assign Roles</Text>
                            <MultipleSelectList
                                setSelected={(val) => setSelectedRoles(val)}
                                data={Roles.map(item => ({ key: item.role_ID.toString(), value: item.role_Name }))}
                                save="key"
                            />
                            <Text style={styles.label}> Assign Company</Text>
                            <MultipleSelectList
                                setSelected={setSelecteds}
                                data={CompanyDD.map(item => ({ key: item.company_ID.toString(), value: item.company_Name }))}
                                save="key"
                            />
                            <Text style={styles.label}> Assign Branch</Text>
                            <MultipleSelectList
                                setSelected={setSelectedBranchDD}
                                data={BranchDD.map(item => ({ key: item.branch_ID.toString(), value: item.branchName }))}
                                save="key"
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        {/* <TouchableOpacity style={styles.button} onPress={handleFormSubmit}> */}
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        width: '95%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        width: '100%',
        height: 40,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        marginTop: 7,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
});

  