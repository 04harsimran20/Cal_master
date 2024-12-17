import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HistoryScreen({ theme, history }) {
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f1f3f4' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 5, color: '#555' },
});
