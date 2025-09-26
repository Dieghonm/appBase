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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasMaxLength = password.length <= 32;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const hasNoSpaces = !/\s/.test(password);

    return {
      isValid: hasMinLength && hasMaxLength && hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar && hasNoSpaces,
      errors: {
        minLength: !hasMinLength,
        maxLength: !hasMaxLength,
        lowerCase: !hasLowerCase,
        upperCase: !hasUpperCase,
        number: !hasNumber,
        specialChar: !hasSpecialChar,
        noSpaces: !hasNoSpaces
      }
    };
  };

  const validateName = (name) => {
    const hasMinLength = name.length >= 3;
    const hasMaxLength = name.length <= 50;
    const hasNoSpaces = !/\s/.test(name);
    const hasNoAccents = !/[àáâãäåçèéêëìíîïñòóôõöùúûüýÿ]/i.test(name);
    const hasValidChars = /^[a-zA-Z0-9_]+$/.test(name);

    return {
      isValid: hasMinLength && hasMaxLength && hasNoSpaces && hasNoAccents && hasValidChars,
      errors: {
        minLength: !hasMinLength,
        maxLength: !hasMaxLength,
        noSpaces: !hasNoSpaces,
        noAccents: !hasNoAccents,
        validChars: !hasValidChars
      }
    };
  };

  const isFormValid = useMemo(() => {
    const isNameValid = name.length > 0 && validateName(name).isValid;
    const isEmailValid = email.length > 0 && validateEmail(email);
    const isPasswordValid = password.length > 0 && validatePassword(password).isValid;
    
    return isNameValid && isEmailValid && isPasswordValid;
  }, [name, email, password]);

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

  const getErrorMessage = (error) => {
    
    const errorMessage = error.message || error.response?.data?.detail || error.response?.data?.message || '';
    const statusCode = error.response?.status;
    
    switch (statusCode) {
      case 409:
      case 400:
        if (errorMessage.toLowerCase().includes('email já cadastrado') || 
            errorMessage.toLowerCase().includes('email já está em uso')) {
          return 'E-mail já está cadastrado. Tente fazer login ou use outro e-mail.';
        }
        if (errorMessage.toLowerCase().includes('login já está em uso') || 
            errorMessage.toLowerCase().includes('login') || 
            errorMessage.toLowerCase().includes('usuário')) {
          return 'Nome de usuário já está em uso. Escolha outro nome.';
        }
        return 'Dados já cadastrados no sistema ou inválidos.';
      
      case 422:
        return 'Dados não puderam ser processados. Verifique os campos obrigatórios.';
      
      case 429: // Rate limit
        return 'Muitas tentativas. Aguarde um momento e tente novamente.';
      
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

      if (response.sucesso || response.id) {
        Alert.alert(
          'Sucesso!',
          'Conta criada com sucesso!',
          [
            {
              text: 'OK',
              // onPress: () => screen('PAYMENT')
            }
          ]
        );
      } else {
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

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
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Regras usuário e senha</Text>

        <Image
          source={require('../../assets/allert.png')}
          style={styles.alertIcon}
          resizeMode="contain"
        />
        
        <Text style={styles.rulesSectionTitle}>Usuário:</Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.minLength || errors.name?.maxLength)]}>
          • entre 3 - 50 caracteres
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.noSpaces || errors.name?.noAccents)]}>
          • sem espaços, sem acentos
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.name?.validChars)]}>
          • apenas letras, números e underscore
        </Text>
        
        <Text style={styles.rulesSectionTitle}>Senha:</Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.minLength || errors.password?.maxLength)]}>
          • entre 8 - 32 caracteres
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.lowerCase)]}>
          • use letras minúsculas
        </Text>
        <Text style={[styles.rulesText, getValidationTextStyle(errors.password?.upperCase)]}>
          • use letras maiúsculas
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

      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, getInputContainerStyle('name', name)]}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome de usuário"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={handleNameChange}
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

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