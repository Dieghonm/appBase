import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import HomeScreen from './components/HomeScreen';

import { globalStyles, colors, useOutfitFonts } from './styles/globalStyles';

const Stack = createStackNavigator();

// localStorageCredential = ''

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      // initialRouteName = {localStorageCredential ? 'Home' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  // Carregar as fontes
  const fontsLoaded = useOutfitFonts();

  // Aguardar carregar as fontes
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Header />
          <View style={styles.content}>
            <AppNavigator />
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
});