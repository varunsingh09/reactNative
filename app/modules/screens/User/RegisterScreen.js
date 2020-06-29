import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

//Import all required component
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Loader from './../Common/Loader';
import { Dropdown } from 'react-native-material-dropdown';
import * as Api from "./../../../../config/config"

const RegisterScreen = props => {

    let [states, setStates] = useState([]);
    let [stateCityList, setStateCityList] = useState([]);
    let [cities, setCities] = useState([]);
    let [city, setCity] = useState([]);
    let [address, setAddress] = useState('');
    let [kitchen_name, setKitchenName] = useState('');
    let [zipcode, setZipcode] = useState('');
    let [email, setEmail] = useState('');
    let [contact_no, setContactNumber] = useState('');
    let [password, setPassword] = useState('');
    let [confirm_password, setConfirmPassword] = useState('');
    let [agreement_policy, setAgreementPolicy] = useState(true);
    let [loading, setLoading] = useState(false);
    let [errortext, setErrortext] = useState('');
    let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    const nameRef = useRef([])
    const stateRef = useRef([])
    const cityRef = useRef([])
    const addressRef = useRef([])

    useEffect(async () => {

        try {

            const KitchenStateCity = await axios(
                {
                    method: 'get',
                    url: `${Api.STATE_CITY_FETCH_API}`,
                    headers: { Authorization: `${Api.BEARER}` }
                }
            ).then(res => {

                let states = res.data.result.length > 0 && res.data.result.map((city, index) => {
                    let states = { value: city.state }
                    return states
                })
                setStates(states)
                setStateCityList(res.data.result)
            }

            );

        } catch (err) {
            console.log("error coming ", err)
        }

    }, [])


    const setCityList = (value) => {

        let cityListArr = stateCityList.length > 0 && stateCityList.filter(list => list.state === value);

        let city = cityListArr[0].cityList !== undefined && cityListArr[0].cityList.map((city) => {
            return { value: city }
        })

        setCities(city)
    }


    const handleSubmitButton = () => {
        setErrortext('');
        if (!kitchen_name) {
            nameRef = kitchen_name.current.value;
            alert('Please fill Kitchen Name');
            return;
        }
        if (!address) {
            nameRef = address.current.value;
            alert('Please fill address');
            return;
        }
        if (!zipcode) {
            zipcodeRef = zipcode.current.value;
            alert('Please fill Zipcode');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!contact_no) {
            alert('Please fill Contact No');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        if (!confirm_password) {
            alert('Please fill Confirm Password');
            return;
        }
        //Show Loader
        setLoading(true);
        var dataToSend = {
            user_name: userName,
            user_email: userEmail,
            user_age: userAge,
            user_address: userAddress,
        };
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('https://aboutreact.herokuapp.com/register.php', {
            method: 'POST',
            body: formBody,
            headers: {
                //Header Defination
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                //Hide Loader
                setLoading(false);
                console.log(responseJson);
                // If server response message same as Data Matched
                if (responseJson.status == 1) {
                    setIsRegistraionSuccess(true);
                    console.log('Registration Successful. Please Login to proceed');
                } else {
                    setErrortext('Registration Unsuccessful');
                }
            })
            .catch(error => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };
    if (isRegistraionSuccess) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#307ecc',
                    justifyContent: 'center',
                }}>
                <Image
                    source='https://png.pngtree.com/png-clipart/20190516/original/pngtree-check-mark-icon-png-image_3566317.jpg'
                    style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
                />
                <Text style={styles.successTextStyle}>Registration Successful.</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonTextStyle}>Login Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#252051', marginTop: -70 }}>
            <Loader loading={loading} />
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source='https://aboutreact.com/wp-content/uploads/2019/04/attempt7.png'
                        style={{
                            width: '50%',
                            height: 100,
                            resizeMode: 'contain',
                            margin: 30,
                        }}
                    />
                </View>
                <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={kitchen_name => setKitchenName(kitchen_name)}
                            //underlineColorAndroid="#FFFFFF"
                            placeholder="Kitchen Name (OR) Company Name"
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            ref={nameRef}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Dropdown
                            onChangeText={state => setCityList(state)}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            autoCapitalize="sentences"
                            label='Select State'
                            data={states}
                            itemColor="#574d6b"
                            baseColor="#574d6b"
                            selectedItemColor="#574d6b"
                            dropdownOffset={{ top: 5 }}
                            containerStyle={styles.inputStyle}
                            ref={stateRef}

                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Dropdown
                            onChangeText={city => setCity(city)}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            autoCapitalize="sentences"
                            label='Select City'
                            data={cities}
                            itemColor="#574d6b"
                            baseColor="#574d6b"
                            selectedItemColor="#574d6b"
                            dropdownOffset={{ top: 5 }}
                            containerStyle={styles.inputStyle}
                            ref={cityRef}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={address => setAddress(address)}
                            //underlineColorAndroid="#FFFFFF"
                            placeholder="Address"
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            ref={addressRef}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={zipcode => setZipcode(zipcode)}
                            placeholder="Zipcode"
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={email => setEmail(email)}
                            //underlineColorAndroid="#F6F6F7"
                            placeholder="Email"
                            placeholderTextColor="#F6F6F7"
                            keyboardType="email-address"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={contact_no => setContactNumber(contact_no)}
                            //underlineColorAndroid="#FFFFFF"
                            placeholder="Contact Number"
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={password => setPassword(password)}
                            placeholder='Password'
                            secureTextEntry={true}
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={confirm_password => setConfirmPassword(confirm_password)}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            placeholderTextColor="#F6F6F7"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    {errortext != '' ? (
                        <Text style={styles.errorTextStyle}> {errortext} </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
});