import { StyleSheet } from 'react-native';
import { borderRadius, font, fontSize, fontWeight } from '../globalStyles';

export const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 70
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  rulesContainer: {
    width: 310,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.warning,
    padding: 15,
    marginBottom: 30,
    marginHorizontal: 20,
    position: 'relative',
  },
  rulesTitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.sm,
    color: colors.fontColor,
    marginBottom: 10,
  },
  alertIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 16,
    height: 16,
  },
  rulesSectionTitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.xs,
    color: colors.fontColor,
    marginTop: 8,
    marginBottom: 4,
  },
  rulesText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.xs,
    color: colors.fontColor,
    lineHeight: 14,
    marginBottom: 2,
  },

  rulesTextValid: {
    color: colors.success,
  },
  rulesTextInvalid: {
    color: colors.warning,
  },
  rulesTextNeutral: {
    color: colors.fontColor, 
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 50.52,
    height: 34.32,
    marginBottom: 10,
  },
  logoTitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.xxl,
    lineHeight: 30,
    color: colors.fontColor,
    marginBottom: 5,
  },
  logoSubtitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.sm,
    color: colors.fontColor,
    textAlign: 'center',
  },
  linkText: {
    color: colors.alert,
    textDecorationLine: 'underline',
  },

  formContainer: {
    width: 290,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.md,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputContainer: {
    width: 250,
    height: 45,
    backgroundColor: colors.terciario,
    borderRadius: borderRadius.sm,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
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
    fontSize: fontSize.sm,
    color: colors.fontColor,
    fontWeight: fontWeight.regular,
    flex: 1,
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconImage: {
    width: 15,
    height: 15,
  },
  registerButton: {
    width: 250,
    height: 45,
    backgroundColor: colors.button,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonEnabled: {
    opacity: 1,
  },
  registerButtonDisabled: {
    opacity: 0.5,
  },
  registerButtonLoading: {
    opacity: 0.7,
  },
  registerButtonText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    lineHeight: 20,
    color: colors.fontColor,
  },

  errorText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.xs,
    color: colors.warning,
    textAlign: 'center',
    marginBottom: 10,
  },
});