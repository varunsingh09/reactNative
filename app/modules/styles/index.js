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
        borderColor: '#252051'
    },

    input: {
        width: Math.round(Dimensions.get('window').width - 20),
        height: 55,
        backgroundColor: '#252051',
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
        paddingLeft: 10
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 70,
        marginTop: 10,
        width: 200,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#252051',
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    helpText: {
        marginLeft: 10,
        margin: 0,
        color: 'red'
    },
    containerList: {
        padding: 15,
        marginTop: 3,
        backgroundColor: '#252051',
        alignItems: 'flex-start',
    },
    signUpText: {
        color: 'white'
    },
    bar: {
        padding: 15,
        marginTop: 30,
        backgroundColor: '#252051',
        alignItems: 'flex-start',
    },
    spinnerTextStyle: {
        color: 'red',
        fontSize: 16,
        margin: 0
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ede9f1',
        paddingLeft: 25
    },
    HeadText: {
        fontSize: 14,
        fontWeight: 'bold',
        alignContent: "center",
        color: 'black',
        marginLeft: 30,
    },
    HeadTextAction: {
        fontSize: 14,
        fontWeight: 'bold',
        alignContent: "center",
        color: 'black',
        marginLeft: 100,

    },
    HeadRow: {
        fontSize: 14,
        fontWeight: '500',
        alignContent: "center",
        color: '#574d6b',
        paddingLeft: 7,
        height: 50,
    },
    HeadRowAction: {
        fontSize: 14,
        fontWeight: 'bold',
        alignContent: "center",
        color: '#574d6b',
        paddingLeft: 30,
        height: 50
    },
    textColor: {
        color: '#ffa300',
        fontWeight: 'bold',
        fontSize: 14,
    },
    searchTextInput: {
        borderWidth: 0,
        borderWidth: .5,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#797578',
        width: 130,
        marginLeft:2
    },
    defaultButton: {
        backgroundColor: "#252052",
        fontWeight: 'bold',
        color: '#fffeff',
        width: 110,
        textAlign: 'left',
        marginTop:13,
        marginLeft:5
    },



});