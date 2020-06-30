import React from 'react';
//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Import all the screens needed
import SplashScreen from './../screens/Common/SplashScreen';
import DrawerNavigationRoutes from './DrawerNavigatorRoutes';
import AuthNavigation from "./AuthNavigation"


/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({

    SplashScreen: {
        /* SplashScreen which will come once for 5 Seconds */
        screen: SplashScreen,
        navigationOptions: {
            /* Hiding header for Splash Screen */
            headerShown: true,
        },
    },
    Auth: {
        /* Auth Navigator which include Login Signup will come once */
        screen: AuthNavigation,
    },
    DrawerNavigationRoutes: {
        /* Navigation Drawer as a landing page */
        screen: DrawerNavigationRoutes,
        navigationOptions: {
            /* Hiding header for Navigation Drawer as we will use our custom header */
            headerShown: false,
        },
    },

});

export default createAppContainer(App);