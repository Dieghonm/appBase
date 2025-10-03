import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useThemeColors } from '../../styles/globalStyles';
import { createStyles } from '../../styles/LoginParts/Termos';
import authService from '../../services/authService';

const TermosBox = ({ screen }) => {
  const colors = useThemeColors();
  const [isAgreed, setIsAgreed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const styles = createStyles(colors);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await authService.obterTema();
      setTheme(savedTheme === 'pink' ? 'pink' : 'dark');
    };
    loadTheme();
  }, []);

  const changeMode = async (mode) => {
    await authService.salvarTema(mode);
    setTheme(mode === 'pink' ? 'pink' : 'dark');
    window.location.reload();
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.welcomeTitle}>Bem-Vindo ao Eden Map</Text>
        <Text style={styles.welcomeSubtitle}>Encontre o paraíso dentro de você!</Text>
      </View>

      <View style={styles.modeBoxContainer}>
        <Text style={styles.modeTitle}>Selecione um modo de exibição:</Text>

        <View style={styles.modeBox}>
          <TouchableOpacity
            onPress={() => changeMode('dark')}
            style={[styles.modeselect, theme === 'dark' && styles.modeselectActive]}
          >
            <Text style={styles.modeText}>DarkMode</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeMode('pink')}
            style={[styles.modeselect, styles.modeselectAlt, theme === 'pink' && styles.modeselectActive]}
          >
            <Text style={[styles.modeText, styles.pink]}>PinkMode</Text>
          </TouchableOpacity>
        </View>
      </View>

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
        onPress={() => isAgreed && screen('CADASTRO')}
      >
        <Text style={styles.createAccountText}>Criar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.loginButton, !isAgreed && styles.buttonDisabled]}
        disabled={!isAgreed}
        activeOpacity={0.8}
        onPress={() => isAgreed && screen('LOGIN')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosBox;