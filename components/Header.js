import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
      const config = await import('../config/api');
      console.log(`✅ Servidor alterado para: ${newMode.toUpperCase()}`);
      console.log(`📡 URL: ${newMode === 'local' ? 'http://localhost:8000' : 'https://backbase-s7zo.onrender.com'}`);
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
    position: 'absolute',   // 🔥 fixa o componente
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 9999,           // garante que fique sobre outros componentes
    elevation: 10,          // (Android) para sobreposição
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
});
