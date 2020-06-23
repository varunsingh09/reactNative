import React, { useState, useEffect, Fragment } from 'react'
import { Text, ScrollView, View, TextInput } from 'react-native'
import axios from "axios";
import Spinner from 'react-native-loading-spinner-overlay';
import { DataTable, HelperText, Button } from 'react-native-paper';
//import { Dropdown } from 'react-native-material-dropdown';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"
import { capitalize } from "./../Common/Utils"

const DeliveryAndZipcodes = () => {

    let [zipcodeError, setError] = useState([]);
    let [zipcodeSpinner, setSpinner] = useState(false);
    let [menuVisible, setVisible] = useState(false);
    let [zipcodeSuccess, setSuccess] = useState([]);
    let [searchText, setSearchText] = useState('');
    let data = [{
        value: 'Banana',
    }, {
        value: 'Mango',
    }, {
        value: 'Pear',
    }];

    useEffect(async () => {

        let data = { kitchen_names: 'syed Kitchen' }
        console.log("serving days ", data)

        setSpinner(true)
        try {

            const productList = await axios.post(

                Api.KITCHEN_AND_ZIPCODE_API,
                data,
                {
                    headers: {
                        "Authorization": `${Api.BEARER}`
                    }
                }).then(res => {
                    console.log("===========", res.data.success)
                    setSuccess(res.data.success)
                    setSpinner(false)

                }
                );

        } catch (err) {
            if (err.response === undefined) {
                setSpinner(false)
                setError('Remote Server Not Working')
            }

            setSpinner(false)
            setError(err.response.data.errors)
        }


    }, []);


    const handleEdit = (props) => {
        console.warn("handleEdit", props)
    }


    return (
        <Fragment>
            <ScrollView vertical={true} >
                <Spinner
                    visible={zipcodeSpinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <View style={styles.containerSearch}>
                    <Text style={styles.textColor}>Delivery Zip Code & Kitchens</Text>
                    {/* <Dropdown
                        label='Favorite Fruit'
                        data={data}
                    /> */}
                    <View>
                        <TextInput
                            style={styles.searchTextInput}
                            placeholder='Search by Zip code👻'
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={val => setSearchText(val)}
                        />
                        <HelperText type="error" style={styles.helpText} >
                        </HelperText>
                        <Button style={styles.defaultButton} onPress={() => console.log('Pressed')}>
                            + ZipCode
                        </Button>
                    </View>

                </View>


                <DataTable>
                    <DataTable.Header style={styles.HeadStyle}>
                        <DataTable.Title><Text style={styles.HeadText}>State</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.HeadText}>Zipcode</Text></DataTable.Title>
                        <DataTable.Title numberOfLines={2} ><Text style={styles.HeadText}>Kitchen Name</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.HeadTextAction}>Action</Text></DataTable.Title>
                    </DataTable.Header>

                    {zipcodeSuccess.map((result, indexR) => {
                        return result.zipcode_data.map((list, index) => {
                            //console.log("row result", list.kitchen_name)
                            let kitchen_name = list.kitchen_names.join(",")
                            return (<DataTable.Row style={{ backgroundColor: index % 2 === 0 ? '#b8dafd' : '#D6D8DB' }} key={index}>
                                <DataTable.Cell style={styles.HeadRow}>{capitalize(list.state)}</DataTable.Cell>
                                <DataTable.Cell style={styles.HeadRow}>{list.zipcodes.join(",")}</DataTable.Cell>
                                <DataTable.Cell style={styles.HeadRow}>{list.kitchen_names.join(",")}</DataTable.Cell>
                                <DataTable.Cell style={[styles.HeadRowAction]} onPress={(e) => handleEdit('Edit')}>
                                    <Text style={styles.textColor}>Edit</Text>
                                </DataTable.Cell>
                            </DataTable.Row>)
                        })

                    })}

                    {/* <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.floor(this.state.stateArr.length > 0 && this.state.stateArr / itemsPerPage)}
                    onPageChange={page => this.setState(page)}
                    label={`${this.state.from + 1}-${this.state.to} of ${this.state.stateArr.length > 0 && this.state.stateArr.length}`}
                /> */}
                </DataTable>
            </ScrollView >
        </Fragment>
    )

}
export default DeliveryAndZipcodes
