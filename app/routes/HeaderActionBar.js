import React, { Component, useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';


const TopBar = ({ navigation, searchQuery, onChangeSearch }) => {


    goBack = () => {

        console.log("goBack--------", navigation)
        navigation.navigate('Home')
    }

    goToCart = () => {

        console.log("goToCart--------", navigation)
        navigation.navigate('Checkout')
    }

    return (
        <Appbar.Header style={
            {
                backgroundColor: '#2089dc',
                width: '100%'
            }
        }>
            <Appbar.BackAction onPress={goBack} size={25} />
            <Searchbar
                placeholder='What you are looking?'
                onChangeText={(value) => onChangeSearch(value)}
                value={searchQuery}
                style={{ width: '75%', fontSize: 10, elevation: 0 }}
            />
            <Appbar.Action icon="cart" size={20} onPress={goToCart} />
            {/* <Appbar.Action icon="dots-vertical" size={20} onPress={handleMore} /> */}
        </Appbar.Header>
    );
}

export default TopBar