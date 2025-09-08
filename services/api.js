// Configuração da API
import config from '../config/api';
const API_BASE_URL = config.API_BASE_URL;

class ApiService {
  // Método base para fazer requisições
  async makeRequest(endpoint, options = {}) {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      
      const defaultOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const config = {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
      };

      console.log('Fazendo requisição para:', url);
      console.log('Configurações:', config);

      const response = await fetch(url, config);
      const data = await response.json();

      console.log('Resposta da API:', data);

      if (!response.ok) {
        throw new Error(data.detail || `Erro HTTP: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  // Cadastrar usuário
  async cadastrarUsuario(dadosUsuario) {
    return this.makeRequest('/cadastro', {
      method: 'POST',
      body: JSON.stringify(dadosUsuario),
    });
  }

  // Fazer login
  async fazerLogin(emailOuLogin, senha) {
    return this.makeRequest('/login', {
      method: 'POST',
      body: JSON.stringify({
        email_ou_login: emailOuLogin,
        senha: senha,
      }),
    });
  }

  // Listar usuários
  async listarUsuarios() {
    return this.makeRequest('/usuarios');
  }

  // Buscar usuário por ID
  async buscarUsuario(id) {
    return this.makeRequest(`/usuarios/${id}`);
  }

  // Health check
  async healthCheck() {
    return this.makeRequest('/health');
  }

  // Teste de conexão
  async testarConexao() {
    return this.makeRequest('/');
  }
}

// Instância única do serviço
const apiService = new ApiService();

export default apiService;