import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
];
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
})
