import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { MeuProvider } from "./contexts/provider";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createStyles } from './styles/AppStyles';
import { useThemeColors } from './styles/globalStyles';

const Stack = createStackNavigator();

function AppNavigator({ initialRoute }) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Login');
  const colors = useThemeColors();
  const styles = createStyles (colors);


  return (
    <MeuProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <StatusBar />
            <Header />
            <AppNavigator initialRoute={initialRoute} />
            <Footer />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </MeuProvider>
  );
}
