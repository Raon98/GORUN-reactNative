import ParentLayout from '@/components/layout/ParentLayout'
import { Stack } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

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
    <>
      <ParentLayout
        header={
          <View style={styles.headerContainer}>
            <View>

            </View>
          </View>
        }
        menuBar={
          <Stack>
            <Stack.Screen name="(tab)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        }
      ></ParentLayout>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
  },
})