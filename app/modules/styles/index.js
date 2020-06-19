import { StyleSheet, Platform, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
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
        width: Math.round(Dimensions.get('window').width-20),
        height: 55,
        backgroundColor: '#42A5F5',
        marginTop:10,
        paddingLeft: 8,   
        color: 'white',
        borderRadius: 14,
        fontSize: 14,
        fontWeight: '500',
        borderWidth:1
    },
    containerContact: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 70,
        width: 200,
        borderWidth:1,
        borderRadius: 30,
        backgroundColor: '#42A5F5',
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    helpText: {
        marginLeft: 10,
        margin:0
    },
    containerList: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#42A5F5',
        alignItems: 'center',
      },
      text: {
        color: 'white'
      }
});