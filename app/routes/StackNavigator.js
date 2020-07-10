import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, View, Dimensions } from 'react-native';


import DashboardScreen from "./../pages/Dashboard"
import HomeScreen from "./../pages/Home"
import ProductScreen from "./../pages/Products"
import SideNavigation from "./SideNavigation"
import TopBar from "./HeaderActionBar"



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
                ),
                header: <TopBar navigation={navigation} />
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

const NavigationDrawerStructure = () => {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                {/*Donute Button Image */}
                <Image
                    source={require('./../assets/images/eco-logo.png')}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />

            </TouchableOpacity>
        </View>)
}

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator,

    },
    Home: {
        screen: HomeStackNavigator
    },
    Products: {
        screen: ProductStackNavigator
    },
}, {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: SideNavigation,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
});



export default AppDrawerNavigator

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});