import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Welcome Home!</ThemedText>
      
      <ThemedText style={styles.message}>
        You have successfully logged in to the application. This is your home screen.
      </ThemedText>
      
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <ThemedText style={styles.buttonText}>Logout</ThemedText>
      </TouchableOpacity>
    </ThemedView>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#E74C3C',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 