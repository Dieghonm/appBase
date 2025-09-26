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
import { styles } from '../../styles/LoginParts/Login';
import apiService from '../../services/api';

export default function Login({ screen, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Verificar se os campos obrigatórios estão preenchidos
  const isFormValid = useMemo(() => {
    return email.trim().length > 0 && password.trim().length > 0;
  }, [email, password]);

  // Função para tratar diferentes tipos de erro da API
  const getErrorMessage = (error) => {
    console.log('Erro completo:', error);
    
    const errorMessage = error.message || error.response?.data?.detail || error.response?.data?.message || '';
    const statusCode = error.response?.status;
    
    // Tratar erros baseados no conteúdo da mensagem
    if (errorMessage.toLowerCase().includes('usuário não encontrado') || 
        errorMessage.toLowerCase().includes('user not found')) {
      return 'E-mail ou login não encontrado.';
    }
    
    if (errorMessage.toLowerCase().includes('senha incorreta') || 
        errorMessage.toLowerCase().includes('password incorrect') ||
        errorMessage.toLowerCase().includes('invalid password')) {
      return 'Senha incorreta.';
    }
    
    // Tratar erros baseados no código de status
    switch (statusCode) {
      case 401: // Unauthorized
        return 'E-mail/login ou senha incorretos.';
      
      case 404: // Not Found
        return 'Usuário não encontrado.';
      
      case 400: // Bad Request
        return 'Dados inválidos. Verifique as informações.';
      
      case 429: // Rate limit
        return 'Muitas tentativas. Aguarde um momento e tente novamente.';
      
      case 500: // Internal Server Error
        return 'Erro interno do servidor. Tente novamente em alguns minutos.';
      
      default:
        if (errorMessage.toLowerCase().includes('network') || 
            errorMessage.toLowerCase().includes('timeout')) {
          return 'Problema de conexão. Verifique sua internet e tente novamente.';
        }
        
        // Retornar a mensagem de erro original se disponível, senão uma mensagem genérica
        return errorMessage || 'Erro ao fazer login. Tente novamente.';
    }
  };

  const handleLogin = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError(''); // Limpar erro anterior
    
    try {
      console.log('Tentando fazer login com:', { email, password });

      const response = await apiService.fazerLogin(email, password);

      console.log('Resposta do login:', response);

      // Verificar se o login foi bem-sucedido
      // Seu backend retorna um objeto com access_token
      if (response.access_token) {
        // Salvar dados do usuário localmente se necessário
        // AsyncStorage.setItem('token', response.access_token);
        // AsyncStorage.setItem('userData', JSON.stringify(response.user));
        
        Alert.alert(
          'Sucesso!',
          'Login realizado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => {
                // Navegar para a tela principal do app
                if (navigation) {
                  navigation.navigate('Home');
                } else {
                  console.log('Navegação não disponível, usuário logado:', response.user);
                }
              }
            }
          ]
        );
      } else {
        // Se não houver token, algo deu errado
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  // Função para obter o estilo do input baseado na validação
  const getInputContainerStyle = (field, value) => {
    if (!value.trim()) return styles.inputContainerNeutral;
    
    // Para login, consideramos válido qualquer valor preenchido
    // Você pode adicionar validações mais específicas aqui se necessário
    return styles.inputContainerValid;
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainerLogin}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.loginTitle}>Login</Text>
      </View>
      
      {/* Textos informativos */}
      <Text style={styles.infoText}>
        Ainda não tem um e-mail cadastrado?{'\n'}
        <Text 
          style={styles.linkTextY} 
          onPress={() => screen('CADASTRO')}
        >
          Crie sua conta aqui
        </Text>
      </Text>
      
      <Text style={styles.forgotText}>
        Esqueceu sua senha?{'\n'}
        <Text 
          style={styles.linkTextY}
          onPress={() => screen('ALTERARSENHA')}
        >
          Recupere sua senha aqui
        </Text>
      </Text>
      
      {/* Formulário */}
      <View style={styles.formContainer}>
        {/* Campo E-mail */}
        <View style={[styles.inputContainer, getInputContainerStyle('email', email)]}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail ou Login"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (error) setError(''); // Limpar erro quando usuário começar a digitar
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>
        
        {/* Campo Senha */}
        <View style={[styles.inputContainer, getInputContainerStyle('password', password)]}>
          <TextInput
            style={[styles.textInput, styles.passwordInput]}
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) setError(''); // Limpar erro quando usuário começar a digitar
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
              source={showPassword ? require('../../assets/eye.png') : require('../../assets/eye-off.png')}
              style={styles.eyeIconImage}
              resizeMode="contain"
            />
          </TouchableOpacity> 
        </View>

        {/* Mensagem de erro */}
        <Text style={styles.errorText}>
          {error}
        </Text>
        
        {/* Botão Login */}
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
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}