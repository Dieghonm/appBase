import { StyleSheet } from 'react-native';
import { borderRadius, font, fontSize, fontWeight } from '../globalStyles';

export const createStyles = (colors) =>
  StyleSheet.create({
    logoContainer: {
      marginTop: 60,
      marginBottom: 6,
      alignItems: 'center',
    },
    logo: {
      width: 50.52,
      height: 34.32,
    },
    welcomeTitle: {
      fontFamily: font.fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xxl,
      lineHeight: 30,
      color: colors.fontColor,
      textAlign: 'center',
    },
    welcomeSubtitle: {
      fontFamily: font.fontFamily,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.md,
      lineHeight: 20,
      color: colors.fontColor,
      textAlign: 'center',
      marginBottom: 30,
    },




    
    modeBoxContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    modeTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      color: colors.fontColor,
    },
    modeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    modeselect: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 110,
      height: 36,
      borderRadius: 8,
      backgroundColor: '#212224',
    },
    modeselectAlt: {
      backgroundColor: '#F4CDC0',
    },
    modeselectActive: {
      borderWidth: 2,
      borderColor: colors.button,
    },
    modeText: {
      color: '#FFFFFF',
      fontSize: 16,
      marginLeft: 2,
    },
    pink: {
      color: '#4A2C2A'
    },
    termsContainer: {
      width: 290,
      marginBottom: 30,
      paddingHorizontal: 6,
    },
    termsButton: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    checkbox: {
      width: 15,
      height: 15,
      borderRadius: borderRadius.md,
      backgroundColor: colors.fontColor,
      marginRight: 7,
      marginTop: 18,
    },
    checkboxChecked: {
      backgroundColor: colors.button,
    },
    termsText: {
      fontFamily: font.fontFamily,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      lineHeight: 18,
      color: colors.fontColor,
      flex: 1,
      textAlign: 'left',
    },
    linkText: {
      color: colors.warning,
      textDecorationLine: 'underline',
    },
    linkTextY: {
      color: colors.alert,
      textDecorationLine: 'underline',
    },
    warning: {
      color: colors.alert,
    },
    createAccountButton: {
      width: 290,
      height: 45,
      backgroundColor: colors.button,
      borderRadius: borderRadius.sm,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    createAccountText: {
      fontFamily: font.fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.md,
      lineHeight: 20,
      color: colors.fontColor,
    },
    loginButton: {
      width: 290,
      height: 45,
      backgroundColor: colors.fontColor,
      borderRadius: borderRadius.sm,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      fontFamily: font.fontFamily,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.md,
      lineHeight: 20,
      color: colors.button,
    },
    buttonDisabled: {
      opacity: 0.5,
    },
  });