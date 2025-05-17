import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, you would validate credentials and authenticate the user
    console.log('Login attempted with:', { username, password });
    // Navigate to Home screen upon successful login
    navigation.navigate('Home');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Login</ThemedText>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  secondaryButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 