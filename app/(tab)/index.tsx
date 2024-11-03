import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.TextBlock}>
        <Text style={styles.Context}>Do you want Runner's High?</Text>
      </View>
      <View style={styles.circle}>
        <View style={styles.innerCircle}>
          <Text style={styles.CircleContext}>S T A R T</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
  },
  circle: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#15235d',
    borderStyle: 'solid',
    borderRadius: 999,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 135,
    height: 135,
    borderWidth: 1,
    borderColor: '#bebebe',
    borderStyle: 'solid',
    borderRadius: 999,
    backgroundColor: '#15235d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextBlock: {
    width: 300,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Context: {
    fontSize: 18,
  },
  CircleContext: {
    fontSize: 16,
    color: '#fff',
  },
})
