import React, { useState } from 'react';
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

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu e-mail ou login.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Erro', 'Por favor, digite sua senha.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Tentando fazer login com:', { email, password });

      const response = await apiService.fazerLogin(email, password);

      console.log('Resposta do login:', response);

      if (response.sucesso) {
        // Salvar dados do usuário localmente se necessário
        // AsyncStorage.setItem('userData', JSON.stringify(response));
        
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
                  console.log('Navegação não disponível, usuário logado:', response);
                }
              }
            }
          ]
        );
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      
      let mensagemErro = 'Erro ao fazer login. Tente novamente.';
      
      if (error.message.includes('Usuário não encontrado')) {
        mensagemErro = 'Usuário não encontrado.';
      } else if (error.message.includes('Senha incorreta')) {
        mensagemErro = 'Senha incorreta.';
      }
      
      Alert.alert('Erro', mensagemErro);
    } finally {
      setIsLoading(false);
    }
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail ou Login"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>
        
        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.textInput, styles.passwordInput]}
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
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
        
        {/* Botão Login */}
        <TouchableOpacity 
          style={[styles.loginButtonForm, isLoading && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={isLoading}
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