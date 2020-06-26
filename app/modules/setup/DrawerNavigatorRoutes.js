//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './../screens/Common/HomeScreen';
import SettingsScreen from './../screens/Common/SettingsScreen';
import ProductScreen from './../screens/Product/';
import DeliveryAndZipcodes from './../screens/Product/DeliveryAndZipcodes';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#252051',
            },
            headerTintColor: '#fff',
        }),
    },
    
});

const SecondActivity_StackNavigator = createStackNavigator({
    First: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Setting',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#252051',
            },
            headerTintColor: '#fff',
        }),
    },
});


const ThirdActivity_StackNavigator = createStackNavigator({
    First: {
        screen: ProductScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Product',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#252051',
            },
            headerTintColor: '#fff',
        }),
    },
});
const ForthActivity_StackNavigator = createStackNavigator({
    First: {
        screen: DeliveryAndZipcodes,
        navigationOptions: ({ navigation }) => ({
            title: 'Deliver And Zipcode',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#252051',
            },
            headerTintColor: '#fff',
        }),
    },
});
const DrawerNavigatorRoutes = createDrawerNavigator(
    {
        HomeScreen: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home Screen',
            },
        },
        SettingsScreen: {
            screen: SecondActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Setting Screen',
            },
        },
        ProductScreen: {
            screen: ThirdActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Product Screen',
            },
        },
        DeliveryAndZipcodes: {
            screen: ForthActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Delivery AND Zipcode',
            },
        },
    },
    {
        contentComponent: CustomSidebarMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);
export default DrawerNavigatorRoutes;