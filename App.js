import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
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
import { useThemeColors, useOutfitFonts } from './styles/globalStyles';
import apiService from './services/api';
import { createStyles } from './styles/AppStyles';

const Stack = createStackNavigator();

function AppNavigator({ initialRoute }) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
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
  const colors = useThemeColors();
  const styles = createStyles(colors);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    console.log('🔍 Verificando token...');
    
    try {
      const token = await authService.obterToken();
      
      if (!token) {
        console.log('❌ Nenhum token encontrado');
        setInitialRoute('Login');
        setIsLoading(false);
        return;
      }

      console.log('✅ Token encontrado, validando com servidor...');
      
      // Cria uma Promise com timeout de 3 segundos
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 3000)
      );

      // Faz a requisição com timeout
      const response = await Promise.race([
        apiService.fazerLogin(null, token),
        timeoutPromise
      ]);

      console.log('📡 Resposta do servidor:', response);

      // Verifica se a resposta é válida
      if (response && (response.access_token || response.user || response.id)) {
        console.log('✅ Token válido! Redirecionando para Home');
        setInitialRoute('Home');
      } else {
        console.log('⚠️ Resposta inválida do servidor');
        setInitialRoute('Login');
      }

    } catch (error) {
      console.log('❌ Erro ao validar token:', error.message);
      
      if (error.message === 'Timeout') {
        console.log('⏱️ Timeout: Servidor demorou mais de 3 segundos');
      }
      
      // Em caso de erro, vai para tela de login
      setInitialRoute('Login');
    } finally {
      setIsLoading(false);
    }
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