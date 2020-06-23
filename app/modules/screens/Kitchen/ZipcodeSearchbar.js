import React, { useState, Fragment, Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-paper';
import styles from '../../styles/index';


class ZipcodeSearchbar extends Component {
    // setSelectedValue] = useState(1);
    constructor(props) {
        super(props)
       // this.nameRef = this.updateRef.bind(this, 'name');

        this.state = {
            name: 'California',
            colorNameData: [
                { value: 'California' },
                { value: 'Illinois' },
            ]
        };

    }
    onChangeText = (text) => {
        ['name']
            .map((name) => ({ name, ref: this[name] }))
            .filter(({ ref }) => ref && ref.isFocused())
            .forEach(({ name, ref }) => {
                this.setState({ [name]: text });
            });
    }

    // updateRef(name, ref) {
    //     this[name] = ref;
    // }

    

    render() {
        let { name } = this.state;

        return (
            <Fragment>

                <View style={styles.containerSearch}>
                    <Text style={styles.textColor}>Delivery Zip Code & Kitchens</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: 100 ,marginTop:-12}}>
                            <Dropdown
                               // ref={this.nameRef}
                                value={this.state.name}
                                onChangeText={this.onChangeText}
                                label='Refine By State'
                                data={this.state.colorNameData}
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
                                onChangeText={val => setSearchText(val)}
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

}
export default ZipcodeSearchbar
