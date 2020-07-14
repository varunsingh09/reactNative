
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListView from "deprecated-react-native-listview";

export default class UserProfileView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { image: "https://png.icons8.com/shopping-cart/color/40", label: "Order", title: "order" },
                { image: "https://png.icons8.com/heart-outline/color/40", label: "Address List", title: "address_list" },
                { image: "https://png.icons8.com/voice-recognition/color/40", label: "Comment", title: "comment" },
                { image: "https://png.icons8.com/downloads/office/40", label: "Download", title: "download" },
                { image: "https://png.icons8.com/edit-file/color/40", label: "Logout", title: "logout" },

            ]),
        };
    }

    onClickHandle = (users) => {


        if (users.title === "Logout") {
            this.handleLogout();
        } else if (users.title === "address_list") {
            console.log("address_list",users.title);
            this.props.navigation.navigate('AddressListScreen');
        }


    }


    handleLogout = () => {

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
                        this.props.navigation.navigate('Auth');
                        console.log('logout');
                    },
                },
            ],
            { cancelable: false }
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image style={styles.avatar} source={require('./../../assets/images/p.jpeg')} />
                            <Text style={styles.name}>Varun Sisodia</Text>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <ListView style={styles.container} enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={(user, index) => {
                                return (
                                    <TouchableOpacity onPress={() => this.onClickHandle(user)}>
                                        <View style={styles.box} >
                                            <Image style={styles.icon} source={{ uri: user.image }} />
                                            <Text style={styles.title}>{user.label}</Text>
                                            <Image style={styles.btn} source={{ uri: "https://png.icons8.com/customer/office/40" }} />
                                        </View>
                                    </TouchableOpacity>
                                )
                            }} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#ebf0f7",
    },

    header: {
        backgroundColor: "lightgrey",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FF6347",
        marginBottom: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 16,
        color: "black",
        marginLeft: 4
    },
    btn: {
        marginLeft: 'auto',
        width: 40,
        height: 40,
    },
    body: {
        backgroundColor: "#E6E6FA",
        marginLeft: 0
    },
    box: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
    },
    username: {
        color: "#20B2AA",
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 10
    }
}); 