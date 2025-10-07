import { StyleSheet } from 'react-native';
import { borderRadius, colors, font, fontSize, fontWeight } from '../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 80
  },  
  logoContainerLogin: {
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
  },
  logo: {
    width: 50.52,
    height: 34.32,
    margin: 5
  },
  // // // Título principal
  mainTitle: {
    // width: 255,
    height: 30,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.xxl,
    lineHeight: 30,
    color: colors.fontColor,
  },
  // Container dos benefícios
  benefitsContainer: {
    width: 320,
    alignSelf: 'center',
    marginTop: 30,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  checkIcon: {
    width: 15.37,
    height: 15,
    marginRight: 17.42,
    marginTop: 8,
  },
  benefitText: {
    flex: 1,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.md,
    lineHeight: 18,
    color: colors.fontColor,
  },

  // // Container dos planos
  plansContainer: {
    width: 320,
    alignSelf: 'center',
    marginTop: 15,
  },
  planCard: {
    width: 320,
    height: 65,
    backgroundColor: colors.secondary,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  planOrange: {
    borderColor: colors.alert,
  },
  planGreen: {
    borderColor: colors.sucess,

  },
  planRed: {
    borderColor: colors.warning,
  },
  planTitle: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    lineHeight: 20,
    marginBottom: 5,
  },
  planTitleOrange: {
    color: colors.alert,
  },
  planTitleGreen: {
    color: colors.sucess,
  },
  planTitleRed: {
    color: colors.warning,
  },
  planPrice: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    lineHeight: 18,
    color: colors.fontColor,
  },
  // // Botão principal
  button: {
    width: 240,
    height: 45,
    backgroundColor: colors.button,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    lineHeight: 20,
    color: colors.fontColor,
  },
  // Texto de cancelamento
  cancelText: {
    width: 300,
    alignSelf: 'center',
    marginTop: 30,
    fontFamily: font.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.xs,
    lineHeight: 15,
    textAlign: 'center',
    color: colors.fontColor,
  },
});

