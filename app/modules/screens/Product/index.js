import React, { useEffect, useState } from 'react'
import { Text, ScrollView, ActivityIndicator } from 'react-native'
import axios from "axios";

import { DataTable } from 'react-native-paper';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"
import { capitalize } from "./../Common/Utils"

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DeliveryAndZipcodes from './DeliveryAndZipcodes';
import KitchenList from './KitchenList';

const itemsPerPage = 20;
const page = 0


const Product = () => {

    let [loading, setIsLoading] = useState(false);
    let [offset, setOffset] = useState(0)
    let [totalPage, setTotalPage] = useState([])
    let [stateArr, setStateArr] = useState([])
    let [message, setMessage] = useState([])
    let [animating, setAnimating] = useState([])

    useEffect(() => {

        stateCityList();

    }, [])


    const stateCityList = async (city) => {
        console.warn(city)
        setIsLoading(true)
        try {

            const productList = await axios.get(
                Api.KITCHEN_PRODUCT_LIST_API,
                {
                    headers: {
                        "Authorization": `${Api.BEARER}`
                    }
                }).then(res => {
                    //console.log("---->>>>>>>>>>>>>", JSON.stringify(res.data.result))
                    //this.setState({ stateArr: res.data.results !== undefined && res.data.results, loading: false })
                    setStateArr(res.data.results !== undefined && res.data.results)
                    setIsLoading(false)
                }
                );

        } catch (err) {
            if (err.response === undefined) {
                //this.setState({ "message": 'Remote Server Not Working', loading: false })
                setMessage('Remote Server Not Working')
                setIsLoading(false)
            }
        }

    }

    return (

        <ScrollView vertical={true} >
            <ActivityIndicator
                animating={loading}
                color="#252051"
                size="large"
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
            <DataTable>
                <DataTable.Header style={styles.HeadStyle}>
                    <DataTable.Title><Text style={styles.HeadText}>Kitchen Name</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.HeadText}>Item Name</Text></DataTable.Title>
                    <DataTable.Title><Text style={styles.HeadText}>Item Type</Text></DataTable.Title>
                </DataTable.Header>
                {stateArr.length > 0 && stateArr.map((list, index) =>
                    <DataTable.Row key={index}>
                        <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.kitchen_name)}</DataTable.Cell>
                        <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.item_name)}</DataTable.Cell>
                        <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.item_type)}</DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable>
        </ScrollView >
    )

}


const TabNavigator = createMaterialTopTabNavigator({
    Product: Product,
    DeliveryAndZipcodes: {
        screen: DeliveryAndZipcodes,
        navigationOptions: {
            tabBarLabel: 'Delivery And Zipcodes',
        },
    },
    KitchenList: {
        screen: KitchenList,
        navigationOptions: {
            tabBarLabel: 'Kitchen List',
        },
    },
},
    {
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                backgroundColor: '#000',
            },
        }
    }
);


export default createAppContainer(TabNavigator);