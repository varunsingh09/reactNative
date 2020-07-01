import React, { Component } from 'react'
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

const itemsPerPage = 2;
const page = 0


class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateArr: [],
            spinner: false,
            message: null,
            from: page * itemsPerPage,
            to: (page + 1) * itemsPerPage,
            animating: true
        }
    }
    componentDidMount = () => {
        this.stateCityList()
    }

    stateCityList = async (city) => {
        console.warn(city)
        this.setState({ spinner: true })
        //console.log('come')

        try {

            const productList = await axios.get(
                Api.KITCHEN_PRODUCT_LIST_API,
                {
                    headers: {
                        "Authorization": `${Api.BEARER}`
                    }
                }).then(res => {
                    //console.log("---->>>>>>>>>>>>>", JSON.stringify(res.data.result))
                    this.setState({ stateArr: res.data.results !== undefined && res.data.results, spinner: false })
                }
                );

        } catch (err) {
            if (err.response === undefined) {
                this.setState({ "message": 'Remote Server Not Working', spinner: false })
            }
            //this.setState({ "errors": err.response.data.errors, spinner: false })
        }

    }
    render() {
        //console.log("-------", this.state.stateArr, "====")

        //return this.state.message !== null && <Error />

        return (

            <ScrollView vertical={true} >
                <ActivityIndicator
                    animating={this.state.spinner}
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
                    {this.state.stateArr.length > 0 && this.state.stateArr.map((list, index) =>
                        <DataTable.Row key={index}>
                            <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.kitchen_name)}</DataTable.Cell>
                            <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.item_name)}</DataTable.Cell>
                            <DataTable.Cell style={styles.HeadRow}  >{capitalize(list.item_type)}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                    <DataTable.Pagination
                        page={page}
                        numberOfPages={Math.floor(this.state.stateArr.length > 0 && this.state.stateArr / itemsPerPage)}
                        onPageChange={page => this.setState(page)}
                        label={`${this.state.from + 1}-${this.state.to} of ${this.state.stateArr.length > 0 && this.state.stateArr.length}`}
                    />
                </DataTable>
            </ScrollView >
        )
    }
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