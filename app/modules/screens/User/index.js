import React, { useState } from 'react';

//Import all required component
import { Alert, Text, StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logout = (props) => {
    const unsubscribe = props.navigation.addListener('didFocus', () => {
        Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        return null;
                    },
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        AsyncStorage.clear();
                        props.navigation.navigate('Auth');
                        console.log('logout');
                    },
                },
            ],
            { cancelable: false }
        );

    });

    return true
};

const Profile = () => {

    return <Text style={{ fontSize: 25, color: '#307ecc' }}>
        <Text>Profile</Text>
    </Text>

}

const TabNavigator = createBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user-secret" color={tintColor} size={20} />
            )
        },
    }, Logout: {
        screen: Logout,
        navigationOptions: {
            tabBarLabel: 'Logout',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="sign-out" color={tintColor} size={20} />
            )
        },
    },



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
                paddingBottom: 7,
                backgroundColor: '#252051',
            },
        }
    });



const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    title: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default createAppContainer(TabNavigator);

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#252051',
        paddingTop: 40,
        color: 'white',
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#252051',
        padding: 15,
        textAlign: 'center',
    },
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        color: 'white',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeaderText: {
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: '#e2e2e2',
        marginTop: 15,
        marginBottom: 10,
    },
});