import { useState, useEffect } from 'react';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';
import authService from '../services/authService';
import { useThemeContext } from '../contexts/provider';

export const useOutfitFonts = () => {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
  });
  return fontsLoaded;
};

const pink = {
  background: '#F4CDC0',
  secondary: '#d7b6eaff',
  terciario: '#E3A893',
  fontColor: '#4A2C2A',
  placeholder: '#696969ff',
  warning: '#C0392B',
  alert: '#E67E22',
  success: '#27AE60',
  button: '#7D9ED9',
  accent: '#DCA2FF',
};

const dark = {
  background: '#212224',
  secondary: '#3A3A3A',
  terciario: '#606060',
  fontColor: '#FFFFFF',
  placeholder: '#AAAAAA',
  warning: '#EA5959',
  alert: '#FFAA2E',
  success: '#38C197',
  button: '#0A84FF',
  accent: '#DCA2FF',
};

export const colors = dark;

// Hook atualizado que escuta o contexto
export const useThemeColors = () => {
  const { theme } = useThemeContext();
  
  // Retorna as cores baseado no tema do contexto
  return theme === 'pink' ? pink : dark;
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 20,
  circle: 50,
};

export const font = {
  fontFamily: 'Outfit_400Regular',
};

export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  regular: '400',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  title: 28,
  header: 32,
};