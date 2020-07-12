import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, View, Dimensions } from 'react-native';
import AuthNavigation from "./AuthNavigation"
import NavigationDrawerHeader from './NavigationDrawerHeader';
import SideNavigation from "./SideNavigation"


import DashboardScreen from "./../pages/Dashboard"
import HomeScreen from "./../pages/Home"
import ProductScreen from "./../pages/Products"
import ProductDetailScreen from "./../pages/ProductDetail"
import CheckoutScreen from "./../pages/Checkout"
import ReceiptScreen from "./../pages/Receipt"
import ProfileScreen from "./../pages/users/"



const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-menu" screen={null} />
                // headerLeft: (
                //     <Icon
                //         style={{ paddingLeft: 10 }}
                //         onPress={() => navigation.openDrawer()}
                //         name="md-menu"
                //         size={30}
                //     />
                // ),
                //header: <TopBar navigation={navigation} />
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
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />
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
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />
            };
        }
    }
);


const CheckoutStackNavigator = createStackNavigator(
    {
        CheckoutNavigator: CheckoutScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />
            };
        }
    }
);

const ReceiptStackNavigator = createStackNavigator(
    {
        ReceiptNavigator: ReceiptScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />
            };
        }
    }
);

const ProfileStackNavigator = createStackNavigator(
    {
        ProfileNavigator: ProfileScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />,
                title: 'Profile Screen',
            };
        }
    }
);

const ProductDetailStackNavigator = createStackNavigator(
    {
        ProductDetailNavigator: ProductDetailScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <NavigationDrawerHeader navigation={navigation} name="md-arrow-back" screen="Dashboard" />,
                title: 'Product Detail',
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

let drawerNavigation = {

    Dashboard: {
        screen: DashboardStackNavigator,
    },
    Home: {
        screen: HomeStackNavigator
    },
    Products: {
        screen: ProductStackNavigator
    },
    Checkout: {
        screen: CheckoutStackNavigator
    },
    Receipt: {
        screen: ReceiptStackNavigator
    },
    ProfileScreen: {
        screen: ProfileStackNavigator
    },
    ProductDetailScreen: {
        screen: ProductDetailStackNavigator
    },
    Auth: {
        /* Auth Navigator which include Login Signup will come once */
        screen: AuthNavigation,
    }
}




const AppDrawerNavigator = createDrawerNavigator(
    drawerNavigation
    , {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: SideNavigation,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        animationEnabled: true,
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