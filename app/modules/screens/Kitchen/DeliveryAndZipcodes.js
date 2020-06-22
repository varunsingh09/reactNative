import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import axios from "axios";
import Spinner from 'react-native-loading-spinner-overlay';
import { DataTable } from 'react-native-paper';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"

const DeliveryAndZipcodes = () => {

    return (

        <ScrollView vertical={true} >
            <Text>Zip code and  kitchen</Text>
        </ScrollView >
    )

}
export default DeliveryAndZipcodes
