import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideNavigation extends Component {
    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.items = [
            {
                navOptionThumb: 'dashboard',
                navOptionName: 'Dashboard',
                screenToNavigate: 'Dashboard',
            },
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
            },
            {
                navOptionThumb: 'product-hunt',
                navOptionName: 'Products',
                screenToNavigate: 'Products',
            },
            {
                navOptionThumb: 'shopping-cart',
                navOptionName: 'Checkout',
                screenToNavigate: 'Checkout',
            },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={require('./../assets/images/p.jpeg')}
                    style={styles.sideMenuProfileIcon}
                />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                            }}
                            key={key}>
                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} size={25} color="#808080" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: global.currentScreenIndex === key ? 'red' : 'black',
                                }}
                                onPress={() => {
                                    global.currentScreenIndex = key;
                                    this.props.navigation.navigate(item.screenToNavigate);
                                }}>
                                {item.navOptionName}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 200,
        height: 75,
        marginTop: 5,
        borderRadius: 150 / 2,
    },
});