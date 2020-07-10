import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Product from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';
import TopBar from "./../routes/HeaderActionBar"

import Cart from '../components/Cart.component';

class Products extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Products',
            //headerLeft: <Logo navigation={navigation} />,
            headerRight: <Cart navigation={navigation} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    componentWillMount = () => {
        this.props.fetchProducts();
    }

    addItemsToCart = (product) => {
        this.props.addToCart(product);
    }

    onChangeSearch = (value) => {

        console.log('Shown search', value);
        this.setState({ searchQuery: value })


    }


    render() {

        const { products, navigation } = this.props
        let { searchQuery } = this.state
        let productsFinal = searchQuery.length > 0 ? products.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())) : products
        console.log(productsFinal)

        return (
            <View style={styles.container}>
                <TopBar navigation={this.props.navigation}
                    searchQuery={this.state.searchQuery}
                    onChangeSearch={this.onChangeSearch} />
                <View style={styles.body}>
                    <FlatList
                        data={productsFinal}
                        renderItem={({ item }) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, { addToCart, fetchProducts })(Products);