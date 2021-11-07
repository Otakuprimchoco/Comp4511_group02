
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#fff",
        width: 375,
    },
    item: {
        marginVertical: 1,
        marginTop: 7,
        marginBottom: 1,
    },
    itemIn: {
        marginLeft: 10,
    },
    itemOut: {
        marginRight: 10,
        alignItems: 'flex-end',
    },
    balloon: {
        maxWidth: 250,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 20,
    },
    balloonIn: {
        backgroundColor: 'grey'
    },
    balloonOut: {
        backgroundColor: '#B2D8D8'
    },
    textIn: {
        paddingTop: 5, color: 'black'
    },
    textOut: {
        paddingTop: 5, color: 'white'
    },
    timestamp: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 7,
    }
})