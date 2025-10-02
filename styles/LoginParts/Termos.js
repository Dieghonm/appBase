const createStyles = (colors) =>
  StyleSheet.create({
    logoContainer: {
      marginTop: 110,
      marginBottom: 6,
      alignItems: 'center',
    },
    logo: {
      width: 50.52,
      height: 34.32,
    },
    welcomeTitle: {
      fontFamily: font.family,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xxl,
      lineHeight: 30,
      color: colors.fontColor,
      textAlign: 'center',
    },
    welcomeSubtitle: {
      fontFamily: font.family,
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
      width: 140,
      height: 48,
      borderRadius: 8,
      backgroundColor: colors.secondary,
    },
    modeselectAlt: {
      backgroundColor: colors.terciario,
    },
    modeselectActive: {
      borderWidth: 2,
      borderColor: colors.button,
    },
    modeText: {
      color: colors.fontColor,
      fontSize: 18,
      marginLeft: 8,
    },
    termsContainer: {
      marginVertical: 20,
    },
    termsButton: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: borderRadius.md,
      borderWidth: 2,
      borderColor: colors.fontColor,
      marginRight: 8,
    },
    checkboxChecked: {
      backgroundColor: colors.button,
    },
    termsText: {
      color: colors.fontColor,
      fontSize: fontSize.sm,
    },
    linkText: {
      textDecorationLine: 'underline',
    },
    warning: {
      color: colors.warning,
      fontSize: fontSize.xs,
    },
    createAccountButton: {
      backgroundColor: colors.button,
      padding: 12,
      borderRadius: borderRadius.md,
      marginVertical: 10,
      alignItems: 'center',
    },
    createAccountText: {
      color: colors.fontColor,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.md,
    },
    loginButton: {
      backgroundColor: colors.terciario,
      padding: 12,
      borderRadius: borderRadius.md,
      alignItems: 'center',
    },
    loginText: {
      color: colors.fontColor,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.md,
    },
    buttonDisabled: {
      opacity: 0.5,
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
})