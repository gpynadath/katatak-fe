import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import { styles } from './KataPageStyleSheet';

export default function KataData({ kata } : { kata: any }) {
    return (
        <View>
            <Text style={styles.titleText}>
                {kata.kata_name}
            </Text>
            <Text style={styles.baseText}>
                {kata.description}
            </Text>
        </View>
    )
}

