// This file is not used directly in expo-router setup
// The main entry point is configured in package.json as "expo-router/entry"
// But we're keeping this file as a placeholder for future reference

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This App.tsx file is not used with expo-router.</Text>
        <Text>See app/index.tsx for the actual entry point.</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
} 