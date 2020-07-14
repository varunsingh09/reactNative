
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';
import ListView from "deprecated-react-native-listview";

class AddressList extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { image: "https://bootdey.com/img/Content/avatar/avatar1.png", title: 'Varun Singh', pincode: 201012, address: 'A2-207, Rail Kunj, Vasundhara', state: 'Uttar Pradesh', country: 'India' },
                { image: "https://bootdey.com/img/Content/avatar/avatar6.png", title: 'Varun Singh', pincode: 201012, address: 'A2-207, Rail Kunj, Vasundhara', state: 'Uttar Pradesh', country: 'India' },
                { image: "https://bootdey.com/img/Content/avatar/avatar2.png", title: 'Varun Singh', pincode: 201012, address: 'A2-207, Rail Kunj, Vasundhara', state: 'Uttar Pradesh', country: 'India' },
                { image: "https://bootdey.com/img/Content/avatar/avatar3.png", title: 'Varun Singh', pincode: 201012, address: 'A2-207, Rail Kunj, Vasundhara', state: 'Uttar Pradesh', country: 'India' },
                { image: "https://bootdey.com/img/Content/avatar/avatar4.png", title: 'Varun Singh', pincode: 201012, address: 'A2-207, Rail Kunj, Vasundhara', state: 'Uttar Pradesh', country: 'India' },
            ]),
        };
    }


    clickListener = () => {

        console.log('clickListener')
    }
    render() {
        return (
            <ListView enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(service) => {
                    return (
                        <View style={styles.box}>
                            <Image style={styles.image} source={{ uri: service.image }} />
                            <View style={styles.boxContent}>
                                <Text style={styles.title}>{service.title}</Text>
                                <Text style={styles.description}>{service.address},{service.pincode}</Text>
                                <Text style={styles.description}>Pincode {service.pincode}</Text>
                                <Text style={styles.description}>{service.title}</Text>
                                <Text style={styles.description}>{service.state} , {service.country}</Text>
                                <View style={styles.buttons}>
                                    {/* <TouchableHighlight style={[styles.button, styles.view]}
                                        onPress={() => this.clickListener('view')}>
                                        <Text style={styles.title}>View</Text>
                                    </TouchableHighlight> */}

                                    <TouchableHighlight style={[styles.button, styles.profile]}
                                        onPress={() => this.clickListener('edit')} >
                                        <Text style={styles.title}>Edit</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={[styles.button, styles.messageDel]}
                                        onPress={() => this.clickListener('delete')} >
                                        <Text style={styles.title}>Delete</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    )
                }} />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    box: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    boxContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#151515",
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 70,
        marginRight: 5,
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
    view: {
        backgroundColor: "#FF1493",
    },
    profile: {
        backgroundColor: "#1E90FF",
    },
    message: {
        backgroundColor: "#228B22",
    },
    messageDel: {
        backgroundColor: "#FA1D2F",
    },
});


export default AddressList