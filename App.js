import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { ThemeProvider, useThemeContext } from './src/contexts/provider';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import { createStyles } from './src/styles/AppStyles';
import { useOutfitFonts, useThemeColors } from './src/styles/globalStyles';
import authService from './src/services/authService';
import apiService from './src/services/api';

const Stack = createStackNavigator();

function AppNavigator({ initialRoute, setInitialRoute }) {
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

function AppContent() {
  const { userName, changeUserName } = useThemeContext();
  const { userTiming, changeUserTiming } = useThemeContext();
  const [initialRoute, setInitialRoute] = useState('Login');
  const [isLoading, setIsLoading] = useState(true);
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

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 3000)
      );

      const response = await Promise.race([
        apiService.fazerLogin(null, token),
        timeoutPromise
      ]);

      console.log('📡 Resposta do servidor:', response);

      if (response && (response.access_token || response.user || response.id)) {
        changeUserName(response.user.login)
        changeUserTiming(response.expires)
        setInitialRoute('Home');
      } else {
        setInitialRoute('Login');
      }

    } catch (error) {
      console.log('❌ Erro ao validar token:', error.message);
      
      if (error.message === 'Timeout') {
        console.log('⏱️ Timeout: Servidor demorou mais de 3 segundos');
      }
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
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar />
          {initialRoute !== 'Login' && <Header />}
          <View style={styles.content}>
            <AppNavigator initialRoute={initialRoute} setInitialRoute={setInitialRoute} />
          </View>
          {initialRoute !== 'Login' && <Footer />}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
