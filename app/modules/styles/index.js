import { StyleSheet, Platform, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        height: Math.round(Dimensions.get('window').height),

    },

    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },

    input: {
        width: Math.round(Dimensions.get('window').width - 20),
        height: 55,
        backgroundColor: '#333',
        marginTop: 10,
        paddingLeft: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 14,
        fontWeight: '500',
        borderWidth: 1
    },
    containerContact: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    button: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 70,
        width: 200,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    helpText: {
        marginLeft: 10,
        margin: 0,
        color:'red'
    },
    containerList: {
        padding: 15,
        marginTop: 3,
        backgroundColor: '#333',
        alignItems: 'flex-start',
    },
    signUpText: {
        color: 'white'
    },
    bar: {
        padding: 15,
        marginTop: 30,
        backgroundColor: '#333',
        alignItems: 'flex-start',
    },
    spinnerTextStyle: {
        color: 'red',
        fontSize: 16
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }
});