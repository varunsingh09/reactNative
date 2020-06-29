import React, { useState } from 'react';

//Import all required component
import { View, Text, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppIntroSlider from 'react-native-app-intro-slider';

const Search = () => {
    return <View>
        <Text>Search</Text>

    </View>
}

const HomeScreen = () => {
    global.currentScreenIndex = 'HomeScreen';

    let [showRealApp, setShowRealApp] = useState(false)
    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    const renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    const onDone = () => {
        setShowRealApp(true)
    };

    const onSkip = () => {
        setShowRealApp(true)
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100
                }}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    //If false show the Intro Slides
    if (showRealApp) {
        //Real Application
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                }}>
                <Text>
                    This will be your screen when you click Skip from any slide or Done
                    button at last
              </Text>
            </View>
        );
    } else {
        //Intro slides
        return (
            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                onDone={onDone}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
            />
        );
    }

}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} size={20} />
            )
        },
    },

    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" color={tintColor} size={20} />
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

const slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
        },
        backgroundColor: '#f6437b',
    },
    {
        key: 's6',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
];

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