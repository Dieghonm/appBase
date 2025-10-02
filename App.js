import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import HomeScreen from './components/HomeScreen';

import authService from './services/authService';
import { colors, useOutfitFonts } from './styles/globalStyles';
import apiService from './services/api';

const Stack = createStackNavigator();

function AppNavigator({ initialRoute }) {
  return (
    <Stack.Navigator
      // initialRouteName={initialRoute}
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Login');
  const fontsLoaded = useOutfitFonts();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    console.log('aconteci novamente');
    const token = await authService.obterToken();
    const response = await apiService.fazerLogin(null, token);
    console.log(response, 'login pelo token');
    

    const validToken = false
    setInitialRoute(validToken ? 'Home' : 'Login');
    setIsLoading(false);
  };

  if (!fontsLoaded || isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.button} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Header />
          <View style={styles.content}>
            <AppNavigator initialRoute={initialRoute} />
          </View>
          <Footer />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});