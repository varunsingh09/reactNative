import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import axios from "axios";
import Spinner from 'react-native-loading-spinner-overlay';
import { DataTable } from 'react-native-paper';
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"


const itemsPerPage = 2;
const page = 0

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateArr: [],
      spinner: false,
      message: null,
      from: page * itemsPerPage,
      to: (page + 1) * itemsPerPage
    }
  }
  componentDidMount = () => {
    this.stateCityList()
  }

  capitalize=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
          console.log("---->>>>>>>>>>>>>", JSON.stringify(res.data.result))
          this.setState({ stateArr: res.data.results, spinner: false })
        }
        );

    } catch (err) {
      if (err.response === undefined) {
        this.setState({ "message": 'Remote Server Not Working', spinner: false })
      }
      this.setState({ "errors": err.response.data.errors, spinner: false })
    }

  }
  render() {
    console.log("-------", this.state, "====")

    //return this.state.message !== null && <Error />

    return (

      <ScrollView vertical={true} >
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <DataTable>
          <DataTable.Header style={[styles.HeadStyle]} >
            <DataTable.Title>Kitchen Name</DataTable.Title>
            <DataTable.Title>Item Name</DataTable.Title>
            <DataTable.Title>Item Type</DataTable.Title>
          </DataTable.Header>
          {this.state.stateArr.length > 0 && this.state.stateArr.map((list, index) =>
            <DataTable.Row >
              <DataTable.Cell>{this.capitalize(list.kitchen_name)}</DataTable.Cell>
              <DataTable.Cell>{this.capitalize(list.item_name)}</DataTable.Cell>
              <DataTable.Cell>{this.capitalize(list.item_type)}</DataTable.Cell>
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
export default About
