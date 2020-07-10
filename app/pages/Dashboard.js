import React, { Component } from 'react';
import ProductScreen from "./../pages/Products"
import {
    View,
    Text,
    Button
} from 'react-native';



class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ProductScreen />
            </View>
        );
    }
}

export default DashboardScreen