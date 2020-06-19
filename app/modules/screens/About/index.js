import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import axios from "axios";
import styles from '../../styles/index';
import * as Api from "./../../../../config/config"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateArr: []
    }
  }
  componentDidMount = () => {
    //console.log("componentDidMount")
    this.stateCityList()
  }
  stateCityList = async (city) => {
    console.warn(city)
    //console.log('come')

    try {

      const stateCityList = await axios.get(
        Api.STATE_CITY_FETCH_API,
        {
          headers: {
            "Authorization": `${Api.BEARER}`
          }
        }).then(res => //console.log("---->>>>>>>>>>>>>",JSON.stringify(res.data.result))
          this.setState({ stateArr: res.data.result })
        );

    } catch (err) {
      //console.warn("success response===", err)
      this.setState({ "errors": err.response.data.errors })
    }

  }
  render() {

    let cityList = this.state.stateArr.length > 0 && this.state.stateArr[0].cityList.sort()

    return (
      <View>
        <ScrollView vertical={true}>
          {this.state.stateArr.length > 0 && this.state.stateArr[0].cityList.map((city, index) =>
            <TouchableOpacity
              key={index}
              style={styles.containerList}
              onPress={() => this.stateCityList(city)}
            >
              <Text style={styles.text}>
                {city}
              </Text>
            </TouchableOpacity>
          ).sort()
          }
        </ScrollView>
      </View >
    )
  }
}
export default About
