import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeColors, fontSize, fontWeight } from '../styles/globalStyles';

const SERVER_KEY = '@app:server_mode';

export default function Header() {
  const [serverMode, setServerMode] = useState('render');
  const colors = useThemeColors();

  useEffect(() => {
    loadServerMode();
  }, []);

  const loadServerMode = async () => {
    try {
      const saved = await AsyncStorage.getItem(SERVER_KEY);
      if (saved) {
        setServerMode(saved);
      }
    } catch (error) {
      console.error('Erro ao carregar modo servidor:', error);
    }
  };

  const toggleServerMode = async () => {
    try {
      const newMode = serverMode === 'local' ? 'render' : 'local';
      await AsyncStorage.setItem(SERVER_KEY, newMode);
      setServerMode(newMode);
      
      const url = newMode === 'local' ? 'http://localhost:8000' : 'https://backbase-s7zo.onrender.com';
      
      console.log(`✅ Servidor alterado para: ${newMode.toUpperCase()}`);
      console.log(`📡 URL: ${url}`);
      
      Alert.alert(
        'Servidor Alterado',
        `Agora usando: ${newMode === 'local' ? 'Local (localhost:8000)' : 'Render (Cloud)'}\n\nPróximas requisições usarão este servidor.`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Erro ao alternar servidor:', error);
    }
  };

  const styles = createStyles(colors);

  return (
      <View style={styles.serverSelector}>
        <TouchableOpacity
          style={[
            styles.serverButton,
            serverMode === 'local' && styles.serverButtonActive
          ]}
          onPress={toggleServerMode}
          activeOpacity={0.7}
        >
          <View style={[
            styles.indicator,
            serverMode === 'local' ? styles.indicatorActive : styles.indicatorInactive
          ]} />
          <Text style={[
            styles.serverText,
            serverMode === 'local' && styles.serverTextActive
          ]}>
            {serverMode === 'local' ? '🏠 Local' : '☁️ Render'}
          </Text>
        </TouchableOpacity>
      </View>
  );
}

const createStyles = (colors) => StyleSheet.create({
  serverSelector: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 9999,
    elevation: 10,
  },
  label: {
    fontSize: fontSize.sm,
    color: colors.fontColor,
    fontWeight: fontWeight.medium,
  },
  serverButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.terciario,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  serverButtonActive: {
    backgroundColor: colors.button,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  indicatorActive: {
    backgroundColor: colors.success,
  },
  indicatorInactive: {
    backgroundColor: colors.warning,
  },
  serverText: {
    fontSize: fontSize.xs,
    color: colors.fontColor,
    fontWeight: fontWeight.medium,
  },
  serverTextActive: {
    color: colors.fontColor,
  },
});
