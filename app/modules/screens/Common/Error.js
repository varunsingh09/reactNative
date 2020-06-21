import React from 'react'
import { Text } from 'react-native'
import styles from '../../styles/index';
const Buggy = (props) => {
    console.log("come")
    return (

        <Text style={styles.spinnerTextStyle}>
            {props.message}
        </Text>


    )
}
Buggy.defaultProps = {
    message: "Remote server not working"
};

export default Buggy