import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { useThemeColors } from '../styles/globalStyles';
import { createStyles } from '../styles/Header';
import { useThemeContext } from '../contexts/provider';

export default function Header() {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const { theme, changeTheme } = useThemeContext();

  
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Ícones de navegação */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icones/Home.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => changeTheme(theme==='pink'?'dark': 'pink')}
        >
          <Image
            source={require('../assets/icones/Config.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icones/Return.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
