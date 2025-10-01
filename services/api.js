import config from '../config/api';
import authService from './authService';

const API_BASE_URL = config.API_BASE_URL;

class ApiService {
  async makeRequest(endpoint, options = {}) {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      const token = await authService.obterToken();
            
      const defaultOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (token && !options.skipAuth) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`;
      }

      const config = {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
      };

      const response = await fetch(url, config);
      let data;
      
      try {
        data = await response.json();
      } catch (e) {
        data = { message: await response.text() };
      }

      if (!response.ok) {
        const errorMessage = data.detail || data.message || `Erro HTTP: ${response.status}`;
        const error = new Error(errorMessage);
        error.response = { status: response.status, data };
        throw error;
      }
      
      if (response.access_token) {
        console.log(response.access_token, "response.access_token")
        await authService.salvarToken(response.access_token);
      }

      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  async cadastrarUsuario(dadosUsuario) {
    const payload = {
      login: dadosUsuario.login,
      senha: dadosUsuario.senha,
      email: dadosUsuario.email,
      tag: dadosUsuario.tag || 'cliente',
      plan: dadosUsuario.plan || 'trial',
    };

    return this.makeRequest('/cadastro', {
      method: 'POST',
      body: JSON.stringify(payload),
      skipAuth: true,
    });
  }

  async fazerLogin(emailOuLogin, senhaOuToken) {
    let payload = {}
    if (emailOuLogin){
      payload = {
        email_ou_login: emailOuLogin,
        senha: senhaOuToken,
      };
    }else{
      payload = {token : senhaOuToken}
    }
    const response = await this.makeRequest('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      skipAuth: true,
    });
    
    if (response.access_token) {
      await authService.salvarToken(response.access_token);
    }

    return response;
  }

  async buscarUsuarioAtual() {
    return this.makeRequest('/me', { method: 'GET' });
  }
}

const apiService = new ApiService();
export default apiService;