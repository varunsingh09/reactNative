import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    View,
} from 'react-native';

import DashboardScreen from "./../pages/Dashboard"
import HomeScreen from "./../pages/Home"
import ProductScreen from "./../pages/Products"

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const HomeStackNavigator = createStackNavigator(
    {
        HomeNavigator: HomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const ProductStackNavigator = createStackNavigator(
    {
        ProductNavigator: ProductScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Home: {
        screen: HomeStackNavigator
    },
    Products: {
        screen: ProductStackNavigator
    },

});



export default AppDrawerNavigator