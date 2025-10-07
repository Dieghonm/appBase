import { StyleSheet } from 'react-native';

export const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    position: 'relative',
  },
  gifContainer: {
    width: '100%',
    maxWidth: 800,
    height: 300,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    width: '100%',
    height: '100%',
  },
});