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

  capitalize=(str)=> {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
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
          <DataTable.Header style={styles.HeadStyle}>
            <DataTable.Title><Text  style={styles.HeadText}>Kitchen Name</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.HeadText}>Item Name</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.HeadText}>Item Type</Text></DataTable.Title>
          </DataTable.Header>
          {this.state.stateArr.length > 0 && this.state.stateArr.map((list, index) =>
            <DataTable.Row style={{backgroundColor: index % 2 === 0 ? '#b8dafd' : '#D6D8DB' }} key={index}>
              <DataTable.Cell style={styles.HeadRow}  >{this.capitalize(list.kitchen_name)}</DataTable.Cell>
              <DataTable.Cell style={styles.HeadRow}  >{this.capitalize(list.item_name)}</DataTable.Cell>
              <DataTable.Cell style={styles.HeadRow}  >{this.capitalize(list.item_type)}</DataTable.Cell>
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
