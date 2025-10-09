import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { createStyles } from '../../styles/LoginParts/Login';
import { useThemeColors } from '../../styles/globalStyles';
import apiService from '../../services/api';
import { useThemeContext } from '../../contexts/provider';

export default function SignIn({ onChangeScreen }) {
  const { userName, changeUserName } = useThemeContext();
  const { userTiming, changeUserTiming } = useThemeContext();
  const [email, setEmail] = useState(''); //front3
  const [password, setPassword] = useState(''); //Teste123@
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const colors = useThemeColors();
  const styles = createStyles(colors);

  const isFormValid = useMemo(() => {
    return email.trim().length > 0 && password.trim().length > 0;
  }, [email, password]);

  const getErrorMessage = (error) => {
    console.log('Erro completo:', error);
    
    const errorMessage = error.message || error.response?.data?.detail || error.response?.data?.message || '';
    const statusCode = error.response?.status;
    
    if (errorMessage.toLowerCase().includes('usuário não encontrado') || 
        errorMessage.toLowerCase().includes('user not found')) {
      return 'E-mail ou login não encontrado.';
    }
    
    if (errorMessage.toLowerCase().includes('senha incorreta') || 
        errorMessage.toLowerCase().includes('password incorrect') ||
        errorMessage.toLowerCase().includes('invalid password')) {
      return 'Senha incorreta.';
    }
    
    switch (statusCode) {
      case 401:
        return 'E-mail/login ou senha incorretos.';
      
      case 404:
        return 'Usuário não encontrado.';
      
      case 400:
        return 'Dados inválidos. Verifique as informações.';
      
      case 429:
        return 'Muitas tentativas. Aguarde um momento e tente novamente.';
      
      case 500:
        return 'Erro interno do servidor. Tente novamente em alguns minutos.';
      
      default:
        if (errorMessage.toLowerCase().includes('network') || 
            errorMessage.toLowerCase().includes('timeout')) {
          return 'Problema de conexão. Verifique sua internet e tente novamente.';
        }

        return errorMessage || 'Erro ao fazer login. Tente novamente.';
    }
  };

  const handleLogin = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError('');
    
    try {
      const response = await apiService.fazerLogin(email, password);
      if (response.access_token) {
        changeUserName(response.user.login)
        changeUserTiming(response.expires)
        Alert.alert(
          'Sucesso!',
          'Login realizado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => {
                // Navegar para Home aqui
                console.log('Usuário logado:', response.user);
              }
            }
          ]
        );
      } else {
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const getInputContainerStyle = (field, value) => {
    if (!value.trim()) return styles.inputContainerNeutral;
    return styles.inputContainerValid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainerLogin}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.loginTitle}>Login</Text>
      </View>
      
      <Text style={styles.infoText}>
        Ainda não tem um e-mail cadastrado?{'\n'}
        <Text 
          style={styles.linkTextY} 
          onPress={() => onChangeScreen('REGISTER')}
        >
          Crie sua conta aqui
        </Text>
      </Text>
      
      <Text style={styles.forgotText}>
        Esqueceu sua senha?{'\n'}
        <Text 
          style={styles.linkTextY}
          onPress={() => onChangeScreen('CHANGEPASSWORD')}
        >
          Recupere sua senha aqui
        </Text>
      </Text>
      
      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, getInputContainerStyle('email', email)]}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail ou Login"
            placeholderTextColor={colors.terciario}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (error) setError('');
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>
        
        <View style={[styles.inputContainer, getInputContainerStyle('password', password)]}>
          <TextInput
            style={[styles.textInput, styles.passwordInput]}
            placeholder="Senha"
            placeholderTextColor={colors.terciario}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) setError('');
            }}
            secureTextEntry={!showPassword}
            editable={!isLoading}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
          <Image
            source={
              showPassword
                ? require('../../assets/icones/eye.png')
                : require('../../assets/icones/eye-off.png')
            }
            tintColor={colors.fontColor}
            style={styles.eyeIconImage}
            resizeMode="contain"
          />
          </TouchableOpacity> 
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity 
          style={[
            styles.loginButtonForm,
            isLoading ? styles.loginButtonLoading : 
            isFormValid ? styles.loginButtonEnabled : styles.loginButtonDisabled
          ]}
          onPress={handleLogin}
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.fontColor} />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}