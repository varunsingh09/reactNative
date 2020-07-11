import React from 'react';
//Import Navigators from React Navigation
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './../pages/users/LoginScreen';
import RegisterScreen from './../pages/users/RegisterScreen';


const AuthNavigation = createStackNavigator({
    //Stack Navigator for Login and Sign up Screen
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
            title: 'Register',
            headerStyle: {
                backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
        },
    },
});


export default AuthNavigation