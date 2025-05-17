import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

// Define the types for our navigation stack parameters
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            headerShown: true,
            title: 'Home',
            headerLeft: () => null, // Disable back button
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 