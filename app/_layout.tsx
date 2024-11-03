import { Stack } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Layout() {
  const isLoading = false

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
