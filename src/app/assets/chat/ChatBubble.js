import React, { useState, useEffect } from 'react';
import {
    View, Text, Svg, Path, StyleSheet
} from 'react-native';

export default function ChatBubble({ message, outgoing, timestamp }) {
    return (
        <View style={styles.item}>
            <View style={outgoing ? styles.itemOut : styles.itemIn}>
                <View style={[styles.balloon, outgoing ? styles.balloonOut : styles.balloonIn]}>
                    <Text style={styles.messageText}>{message}</Text>
                </View>
                <View style={styles.timestamp}>
                    <Text style={{ color: 'black', fontSize: 12, }}>{timestamp}</Text>
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
    itemOut: {
        marginRight: 10,
        alignItems: 'flex-end',
    },
    balloon: {
        maxWidth: 250,
        paddingHorizontal: 15,
        // paddingVertical: 10,
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 20,
    },
    balloonIn: {
        backgroundColor: 'grey'
    },
    balloonOut: {
        backgroundColor: '#66B2B2'
    },
    messageText: {
        paddingTop: 5, color: 'white'
    },
    timestamp: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 7,
    }
})