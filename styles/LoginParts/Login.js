import { StyleSheet } from 'react-native';
import { colors, font, fontSize, fontWeight } from '../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    position: 'relative',
  },
  logoContainerLogin: {
    marginTop: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50.52,
    height: 34.32,
  },
  loginTitle: {
    fontFamily: font.fontFamily,
    fontSize: 24,
    lineHeight: 30,
    color: colors.white,
    fontWeight: fontWeight.bold,
    marginTop: 10,
  },
  infoText: {
    width: 290,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.white,
    marginBottom: 15,
    marginHorizontal: 50, // Centralizar melhor
  },  
  linkTextY: {
    color: colors.yellow,
    textDecorationLine: 'underline',
  },
  forgotText: {
    width: 290,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.white,
    marginBottom: 20,
    marginHorizontal: 50, // Centralizar melhor
  },
  formContainer: {
    width: 290,
    backgroundColor: '#3A3A3A',
    paddingVertical: 20,
    paddingHorizontal: 36, // Centralizar os inputs (290-218)/2
    alignItems: 'center',
    alignSelf: 'center', // Centralizar o container
  },
  inputContainer: {
    width: 218,
    height: 40,
    backgroundColor: '#606060',
    marginBottom: 25,
    justifyContent: 'center',
    paddingHorizontal: 13,
    position: 'relative',
  },

  textInput: {
    fontFamily: font.fontFamily,
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
    fontWeight: fontWeight.regular,
    flex: 1,
  },
  passwordInput: {
    paddingRight: 35,
  },
  eyeIcon: {
    position: 'absolute',
    right: 13,
    top: 12.5,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconImage: {
    width: 15,
    height: 15,
    tintColor: colors.white,
  },
  // Estados do botão de login
  loginButtonForm: {
    width: 218,
    height: 40,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonEnabled: {
    opacity: 1,
  },
  loginButtonDisabled: {
    opacity: 0.5,
  },
  loginButtonLoading: {
    opacity: 0.7,
  },
  loginButtonText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
  // Estilo para mensagens de erro
  errorText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: 12,
    color: colors.red,
    textAlign: 'center',
    width: 218,
  },
})