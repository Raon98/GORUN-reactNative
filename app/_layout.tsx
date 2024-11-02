import { Slot } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const isLoading = false;

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
