import React from 'react'

import { Tabs } from 'expo-router'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: {} }}>
      <Tabs.Screen
        name="index",

      options={{
        title: '홈',
        tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
      }}
      />
      <Tabs.Screen
        name="running/index"
        options={{
          title: '러닝',
          tabBarIcon: () => <FontAwesome5 name="running" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="setting/index"
        options={{
          title: '기록',
          tabBarIcon: () => <AntDesign name="barschart" size={24} color="black" />,
        }}
      />
    </Tabs>
  )
}
