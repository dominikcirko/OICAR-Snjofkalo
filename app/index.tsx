import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Redirect } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  // Use state to control when to redirect
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  useEffect(() => {
    // Wait a moment before redirecting to the login screen
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // If we should redirect, use the Redirect component instead of router.replace
  if (shouldRedirect) {
    return <Redirect href="/(auth)/login" />;
  }

  // Otherwise show the loading screen
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