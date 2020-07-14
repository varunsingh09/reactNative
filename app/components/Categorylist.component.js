/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
//import basic react native components

class CategoryList extends Component {
    //Custom Component for the Expandable List
    constructor() {
        super();
        this.state = {
            layoutHeight: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.item.isExpanded) {
            this.setState(() => {
                return {
                    layoutHeight: null,
                };
            });
        } else {
            this.setState(() => {
                return {
                    layoutHeight: 0,
                };
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.layoutHeight !== nextState.layoutHeight) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <View>
                {/*Header of the Expandable List Item*/}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.props.onClickFunction}
                    style={styles.header}>
                    <Text style={styles.headerText}>{this.props.item.category_name}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        height: this.state.layoutHeight,
                        overflow: 'hidden',
                    }}>
                    {/*Content under the header of the Expandable List Item*/}
                    {this.props.item.subcategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                            onPress={() => console.log('Id: ' + item.id + ' val: ' + item.val)}>
                            <Text style={styles.text}>
                                {key}. {item.val}
                            </Text>
                            <View style={styles.separator} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    topHeading: {
        paddingLeft: 10,
        fontSize: 20,
    },
    header: {
        backgroundColor: 'steelblue',
        padding: 16,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
    content: {
        paddingLeft: 30,
        paddingRight: 10,
        backgroundColor: 'skyblue',
    },
});



export default CategoryList