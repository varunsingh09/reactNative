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
                    title="Go to Welcome Screen"  
                    onPress={() => this.props.navigation.navigate('Welcome')}  
                />  
            </View>  
        );  
    }  
} 

export default HomeScreen