import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
    StyleSheet,
} from 'react-native';

import AppDrawerNavigator from "./StackNavigator"

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator ,},
    

    //  Welcome: { screen: WelcomeScreen },  

},);

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AppContainer