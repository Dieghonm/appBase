import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { styles } from '../../styles/LoginParts/Cadastro';

export default function Cadastro({ screen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

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

  const handleRegister = () => {
    // Validação final
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    // if (!name.trim()) {
    //   Alert.alert('Erro', 'Por favor, digite seu nome.');
    //   return;
    // }

    // if (!nameValidation.isValid) {
    //   Alert.alert('Erro', 'Nome de usuário não atende aos critérios.');
    //   return;
    // }

    // if (!email.trim()) {
    //   Alert.alert('Erro', 'Por favor, digite seu e-mail.');
    //   return;
    // }

    // if (!emailValidation) {
    //   Alert.alert('Erro', 'Por favor, digite um e-mail válido.');
    //   return;
    // }

    // if (!password.trim()) {
    //   Alert.alert('Erro', 'Por favor, digite sua senha.');
    //   return;
    // }

    // if (!passwordValidation.isValid) {
    //   Alert.alert('Erro', 'Senha não atende aos critérios de segurança.');
    //   return;
    // }

    // Se chegou até aqui, todos os dados são válidos
    console.log('Register:', { name, email, password });
    Alert.alert('Sucesso', 'Conta criada com sucesso!');
    screen('PAYMENT')
  };

  // Função para obter a cor do texto baseada na validação
  const getValidationColor = (isError) => {
    if (isError === undefined) return '#AAAAAA'; // Cor padrão
    return isError ? '#FF6B6B' : '#4CAF50'; // Vermelho para erro, verde para sucesso
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Regras de usuário e senha */}
      <View 
      style={styles.rulesContainer}
      >
        <Text style={styles.rulesTitle}>Regras usuário e senha</Text>

        <Image
          source={require('../../assets/allert.png')}
          style={styles.alertIcon}
          resizeMode="contain"
        />
        
        <Text style={styles.rulesSectionTitle}>Usuário:</Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.name?.minLength || errors.name?.maxLength) }]}>
          • entre 6 - 20 caracteres
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.name?.noSpaces) }]}>
          • sem espaços, sem acentos
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.name?.noSpecialChars) }]}>
          • sem caracteres especiais
        </Text>
        
        <Text style={styles.rulesSectionTitle} >Senha:</Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.password?.minLength || errors.password?.maxLength) }]} >
          • entre 8 - 32 caracteres
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.password?.lowerCase) }]} >
          • use letras minúsculas
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.password?.number) }]} >
          • use números
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.password?.specialChar) }]} >
          • use caracteres especiais
        </Text>
        <Text style={[styles.rulesText, { color: getValidationColor(errors.password?.noSpaces) }]} >
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
        <Text style={styles.logoTitle} >Inscreva-se</Text>
        <Text style={styles.logoSubtitle} >
          Já possui um conta?{' '}
          <TouchableOpacity onPress={() => screen('LOGIN')}>
            <Text style={styles.linkText}>Faça login</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        {/* Campo Nome */}
        <View style={styles.inputContainer} >
          <TextInput
            style={[
              styles.textInput,
              { borderColor: name && !validateName(name).isValid ? '#FF6B6B' : '#DDDDDD' }
            ]}
            placeholder="Nome"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={handleNameChange}
            autoCapitalize="none"
          />
        </View>

        {/* Campo E-mail */}
        <View style={styles.inputContainer} >
          <TextInput
            style={[
              styles.textInput,
              { borderColor: email && !validateEmail(email) ? '#FF6B6B' : '#DDDDDD' }
            ]}
            placeholder="E-mail"
            placeholderTextColor="#AAAAAA"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer} >
          <TextInput
            style={[
              styles.textInput, 
              styles.passwordInput,
              { borderColor: password && !validatePassword(password).isValid ? '#FF6B6B' : '#DDDDDD' }
            ]}
            placeholder="Senha"
            placeholderTextColor="#AAAAAA"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
 >
            <Image
              source={showPassword ? require('../../assets/eye.png') : require('../../assets/eye-off.png')}
              style={styles.eyeIconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Botão Criar minha conta */}
        <TouchableOpacity 
          style={styles.registerButton} 
          // onPress={handleRegister}
          onPress={() => {screen('PAYMENT')}} >
          <Text style={styles.registerButtonText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}