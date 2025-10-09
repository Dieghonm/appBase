import { StyleSheet } from 'react-native';
import { borderRadius, font, fontSize, fontWeight } from '../globalStyles';

export const createStyles = (colors) => StyleSheet.create({
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
    color: colors.fontColor,
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
    color: colors.fontColor,
    marginBottom: 15,
    marginHorizontal: 50,
  },  
  linkTextY: {
    color: colors.alert,
    textDecorationLine: 'underline',
  },
  forgotText: {
    width: 290,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.fontColor,
    marginBottom: 20,
    marginHorizontal: 50,
  },
  formContainer: {
    width: 290,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.md,
    paddingVertical: 20,
    paddingHorizontal: 36,
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputContainer: {
    width: 218,
    height: 40,
    backgroundColor: colors.terciario,
    borderRadius: borderRadius.sm,
    marginBottom: 25,
    justifyContent: 'center',
    paddingHorizontal: 13,
    position: 'relative',
  },
  inputContainerValid: {
    borderWidth: 2,
    borderColor: colors.success,
  },
  inputContainerInvalid: {
    borderWidth: 2,
    borderColor: colors.warning,
  },
  inputContainerNeutral: {
    borderWidth: 0,
  },

  textInput: {
    fontFamily: font.fontFamily,
    fontSize: 12,
    lineHeight: 15,
    color: colors.fontColor,
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
  },
  loginButtonForm: {
    width: 218,
    height: 40,
    backgroundColor: colors.button,
    borderRadius: borderRadius.sm,
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
    color: colors.fontColor,
  },
  errorText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: 12,
    color: colors.warning,
    textAlign: 'center',
    width: 218,
    marginBottom: 10,
  },
});