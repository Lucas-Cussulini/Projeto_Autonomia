import {StyleSheet} from "react-native";


export default StyleSheet.create({

    container: {
        flexGrow:1,
        backgroundColor: "#f7da8b",
        alignItems: 'center'
    },

    title: {
        padding: 35,
        lineHeight: 30,
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginTop: 30
    },

    description: {
        lineHeight: 30,
        fontSize: 18,
        color: '#000',
        paddingLeft: 30,
        marginTop: 40,
    },

    icon2: {

        marginLeft: 300
    },

    goButton: {
        alignItems: 'center',
        // backgroundColor: '#ffd6ff',
        backgroundColor: '#ebebeb',
        alignSelf: 'center',
        paddingTop: 25,
        height: 50,
        width: 370,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 0,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },

    textGoButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: -12
    },
});