import React, { useState, Fragment, Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-paper';
import styles from '../../styles/index';


const ZipcodeSearchbar = () => {
    let [defaultZipcode, setZipCode] = useState('');
    let [defaultState, setDefaultState] = useState('California');
    let [defaultStateList, setDefaultStateList] = useState([
        { value: 'California' },
        { value: 'Illinois' },
    ]);

    const onChangeText = (text) => {
        setDefaultState(text)

    }


    const handleSearch = () => {
        console.log("handleSearch",defaultZipcode , defaultState)
    }

    return (
        <Fragment>

            <View style={styles.containerSearch}>
                <Text style={styles.textColor}>Delivery Zip Code & Kitchens</Text>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: 100, marginTop: -12 }}>
                        <Dropdown
                            value={defaultState}
                            onChangeText={val => onChangeText(val)}
                            label='Refine By State'
                            data={defaultStateList}
                            textColor="#000000"
                            itemColor="#000000"
                            baseColor="#574d6b"
                            selectedItemColor="#ffa300"
                        />

                    </View>
                    <View>
                        <TextInput
                            style={styles.searchTextInput}
                            placeholder="Search by Zip code"
                            placeholderTextColor="#574d6b"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={val => setZipCode(val)}
                        />
                    </View>
                    <View>
                        <Button style={styles.defaultButton} onPress={val => handleSearch(val)}>
                            + ZipCode
                            </Button>
                    </View>
                </View>

            </View>
        </Fragment>
    )


}
export default ZipcodeSearchbar
