import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@eden_map:token';
const MODE_KEY = '@eden_map:theme';

class AuthService {
  async salvarToken(token) {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
      return true;
    } catch (error) {
      console.error('Erro ao salvar token:', error);
      return false;
    }
  }

  async obterToken() {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      return token;
    } catch (error) {
      console.error('Erro ao obter token:', error);
      return null;
    }
  }

  async salvarTema(mode) {
    try {
      await AsyncStorage.setItem(MODE_KEY, mode);
    } catch (error) {
      console.error('Erro ao salvar tema:', error);
    }
  }

  async obterTema() {
    try {
      const mode = await AsyncStorage.getItem(MODE_KEY);
      return mode;
    } catch (error) {
      console.error('Erro ao obter tema:', error);
      return 'dark';
    }
  }
}

const authService = new AuthService();
export default authService;
