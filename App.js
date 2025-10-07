import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { ThemeProvider } from './src/contexts/provider';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import { createStyles } from './src/styles/AppStyles';
import { useThemeColors } from './src/styles/globalStyles';

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
  const styles = createStyles(colors);


  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <StatusBar />
            <Header />
            <View style={styles.content}>
              <AppNavigator initialRoute={initialRoute} />
            </View>
            <Footer />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
     </ThemeProvider>
  );
}
