import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@eden_map:token';

class AuthService {
  async salvarToken(token) {
    console.log(token);
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
}

const authService = new AuthService();
export default authService;