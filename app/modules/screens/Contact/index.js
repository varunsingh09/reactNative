import React, { Component } from 'react';
import axios from "axios";
//import react in our code.
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import { HelperText } from 'react-native-paper';

import * as Api from "./../../../../config/config"

import { handleValidation } from "./../../../../config/error"

import styles from '../../styles/index';

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      options: [{ value: 0, label: 'Gold' }, { value: 1, label: 'Silver' }],
      errors: []
    }
  }


  handleSubmit = async (viewId) => {

    let data = this.state

    console.log("Alert", "Button pressed " + viewId, "----", data);

    try {

      const KitchenSignup = await axios.post(
        Api.KITCHEN_REGISTRATION_API,
        data,
        {
          headers: {
            "Authorization": `${Api.BEARER}`
          }
        }).then(res => console.log("===", res));

    } catch (err) {
      this.setState({ "errors": err.response.data.errors })
    }
  }


  render() {
    console.log("error name", this.state.errors.filter((error) => error.param === "address").map((val, index) => val.msg), "error field")

    return (
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/material-sharp/24/000000/kitchen-room--v1.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Kitchen Name (OR) Company Name"
              underlineColorAndroid='transparent'
              onChangeText={(kitchen_name) => this.setState({ kitchen_name: kitchen_name })} />
          </View>

          <HelperText  type="error"  style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "kitchen_name").map((val, index) => val.msg)[0]}
          </HelperText>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/material/24/000000/home-page.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Address"
              underlineColorAndroid='transparent'
              onChangeText={(address) => this.setState({ address: address })}
              multiline={true}
              numberOfLines={4} />
          </View>
          <HelperText  type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "address").map((val, index) => val.msg)[0]}
          </HelperText>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/re-enter-pincode.png' }} />
            <TextInput style={styles.inputs}
              placeholder="ZipCode"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(zipcode) => this.setState({ zipcode })} />
          </View>
          <HelperText  type="error" style={styles.helpText}  >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "zipcode").map((val, index) => val.msg)[0]}
          </HelperText>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/material-two-tone/24/000000/email-open.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Email"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })} />
          </View>
          <HelperText  type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "email").map((val, index) => val.msg)[0]}
          </HelperText>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/metro/26/000000/touchscreen-smartphone.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Contact No"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(contact_no) => this.setState({ contact_no })} />
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/metro/26/000000/invisible.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })} />
          </View>
          <HelperText  type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "password").map((val, index) => val.msg)[0]}
          </HelperText>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/metro/26/000000/invisible.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(confirm_password) => this.setState({ confirm_password })} />
          </View>

          <View style={styles.inputContainer}>
            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.handleSubmit('sign_up')}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableHighlight>
          </View>


        </ScrollView>

      </View>
    );
  }
}
