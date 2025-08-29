import { StyleSheet } from 'react-native';
import { colors, font, fontSize, fontWeight } from '../globalStyles';

export const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 110, // Espaçamento entre o gif e o logo
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
    color: colors.white,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.md,
    lineHeight: 20,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 30,
  },
  termsContainer: {
    width: 310,
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
    borderRadius: 7.5,
    backgroundColor: colors.white,
    marginRight: 7,
    marginTop: 18, // Alinha com o texto
  },
  checkboxChecked: {
    backgroundColor: colors.blue,
  },
  termsText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    lineHeight: 18,
    color: colors.white,
    flex: 1,
    textAlign: 'left',
  },
  linkText: {
    color: colors.red,
    textDecorationLine: 'underline',
  },
  linkTextY: {
    color: colors.yellow,
    textDecorationLine: 'underline',
  },
  warning: {
    color: colors.yellow,
  },
  createAccountButton: {
    width: 290,
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  createAccountText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    lineHeight: 20,
    color: colors.white,
  },
  loginButton: {
    width: 290,
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    lineHeight: 20,
    color: colors.blue,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
})