import React from 'react';

//Import all required component
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';


const Search = () => {
    return <View>
        <Text>Search</Text>

    </View>
}

const HomeScreen = () => {
    global.currentScreenIndex = 'HomeScreen';
    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Home Screen Example
      </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}></Text>
        </View>
    );
};

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },

    Search: Search,
},
    {
        tabBarOptions: {
            activeTintColor: '#307ecc',
            inactiveTintColor: '#ffffff',
            style: {
                backgroundColor: '#252051',
            },
            indicatorStyle: {
                backgroundColor: '#252051',
            },
            labelStyle: {
                fontSize: 15,
                margin: 0,
                paddingBottom: 15,
                backgroundColor: '#252051',
            },
        }
    });


export default createAppContainer(TabNavigator);