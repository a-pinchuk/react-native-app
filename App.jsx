import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </>
  );
}
