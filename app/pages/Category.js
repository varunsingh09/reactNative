/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
import CategoryList from "./../components/Categorylist.component"
import { categoryData } from "./../config/category"
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


    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = { listDataSource: categoryData };
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
    onCategoryDetail = (catId) => {
        console.log("category id ", catId)
        this.props.navigation.navigate("Products", { text: "First" })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.listDataSource.map((item, key) => (
                        <CategoryList
                            key={item.category_name}
                            onClickFunction={this.updateLayout.bind(this, key)}
                            onClickCategoryDetail={this.onCategoryDetail}
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

export default Category