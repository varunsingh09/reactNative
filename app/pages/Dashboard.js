import React, { Component } from 'react';

import {
    Image,
    TouchableOpacity,
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
                <Text>DashboardScreen</Text>  
                <Button  
                    title="Go to Welcome Screen"  
                    onPress={() => this.props.navigation.navigate('Welcome')}  
                />  
            </View>  
        );  
    }  
} 

export default DashboardScreen