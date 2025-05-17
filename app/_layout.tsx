import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect, Stack, useSegments, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React, { ReactNode } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

// Simple authentication context
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Custom hook to use auth
export const useAuth = () => React.useContext(AuthContext);

function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const segments = useSegments();
  const router = useRouter();

  // Check if the current route is protected
  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    
    if (!isLoggedIn && !inAuthGroup) {
      // If not logged in and not in auth group, redirect to login
      router.replace('/(auth)/login');
    } else if (isLoggedIn && inAuthGroup) {
      // If logged in and in auth group, redirect to home
      router.replace('/(tabs)');
    }
  }, [isLoggedIn, segments]);

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn,
        login: () => setIsLoggedIn(true),
        logout: () => setIsLoggedIn(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
