import React from 'react';
import {
    View, Text, Svg, Path, StyleSheet, Image
} from 'react-native';

export default function UserTyping() {
    return (
        <View style={styles.item}>
            <View style={styles.itemIn}>
                <View style={styles.balloon}>
                    <Image style={styles.dot} source={require('../chat/chatDots.png')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 1,
        marginTop: 7,
        marginBottom: 1,
    },
    itemIn: {
        marginLeft: 10,
    },
    balloon: {
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    dot: {
        marginTop: 11,
    },
})