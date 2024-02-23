import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import { styles } from './KataPageStyleSheet';

export default function KataData({ kata_name, description } : { kata_name: string, description: string }) {
    return (
        <View>
            <Text style={styles.titleText}>
                {kata_name}
            </Text>
            <Text style={styles.baseText}>
                {description}
            </Text>
        </View>
    )
}

