import { StyleSheet } from 'react-native';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';

// Hook para carregar as fontes - coloque isso no seu App.js
export const useOutfitFonts = () => {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
  });
  return fontsLoaded;
};

// Cores globais
export const colors = {
  background: '#212224', // app
  secondary: '#3A3A3A', // background secundary
  terciario: '#606060', // background mais claro

  white: '#FFFFFF', // text
  red: '#EA5959', // text error warning 
  yellow: '#FFAA2E', // text link warning
  green: '#38C197',

  blue: '#0A84FF',  // button

  // black: '#000000',
  // primary: '#007AFF',
  // text: { },
  // border: '#E5E5EA',
  // error: '#FF3B30',
  // warning: '#FF9500',
  // success: '#34C759',
};

// Dimensões globais
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
  xl: 16,
  circle: 50,
};

export const font = {
  fontFamily: 'Outfit_400Regular',
}

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

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

// // Estilos globais reutilizáveis
// export const globalStyles = StyleSheet.create({
//   // Containers
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
  
//   centeredContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.background,
//     paddingHorizontal: spacing.md,
//   },
  
//   screenContainer: {
//     flex: 1,
//     backgroundColor: colors.background,
//     padding: spacing.md,
//   },
  
//   // Textos
//   title: {
//     fontSize: fontSize.title,
//     fontWeight: 'bold',
//     color: colors.text.primary,
//     textAlign: 'center',
//     marginBottom: spacing.lg,
//   },
  
//   subtitle: {
//     fontSize: fontSize.lg,
//     fontWeight: '600',
//     color: colors.text.primary,
//     marginBottom: spacing.md,
//   },
  
//   bodyText: {
//     fontSize: fontSize.md,
//     color: colors.text.primary,
//     lineHeight: 24,
//   },
  
//   caption: {
//     fontSize: fontSize.sm,
//     color: colors.text.secondary,
//   },
  
//   // Botões
//   button: {
//     backgroundColor: colors.primary,
//     paddingHorizontal: spacing.lg,
//     paddingVertical: spacing.md,
//     borderRadius: borderRadius.md,
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: 48,
//   },
  
//   buttonText: {
//     color: colors.text.white,
//     fontSize: fontSize.md,
//     fontWeight: '600',
//   },
  
//   buttonSecondary: {
//     backgroundColor: colors.white,
//     borderWidth: 1,
//     borderColor: colors.primary,
//     paddingHorizontal: spacing.lg,
//     paddingVertical: spacing.md,
//     borderRadius: borderRadius.md,
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: 48,
//   },
  
//   buttonSecondaryText: {
//     color: colors.primary,
//     fontSize: fontSize.md,
//     fontWeight: '600',
//   },
  
//   // Inputs
//   input: {
//     backgroundColor: colors.white,
//     borderWidth: 1,
//     borderColor: colors.border,
//     borderRadius: borderRadius.md,
//     paddingHorizontal: spacing.md,
//     paddingVertical: spacing.md,
//     fontSize: fontSize.md,
//     color: colors.text.primary,
//     minHeight: 48,
//   },
  
//   inputFocused: {
//     borderColor: colors.primary,
//     borderWidth: 2,
//   },
  
//   // Cards
//   card: {
//     backgroundColor: colors.white,
//     borderRadius: borderRadius.lg,
//     padding: spacing.md,
//     marginVertical: spacing.sm,
//     shadowColor: colors.black,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
  
//   // Divisores
//   divider: {
//     height: 1,
//     backgroundColor: colors.border,
//     marginVertical: spacing.md,
//   },
  
//   // Sombras
//   shadow: {
//     shadowColor: colors.black,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
  
//   // Margens e Paddings
//   marginTop: {
//     marginTop: spacing.md,
//   },
  
//   marginBottom: {
//     marginBottom: spacing.md,
//   },
  
//   paddingHorizontal: {
//     paddingHorizontal: spacing.md,
//   },
  
//   paddingVertical: {
//     paddingVertical: spacing.md,
//   },
  
//   // Flexbox helpers
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
  
//   spaceBetween: {
//     justifyContent: 'space-between',
//   },
  
//   center: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
//   // Estados
//   disabled: {
//     opacity: 0.5,
//   },
  
//   hidden: {
//     display: 'none',
//   },
// });

// // Função para criar estilos dinâmicos
// export const createDynamicStyles = (theme) => {
//   return {
//     container: {
//       backgroundColor: theme === 'dark' ? colors.black : colors.background,
//     },
//     text: {
//       color: theme === 'dark' ? colors.white : colors.text.primary,
//     },
//   };
// };