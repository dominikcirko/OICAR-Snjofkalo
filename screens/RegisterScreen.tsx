import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { RootStackParamList } from '../navigation/AppNavigator';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

export default function RegisterScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // In a real app, you would validate inputs and create the account
    console.log('Register attempted with:', { username, email, password });
    
    // Navigate to Login screen after successful registration
    navigation.navigate('Login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Create Account</ThemedText>
      
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
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <ThemedText style={styles.buttonText}>Back to Login</ThemedText>
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