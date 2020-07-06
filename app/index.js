import React, { useEffect, Fragment } from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import Navigator from './modules/setup/routes';
import styles from './../app/modules/styles/index';


const App = () => {
    console.disableYellowBox = true;
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Fragment>
            {Platform.OS === 'android' && <StatusBar barStyle="dark-content" />}
            <Navigator />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}

//export default NetworkDetector(App)

export default App