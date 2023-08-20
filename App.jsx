import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
import { HomeScreen } from './Screens/HomeScreen/HomeScreen';
import { PostsScreen } from './Screens/PostScreen/PostScreen';

const AuthStack = createStackNavigator(); // указывает на группу навигаторов

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="PostScreen">
          <AuthStack.Screen
            name="PostScreen"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
