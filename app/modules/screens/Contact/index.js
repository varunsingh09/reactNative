// Contact.js
import React from 'react'
import axios from "axios";
import {
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Text

} from 'react-native'

import { HelperText } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Api from "./../../../../config/config"
import { handleValidation } from "./../../../../config/error"
import styles from '../../styles/index';
class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        kitchen_name: '',
        address: '',
        zipcode: '',
        states: 'California',
        city: 'San Diego',
        contact_no: '',
        email: '',
        password: '',
        confirm_password: '',
        agreement_policy: true,
      },
      errors: [],
      spinner: false,
      success: []
    }
  }

  onChangeText = (name, value) => {
    let { userInfo } = this.state;
    this.setState({ userInfo: { ...userInfo, [name]: value } });
    console.log("===>>", name, value)
  }


  handleSubmit = async () => {

    let { userInfo } = this.state
    let data = userInfo
    console.log("handleSubmit ", data)

    this.setState({ spinner: true })
    try {

      const KitchenSignup = await axios.post(

        Api.KITCHEN_REGISTRATION_API,
        data,
        {
          headers: {
            "Authorization": `${Api.BEARER}`
          }
        }).then(res => this.setState({ success: res, spinner: false })
        );

    } catch (err) {
      console.warn("error response===", err)
      this.setState({ "errors": err.response.data.errors,spinner: false  })
    }

  }

  render() {
    console.log("render", this.state.errors)
    return (
      <View style={styles.containerContact}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <ScrollView vertical={true}>
          <TextInput
            style={styles.input}
            placeholder='Kitchen Name (OR) Company Name'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('kitchen_name', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "kitchen_name").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='Address'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('address', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "address").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='ZipCode'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('zipcode', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "zipcode").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "email").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='Contact Number'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('contact_no', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "contact_no").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "password").map((val, index) => val.msg)[0]}
          </HelperText>

          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('confirm_password', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "confirm_password").map((val, index) => val.msg)[0]}
          </HelperText>

          <TouchableHighlight style={[styles.button]} onPress={() => this.handleSubmit('sign_up')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableHighlight>


        </ScrollView>
      </View>
    )
  }
}

export default Contact