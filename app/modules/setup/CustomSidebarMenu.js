import React from 'react';

//Import all required component
import { View, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = props => {
    let items = [
        {
            navOptionName: 'Home Screen',
            screenToNavigate: 'HomeScreen',
            icon: <Icon name="home" size={18} />
        },
        {
            navOptionName: 'Setting Screen',
            screenToNavigate: 'SettingsScreen',
            icon: <Icon name="cogs" size={18} />
        },
        {
            navOptionName: 'Product Screen',
            screenToNavigate: 'ProductScreen',
            icon: <Icon name="product-hunt" size={18} />
        },
        // {
        //     navOptionName: 'Logout',
        //     screenToNavigate: 'logout',
        //     icon: <Icon name="sign-out" size={18} />
        // },
        {
            navOptionName: 'My Account',
            screenToNavigate: 'ProfileScreen',
            icon: <Icon name="user" size={18} />
        },

    ];

    const handleClick = (index, screenToNavigate) => {
        if (screenToNavigate == 'logout') {
            props.navigation.toggleDrawer();
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
        } else {
            props.navigation.toggleDrawer();
            global.currentScreenIndex = screenToNavigate;
            props.navigation.navigate(screenToNavigate);
        }
    };
    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                <View style={stylesSidebar.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color: '#307ecc' }}>
                        {'Food App'.charAt(0)}
                    </Text>
                </View>
                <Text style={stylesSidebar.profileHeaderText}>Food App</Text>
            </View>
            <View style={stylesSidebar.profileHeaderLine} />
            <View style={{ width: '100%', flex: 1 }}>
                {items.map((item, key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 20,
                            color: 'white',
                            backgroundColor:
                                global.currentScreenIndex === item.screenToNavigate
                                    ? '#483ea1'
                                    : '#252051',
                        }}
                        key={key}
                        onStartShouldSetResponder={() =>
                            handleClick(key, item.screenToNavigate)
                        }>
                        <Text style={{ fontSize: 15, color: 'white' }}>
                            {item.icon} {item.navOptionName}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

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
export default CustomSidebarMenu;