import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from '../../styles/LoginParts/Termos';

const TermosBox = ({ screen }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  
  return (
    <View>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View>
        {/* Welcome title */}
        <Text style={styles.welcomeTitle}>
          Bem-Vindo ao Eden Map
        </Text>
        
        {/* Welcome subtitle */}
        <Text style={styles.welcomeSubtitle}>
          Encontre o paraíso dentro de você!
        </Text>
      </View>
      
      {/* Terms and conditions section */}
      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={styles.termsButton}
          onPress={() => setIsAgreed(!isAgreed)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, isAgreed && styles.checkboxChecked]} />
          <Text style={styles.termsText}>
            Concordo com os{' '}
            <Text style={styles.linkText}>Termos e Condições</Text> do Eden Map e
            aceito a <Text style={styles.linkText}>Política de Privacidade</Text>.
            {'\n'}
            <Text style={styles.warning}>Para concordar clique no círculo.</Text> 
          </Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={[styles.createAccountButton, !isAgreed && styles.buttonDisabled]}
        disabled={!isAgreed}
        activeOpacity={0.8}
        onPress={() => {
          if (isAgreed) {
            screen('CADASTRO');
          }
        }}
      >
        <Text style={styles.createAccountText}>Criar minha conta</Text>
      </TouchableOpacity>
      
      {/* Login button */}
      <TouchableOpacity 
        style={[styles.loginButton, !isAgreed && styles.buttonDisabled]}
        activeOpacity={0.8}
        disabled={!isAgreed}
        onPress={() => {
          if (isAgreed) {
            screen('LOGIN');
          }
        }}
      >
        <Text style={styles.loginText}
        >Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosBox;