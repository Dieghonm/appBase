import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from '../../styles/LoginParts/Login';

export default function Login({ screen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Login:', { email, password });
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
      
      <Text style={styles.forgotText} >
        Esqueceu sua senha?{'\n'}
        <Text 
          style={styles.linkTextY}
          onPress={() => screen('ALTERARSENHA')}
        >Recupere sua senha aqui</Text>
      </Text>
      
      {/* Formulário */}
      <View style={styles.formContainer}>
        {/* Campo E-mail */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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
        
        {/* Botão Login */}
        <TouchableOpacity 
        style={styles.loginButtonForm}
         onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}