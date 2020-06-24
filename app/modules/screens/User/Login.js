// Login.js
import React, { useState } from 'react'

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
const Login = (props) => {

  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [userError, setError] = useState([]);
  let [userSpinner, setSpinner] = useState(false);
  let [userSuccess, setSuccess] = useState([]);

  const handleSubmit = async (props) => {


    let data = { email: userEmail, password: userPassword }
    console.log("handleSubmit ", data)

    setSpinner(true)
    try {

      const kitchenLogin = await axios.post(

        Api.KITCHEN_LOGIN_API,
        data,
        {
          headers: {
            "Authorization": `${Api.BEARER}`
          }
        }).then(res => {
          setSuccess(res)
          setSpinner(false)
          //console.log("success response", res,)

        }

        );

    } catch (err) {
      //console.log("error response===", err.status)
      //props.navigation.navigate('Home')
      setError(err.response.data.errors);
      setSpinner(false);
    }

  }

  console.log("render", userError)
  return (
    <View style={styles.containerContact}>
      <Text style={styles.spinnerTextStyle}>
        Login
        </Text>
      <Spinner
        visible={userSpinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <ScrollView vertical={true}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => setUserEmail(val)}
        />
        <HelperText type="error" style={styles.helpText} >
          {userError.length > 0 && userError.filter((error) => error.param === "email").map((val, index) => val.msg)[0]}
        </HelperText>

        <TextInput
          style={styles.input}
          placeholder='Passowrd'
          autoCapitalize="none"
          placeholderTextColor='white'
          secureTextEntry={true}
          onChangeText={val => setUserPassword(val)}
        />
        <HelperText type="error" style={styles.helpText} >
          {userError.length > 0 && userError.filter((error) => error.param === "password").map((val, index) => val.msg)[0]}
        </HelperText>
        <HelperText type="error" style={styles.helpText} >
          {userError.length > 0 && userError.filter((error) => error.param === undefined).map((val, index) => val.msg)[0]}
        </HelperText>

        <TouchableHighlight style={[styles.button]} onPress={() => handleSubmit('login')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )

}

export default Login
