import React, { Component, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import axios from "axios";
import Spinner from 'react-native-loading-spinner-overlay';
import { DataTable } from 'react-native-paper';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"

const DeliveryAndZipcodes = () => {

    let [zipcodeError, setError] = useState([]);
    let [zipcodeSpinner, setSpinner] = useState(false);
    let [zipcodeSuccess, setSuccess] = useState([]);

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


    const capitalize = (str) => {
        str = str.split(" ");

        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        return str.join(" ");
    }

    console.log("----------", zipcodeSuccess)
    zipcodeSuccess.map((result, index) => {
        result.zipcode_data.map((row) => {

            console.log("-----------", row.kitchen_names)
        })
    })
    return (

        <ScrollView vertical={true} >
            <Spinner
                visible={zipcodeSpinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <DataTable>
                <DataTable.Header style={styles.HeadStyle}>
                    <DataTable.Title><Text style={styles.HeadText}>Kitchen Name</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.HeadText}>State</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.HeadText}>Zipcode</Text></DataTable.Title>
                </DataTable.Header>

                {zipcodeSuccess.map((result, indexR) => {
                    return result.zipcode_data.map((list,index) => {
                        //console.log("row result", list.kitchen_name)
                        return <DataTable.Row style={{ backgroundColor: index % 2 === 0 ? '#b8dafd' : '#D6D8DB' }} key={index}>
                            <DataTable.Cell style={styles.HeadRow}  >{list.kitchen_names}</DataTable.Cell>
                            <DataTable.Cell style={styles.HeadRow}  >{list.state}</DataTable.Cell>
                            <DataTable.Cell style={styles.HeadRow}  >{list.zipcodes}</DataTable.Cell>
                        </DataTable.Row>
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
    )

}
export default DeliveryAndZipcodes
