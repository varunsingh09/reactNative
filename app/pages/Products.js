import React, { Component, } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Product from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';
import SearchBar from './SearchBar';
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
            searchQuery: '',
        }
    }

    componentWillMount = () => {
        this.props.fetchProducts();
    }

    addItemsToCart = (product) => {
        this.props.addToCart(product);
    }

    updateSearch = (search) => {

        console.log('Shown search', search);
        this.setState({ searchQuery: search })

    }


    render() {

        const { products, navigation } = this.props
        let { searchQuery } = this.state
        let productsFinal = searchQuery.length > 0 ? products.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())) : products

        //console.log('results', productsFinal);
        return (
            <View style={styles.container}>

                <SearchBar searchQuery={searchQuery} updateSearch={this.updateSearch} />

                <View style={styles.body}>
                    <FlatList
                        data={productsFinal}
                        renderItem={({ item }) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90', width: '94%', marginLeft: 10 }} />} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
    }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, { addToCart, fetchProducts })(Products);