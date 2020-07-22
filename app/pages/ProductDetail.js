import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
        };
    }


    componentDidMount = () => {
        this.props.fetchProducts();
    }


    setImageSelected = (image) => {
        this.setState({ selectedImage: image });
    }

    renderImages = (images) => {
        return (
            <View style={styles.smallImagesContainer}>
                {images.map((url, key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => { this.setImageSelected(url) }}>
                            <Image style={styles.smallImage} source={url} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    renderColors = (colors) => {
        return (
            <View style={styles.contentColors}>
                {colors.map((color, key) => {
                    return (
                        <TouchableOpacity key={key} style={[styles.btnColor, { backgroundColor: color }]}></TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    render() {


        const { products, navigation } = this.props
        let productsFinal = products.filter((item) => item.id === "1")
        let { picture, title, introduction, cost, images, colors } = productsFinal[0]


        var mainImage = (this.state.selectedImage) ? this.state.selectedImage : picture;
        //console.log(mainImage, "===========", this.state.selectedImage)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.name}>{title}</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.header}>
                                <View style={styles.mainImageContainer}>
                                    <Image style={styles.mainImage} source={mainImage} />
                                </View>
                                {this.renderImages(images)}
                            </View>
                        </View>
                    </View>
                    {colors !== null &&
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Colors</Text>
                            </View>
                            <View style={styles.cardContent}>
                                {this.renderColors(colors)}
                            </View>
                        </View>
                    }
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Price</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.description}>{cost}</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Description</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.description}>{introduction}</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                                <Text style={styles.shareButtonText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, { fetchProducts })(ProductDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: "#ebf0f7",
    },
    content: {
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    header: {
        flexDirection: 'row-reverse',
    },
    mainImage: {
        width: 230,
        height: 250,
        marginTop: 5,

    },
    smallImagesContainer: {
        flexDirection: 'column',
        marginLeft: 0,
        flex: 1
    },
    smallImage: {
        width: 70,
        height: 80,
        marginTop: 5,
        flexDirection: 'column-reverse',
    },
    btnColor: {
        height: 40,
        width: 40,
        borderRadius: 40,
        marginHorizontal: 3
    },
    contentColors: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 22,
        color: "#696969",
        fontWeight: 'bold',

    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        color: "#696969",
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },

    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 5,

    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,


    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardTitle: {
        color: "#00BFFF",
    }
});  