/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
import CategoryList from "./../components/Categorylist.component"
//import react in our project
import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    Platform,
} from 'react-native';
//import basic react native components

class Category extends Component {
    //Main View defined under this Class

    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = { listDataSource: CONTENT };
    }

    updateLayout = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.listDataSource];
        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
                : (array[placeindex]['isExpanded'] = false)
        );
        this.setState(() => {
            return {
                listDataSource: array,
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.listDataSource.map((item, key) => (
                        <CategoryList
                            key={item.category_name}
                            onClickFunction={this.updateLayout.bind(this, key)}
                            item={item}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#F5FCFF',

    },
    topHeading: {
        paddingLeft: 10,
        fontSize: 20,
    },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Fashion',
        subcategory: [
            { id: 1, val: 'Men' },
            { id: 3, val: 'Women' },
            { id: 4, val: 'Children' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Mobile',
        subcategory: [
            { id: 5, val: 'Samsung' },
            { id: 6, val: 'Apple' },
            { id: 7, val: 'Motorola' }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Books',
        subcategory: [
            { id: 8, val: 'Computer' },
            { id: 9, val: 'Medical' }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Electronics',
        subcategory: [
            { id: 10, val: 'TV' },
            { id: 11, val: 'Laptop' },
            { id: 12, val: 'Home Appliances' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Grocery',
        subcategory: [
            { id: 13, val: 'Fragnence' },
            { id: 14, val: 'Pulses' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Toys',
        subcategory: [
            { id: 17, val: 'Game' },
            { id: 18, val: 'Baby Care' }
        ],
    },
    
];

export default Category