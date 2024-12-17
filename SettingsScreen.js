import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen({ theme, setTheme }) {
    return (
        <View style={[styles.container, theme === 'dark' && styles.dark]}>
            <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>Settings</Text>
            <Button title="Light Mode" onPress={() => setTheme('light')} />
            <Button title="Dark Mode" onPress={() => setTheme('dark')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f3f4' },
    dark: { backgroundColor: '#000' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
