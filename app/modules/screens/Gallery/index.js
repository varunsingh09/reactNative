import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

import a1 from "../../assets/a1.jpg"
import a2 from "../../assets/a2.jpg"
import a3 from "../../assets/a3.jpg"
import a4 from "../../assets/a4.jpg"
import a5 from "../../assets/a5.jpg"
import a6 from "../../assets/a6.jpg"
import a7 from "../../assets/a7.jpg"
import a8 from "../../assets/a8.jpg"
import a9 from "../../assets/a9.jpg"
import a10 from "../../assets/a10.jpg"
import a11 from "../../assets/a11.jpg"
import a12 from "../../assets/a12.jpg"
import a13 from "../../assets/a13.jpg"
import a20 from "../../assets/a20.jpg"
import a21 from "../../assets/a21.jpg"
import a22 from "../../assets/a22.jpg"
import a23 from "../../assets/a23.jpg"
import a24 from "../../assets/a24.jpg"
import a25 from "../../assets/a25.jpg"
import a26 from "../../assets/a26.jpg"

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../assets/a1.jpg'),
                require('../../assets/a2.jpg'),
                require('../../assets/a3.jpg'),
                require('../../assets/a4.jpg'),
                require('../../assets/a5.jpg'),
                require('../../assets/a6.jpg'),
                require('../../assets/a7.jpg'),
                require('../../assets/a8.jpg'),
                require('../../assets/a9.jpg'),
                require('../../assets/a10.jpg'),
                require('../../assets/a11.jpg'),
                require('../../assets/a12.jpg'),
                require('../../assets/a13.jpg'),
                require('../../assets/a20.jpg'),
                require('../../assets/a21.jpg'),
                require('../../assets/a22.jpg'),
                require('../../assets/a23.jpg'),
                require('../../assets/a24.jpg'),
                require('../../assets/a25.jpg'),
                require('../../assets/a26.jpg'),
            ],
            screenHeight: Math.round(Dimensions.get('window').height),
            screenWidth: Math.round(Dimensions.get('window').width)
        };
    }


    render() {

        return (
            <View style={styles.container} onLayout={this.onLayout}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={this.state.screenHeight}
                    parentWidth={this.state.screenWidth}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});