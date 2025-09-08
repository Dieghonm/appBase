import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../../styles/LoginParts/Cadastro';
import apiService from '../../services/api';

export default function Cadastro({ screen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Validação de email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validação de senha
  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasMaxLength = password.length <= 32;
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const hasNoSpaces = !/\s/.test(password);

    return {
      isValid: hasMinLength && hasMaxLength && hasLowerCase && hasNumber && hasSpecialChar && hasNoSpaces,
      errors: {
        minLength: !hasMinLength,
        maxLength: !hasMaxLength,
        lowerCase: !hasLowerCase,
        number: !hasNumber,
        specialChar: !hasSpecialChar,
        noSpaces: !hasNoSpaces
      }
    };
  };

  // Validação de nome/usuário
  const validateName = (name) => {
    const hasMinLength = name.length >= 6;
    const hasMaxLength = name.length <= 20;
    const hasNoSpaces = !/\s/.test(name);
    const hasNoAccents = !/[àáâãäåçèéêëìíîïñòóôõöùúûüýÿ]/i.test(name);
    const hasNoSpecialChars = !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name);

    return {
      isValid: hasMinLength && hasMaxLength && hasNoSpaces && hasNoAccents && hasNoSpecialChars,
      errors: {
        minLength: !hasMinLength,
        maxLength: !hasMaxLength,
        noSpaces: !hasNoSpaces,
        noAccents: !hasNoAccents,
        noSpecialChars: !hasNoSpecialChars
      }
    };
  };

  // Verificar se todos os campos são válidos
  const isFormValid = useMemo(() => {
    const isNameValid = name.length > 0 && validateName(name).isValid;
    const isEmailValid = email.length > 0 && validateEmail(email);
    const isPasswordValid = password.length > 0 && validatePassword(password).isValid;
    
    return isNameValid && isEmailValid && isPasswordValid;
  }, [name, email, password]);

  // Validação em tempo real
  const handleNameChange = (text) => {
    setName(text);
    const nameValidation = validateName(text);
    setErrors(prev => ({
      ...prev,
      name: nameValidation.errors
    }));
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    const isValidEmail = validateEmail(text);
    setErrors(prev => ({
      ...prev,
      email: !isValidEmail && text.length > 0
    }));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    const passwordValidation = validatePassword(text);
    setErrors(prev => ({
      ...prev,
      password: passwordValidation.errors
    }));
  };

  // Função para tratar diferentes tipos de erro da API
  const getErrorMessage = (error) => {
    
    const errorMessage = error.message || error.response?.data?.message || error.response?.data?.erro || '';
    const statusCode = error.response?.status;
    
    switch (statusCode) {
      case 409:
        if (errorMessage.toLowerCase().includes('email')) {
          return 'E-mail já está cadastrado. Tente fazer login ou use outro e-mail.';
        }
        if (errorMessage.toLowerCase().includes('login') || errorMessage.toLowerCase().includes('usuário')) {
          return 'Nome de usuário já está em uso. Escolha outro nome.';
        }
        return 'Dados já cadastrados no sistema.';
      
      case 400:
        return 'Dados inválidos. Verifique as informações e tente novamente.';
      
      case 422:
        return 'Dados não puderam ser processados. Verifique os campos obrigatórios.';
      
      case 500:
        return 'Erro interno do servidor. Tente novamente em alguns minutos.';
      
      default:
        if (errorMessage.toLowerCase().includes('email já cadastrado') || 
            errorMessage.toLowerCase().includes('email already exists')) {
          return 'E-mail já cadastrado. Tente fazer login ou use outro e-mail.';
        }
        
        if (errorMessage.toLowerCase().includes('login já está em uso') || 
            errorMessage.toLowerCase().includes('username already exists') ||
            errorMessage.toLowerCase().includes('usuário já existe')) {
          return 'Nome de usuário já está em uso. Escolha outro nome.';
        }
        
        if (errorMessage.toLowerCase().includes('network') || 
            errorMessage.toLowerCase().includes('timeout')) {
          return 'Problema de conexão. Verifique sua internet e tente novamente.';
        }
        
        return errorMessage || 'Erro ao criar conta. Tente novamente.';
    }
  };

  const handleRegister = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError('');
    
    try {
      const dadosUsuario = {
        login: name,
        email: email,
        senha: password,
        tag: 'cliente',
        plan: null
      };

      const response = await apiService.cadastrarUsuario(dadosUsuario);

      if (response.sucesso) {
        screen('PAYMENT')
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  // Função para obter o estilo baseado na validação
  const getValidationTextStyle = (isError) => {
    if (isError === undefined) return styles.rulesTextNeutral;
    return isError ? styles.rulesTextInvalid : styles.rulesTextValid;
  };

  const getInputContainerStyle = (field, value) => {
    if (!value) return styles.inputContainerNeutral;
    
    switch (field) {
      case 'name':
        return validateName(value).isValid ? styles.inputContainerValid : styles.inputContainerInvalid;
      case 'email':
        return validateEmail(value) ? styles.inputContainerValid : styles.inputContainerInvalid;
      case 'password':
        return validatePassword(value).isValid ? styles.inputContainerValid : styles.inputContainerInvalid;
      default:
        return styles.inputContainerNeutral;
    }
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Regras de usuário e senha */}
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Regras usuário e senha</Text>

        <Image
          source={require('../../assets/allert.png')}
          style={styles.alertIcon}
          resizeMode="contain"
        />
        
        <Text style={styles.rulesSectionTitle}>Usuário:</Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.minLength || errors.name?.maxLength)]}>
          • entre 6 - 20 caracteres
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.noSpaces || errors.name?.noAccents)]}>
          • sem espaços, sem acentos
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.noSpecialChars)]}>
          • sem caracteres especiais
        </Text>
        
        <Text style={styles.rulesSectionTitle}>Senha:</Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.minLength || errors.password?.maxLength)]}>
          • entre 8 - 32 caracteres
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.lowerCase)]}>
          • use letras minúsculas
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.number)]}>
          • use números
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.specialChar)]}>
          • use caracteres especiais
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.noSpaces)]}>
          • sem espaçamento
        </Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoTitle}>Inscreva-se</Text>
        <Text style={styles.logoSubtitle}>
          Já possui um conta?{' '}
          <TouchableOpacity onPress={() => screen('LOGIN')}>
            <Text style={styles.linkText}>Faça login</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        {/* Campo Nome */}
        <View style={[styles.inputContainer, getInputContainerStyle('name', name)]}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={handleNameChange}
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

        {/* Campo E-mail */}
        <View style={[styles.inputContainer, getInputContainerStyle('email', email)]}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            placeholderTextColor="#AAAAAA"
            value={email}
            onChangeText={handleEmailChange}
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
            placeholderTextColor="#AAAAAA"
            value={password}
            onChangeText={handlePasswordChange}
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

        <Text style={styles.errorText}>
          {error}
        </Text>

        {/* Botão Criar minha conta */}
        <TouchableOpacity 
          style={[
            styles.registerButton, 
            isLoading ? styles.registerButtonLoading : 
            isFormValid ? styles.registerButtonEnabled : styles.registerButtonDisabled
          ]}
          onPress={handleRegister}
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.registerButtonText}>Criar minha conta</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}