import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import { TouchableOpacity, Image } from 'react-native';

import Home from './../screens/Home/index';
import About from './../screens/About/index';
import Contact from './../screens/Contact/index';
import Gallery from './../screens/Gallery/index';
import DrawerScreen from './../screens/Common/DrawerScreen';
import Login from "./../screens/User/Login"
import DeliveryAndZipcodes from "./../screens/Kitchen/DeliveryAndZipcodes"

const Tabs = createMaterialTopTabNavigator({
    Home: Home,
    Product: About,
    Contact: Contact,
    Gallery: Gallery
}, {
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Tabs
    },
    Login: {
        screen: Login
    },
    Delivery: {
        screen: DeliveryAndZipcodes
    }
}, {
    initialRouteName: 'Home',
    contentComponent: props => <DrawerScreen {...props} />,
    drawerWidth: 200
});

const MenuImage = ({ navigation }) => {

    if (!navigation.state.isDrawerOpen) {
        return <Image source={require('./../images/menu-button.png')} />
    } else {
        return <Image source={require('./../images/left-arrow.png')} />
    }
}

const StackNavigators = createStackNavigator({

    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator: {
        screen: DrawerNavigator
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        title: 'Food App',  // Title to appear in status bar
        headerLeft:
            <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                <MenuImage style="styles.bar" navigation={navigation} />
            </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#252051',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight:50
        },
        headerLeftContainerStyle:{
            paddingLeft:10
        }

    })
});

const StackNavigator = createAppContainer(StackNavigators);

export default StackNavigator;
