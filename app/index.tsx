import { Redirect } from 'expo-router';

// The simplest possible approach - direct redirect to login
export default function Index() {
  return <Redirect href="/(auth)/login" />;
} 