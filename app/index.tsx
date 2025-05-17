import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  useEffect(() => {
    // Small delay to show the loading screen before redirecting
    const timer = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>OICAR Mobile App</ThemedText>
      <ActivityIndicator size="large" color="#4A90E2" style={styles.loader} />
      <ThemedText style={styles.text}>Loading...</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  loader: {
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
}); 