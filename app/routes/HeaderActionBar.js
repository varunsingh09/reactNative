import React, { Component, useState } from 'react';
import { Appbar, Searchbar} from 'react-native-paper';


const TopBar = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');


    const goBack = () => navigation.navigate('Home')

    const onChangeSearch = () => console.log('Shown search');

    const handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: '#2089dc' }}>
            <Appbar.BackAction onPress={goBack} size={25} />
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ width: '70%' }}
            />
            <Appbar.Action icon="cart" size={20} onPress={handleMore} />
            {/* <Appbar.Action icon="dots-vertical" size={20} onPress={handleMore} /> */}
        </Appbar.Header>
    );
}

export default TopBar