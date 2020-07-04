import React, { useState, useEffect, Fragment } from 'react'
import { Text, ScrollView, ActivityIndicator } from 'react-native'

import axios from "axios";
import { DataTable } from 'react-native-paper';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"
import { capitalize } from "./../Common/Utils"
import ZipcodeSearchbar from "./ZipcodeSearchbar"

const DeliveryAndZipcodes = (props) => {

    let [zipcodeError, setError] = useState([]);
    let [spinner, setSpinner] = useState(false);
    let [zipcodeSuccess, setSuccess] = useState([]);

    // For Search bar
    let [defaultZipcode, setZipCode] = useState(60045);
    let [defaultState, setDefaultState] = useState('California');
    let [defaultStateList, setDefaultStateList] = useState([
        { value: 'California' },
        { value: 'Illinois' },
    ]);
    // End Here


    // Event for search bar 
    const handleSearchText = (text) => {
        setDefaultState(text)

    }



    const handleSearch = (props) => {
        //let data = { kitchen_names: 'syed Kitchen', zipcode: defaultZipcode, state: defaultState }
        let data = { kitchen_names: 'syed Kitchen', zipcode: defaultZipcode, state: 'chicago' }

        //console.warn("handleSearch filter data", "====", data)
        getZipcodeAndKitchenList(data)

    }

    // End Here

    const handleEdit = (props) => {
        // console.warn("handleEdit", props)
    }

    useEffect(() => {

        let { navigation } = props
        let data = { kitchen_names: 'syed Kitchen' }
        //console.log("useEffect ", navigation)

        const unsubscribe = props.navigation.addListener('didFocus', () => {
            //console.log("navigation detect")
            getZipcodeAndKitchenList(data);
        });

        getZipcodeAndKitchenList(data);

        // componentWillUnmount method
        return unsubscribe
        // componentWillUnmount end here

    }, []);

    const getZipcodeAndKitchenList = async (data) => {

        console.log("getZipcodeAndKitchenList", data)
        setSpinner(true)
        try {

            const productList = await axios.get(

                Api.KITCHEN_AND_ZIPCODE_API, { params: data },
                {
                    headers: {
                        "Authorization": `${Api.BEARER}`
                    }
                }).then(res => {
                    //console.log("===========", res.data.success)
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

    }


    return (
        <Fragment>
            <ScrollView vertical={true} >
                <ActivityIndicator
                    animating={spinner}
                    color="#252051"
                    size="large"
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
                <ZipcodeSearchbar
                    handleSearchText={handleSearchText}
                    defaultStateList={defaultStateList}
                    defaultState={defaultState}
                    handleSearch={handleSearch}
                    setZipCode={setZipCode}
                    defaultZipcode={defaultZipcode}

                />

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
                            return (<DataTable.Row
                                // style={{ backgroundColor: index % 2 === 0 ? '#b8dafd' : '#D6D8DB' }} 
                                key={index}>
                                <DataTable.Cell style={styles.HeadRow}>{capitalize(list.state)}</DataTable.Cell>
                                <DataTable.Cell style={styles.HeadRow}>{list.zipcodes.join(",")}</DataTable.Cell>
                                <DataTable.Cell style={styles.HeadRow}>{list.kitchen_names.join(",")}</DataTable.Cell>
                                <DataTable.Cell style={[styles.HeadRowAction]} onPress={(e) => handleEdit('Edit')}>
                                    <Text style={styles.textColor}>Edit</Text>
                                </DataTable.Cell>
                            </DataTable.Row>)
                        })

                    })}

                </DataTable>
            </ScrollView >
        </Fragment >
    )

}
export default DeliveryAndZipcodes
