import React, { Component } from "react";
import { View, Text, Button, Alert, Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";


export default function (ComposedComponent) {
    class NetworkDetector extends Component {

        constructor(props) {        
            super(props);
            this.state = {};
        }

        CheckConnectivity = () => {
            // For Android devices
            if (Platform.OS === "android") {
                NetInfo.isConnected.fetch().then(isConnected => {
                    if (isConnected) {
                        Alert.alert("You are online!");
                    } else {
                        Alert.alert("You are offline!");
                    }
                });
            } else {
                // For iOS devices
                NetInfo.isConnected.addEventListener(
                    "connectionChange",
                    this.handleFirstConnectivityChange
                );
            }
        };

        handleFirstConnectivityChange = isConnected => {
            NetInfo.isConnected.removeEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );

            if (isConnected === false) {
                Alert.alert("You are offline!");
            } else {
                Alert.alert("You are online!");
            }
        };

        render() {
            return (
                <View>
                    <Button
                        onPress={() => this.CheckConnectivity()}
                        title="Check Internet Connectivity"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <ComposedComponent {...this.props} />
                </View>
            );
        }
    }
    return NetworkDetector
}