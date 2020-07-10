import React, { Component } from 'react';

import {
    Image,
    TouchableOpacity,
    View,
    Text,
    Button
} from 'react-native';



class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Dashboard"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
}

export default HomeScreen