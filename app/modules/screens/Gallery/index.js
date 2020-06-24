import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?tree',
                require('../../assets/1.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/3.jpg'),
                require('../../assets/4.jpg'),
                require('../../assets/5.jpg'),
                require('../../assets/6.jpg'),
                require('../../assets/7.jpg'),
                require('../../assets/8.jpg'),
                require('../../assets/9.jpg'),

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