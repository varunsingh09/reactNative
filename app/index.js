import React, { useEffect, Fragment } from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import Navigator from './modules/setup/routes';
import styles from './../app/modules/styles/index';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    console.log("warn====", Platform.OS)
    return (
        <Fragment>
            {/* {Platform.OS === 'android' && <StatusBar barStyle="dark-content" />}
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}> */}
                    <Navigator />
                {/* </ScrollView>
            </SafeAreaView> */}
        </Fragment>
    )
}

export default App