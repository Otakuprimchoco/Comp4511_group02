import React, { useState, useEffect } from 'react';
import {
    View, Text, Svg, Path
} from 'react-native';
import styles from "./ChatBubble.style";

export default function ChatBubble({ message, outgoing, timestamp }) {
    return (
        <View style={styles.item}>
            <View style={outgoing ? styles.itemOut : styles.itemIn}>
                <View style={[styles.balloon, outgoing ? styles.balloonOut : styles.balloonIn]}>
                    <Text style={{ paddingTop: 5, color: 'white' }}>{message}</Text>
                </View>
                <View style={styles.timestamp}>
                    <Text style={{ color: 'black' }}>{timestamp}</Text>
                </View>
            </View>
        </View>
    );
}