// Login.js
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
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        email: "", password: "",
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

      const KitchenLogin = await axios.post(

        Api.KITCHEN_LOGIN_API, data,
        {
          headers: {
            "Authorization": `${Api.BEARER}`
          }
        }).then(res => this.setState({ success: res, spinner: false })
        );

    } catch (err) {
      console.warn("error response===", err)
      this.setState({ "errors": err.response.data.errors, spinner: false })
    }

  }

  render() {
    console.log("render", this.state.errors)
    return (
      <View style={styles.containerContact}>
        <Text style={styles.spinnerTextStyle}>
          Login Screen
        </Text>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <ScrollView vertical={true}>
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
            placeholder='Passowrd'
            autoCapitalize="none"
            placeholderTextColor='white'
            secureTextEntry={true}
            onChangeText={val => this.onChangeText('password', val)}
          />
          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors.filter((error) => error.param === "password").map((val, index) => val.msg)[0]}
          </HelperText>

          <HelperText type="error" style={styles.helpText} >
            {this.state.errors.length > 0 && this.state.errors[0].param !=='email' && this.state.errors[0].param !=='password' && this.state.errors[0].msg}
          </HelperText>



          <TouchableHighlight style={[styles.button]} onPress={() => this.handleSubmit('login')}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableHighlight>


        </ScrollView>
      </View>
    )
  }
}

export default Login