import { StyleSheet, Platform,Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        height:Math.round(Dimensions.get('window').height),

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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: Math.round(Dimensions.get('window').width),
        height: 40,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 130,
        width: 100,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#59afdc",
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: 'white',
    },
    helpText: {
        marginLeft: 52,
    }
});