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
import { Dropdown } from 'react-native-material-dropdown';
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
                state: '',
                city: '',
                contact_no: '',
                email: '',
                password: '',
                confirm_password: '',
                agreement_policy: true,
            },
            states: [],
            cities: [],
            errors: [],
            spinner: false,
            success: [],
            stateCityList: []
        }
    }

    onChangeText = (name, value) => {
        let { userInfo } = this.state;


        let cityListArr = name === "state" && this.state.stateCityList.length > 0 &&
            this.state.stateCityList.filter(list => list.state === value);

        let city = name === "state" && cityListArr[0].cityList !== undefined && cityListArr[0].cityList.map((city) => {
            return { value: city }
        })

        if (name === "state") {
            this.setState({ cities: city });
        }
 
        this.setState({ userInfo: { ...userInfo, [name]: value } });

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
            this.setState({ "errors": err.response.data.errors, spinner: false })
        }

    }

    componentDidMount = () => {
        this.getStateCityList()
    }

    getStateCityList = async () => {

        try {

            const KitchenStateCity = await axios(
                {
                    method: 'get',
                    url: `${Api.STATE_CITY_FETCH_API}`,
                    headers: { Authorization: `${Api.BEARER}` }
                }
            ).then(res => {

                //console.log("state list", res.data.result)

                let states = res.data.result.length > 0 && res.data.result.map((city, index) => {
                    let states = { value: city.state }
                    return states
                })
                this.setState({ states: states, stateCityList: res.data.result })
            }

            );

        } catch (err) {
            console.log("error coming ", err)
        }

    }




    render() {
        console.log("render", this.state.userInfo)
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
                    <Dropdown
                        //  value={this.defaultState}
                        onChangeText={val => this.onChangeText('state', val)}
                        label='Select State'
                        data={this.state.states}

                        itemColor="#574d6b"
                        baseColor="#574d6b"
                        selectedItemColor="#574d6b"
                        dropdownOffset={{ top: 5 }}
                        containerStyle={styles.input}

                    />
                    <Dropdown
                        //  value={this.defaultState}
                        label='Select City'
                        data={this.state.cities}
                        itemColor="#574d6b"
                        baseColor="#574d6b"
                        selectedItemColor="#574d6b"
                        dropdownOffset={{ top: 7 }}
                        onChangeText={val => this.onChangeText('city', val)}
                        containerStyle={styles.input}

                    />
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