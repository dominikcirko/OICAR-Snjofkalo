import { Redirect } from 'expo-router';

/**
 * Entry point for the application
 * 
 * Navigation flow:
 * 1. App starts here (index.tsx)
 * 2. Redirects to login screen
 * 3. After successful login, redirects to the tabs/home screen
 * 4. Logout returns to login screen
 */
export default function Index() {
  // Redirect to the login page when the app starts
  return <Redirect href={{ pathname: '/(auth)/login' }} />;
} 