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
      
      let data;
      try {
        data = await response.json();
      } catch (e) {
        // Se não conseguir fazer parse do JSON, usar texto
        data = { message: await response.text() };
      }

      console.log('Resposta da API:', data);

      if (!response.ok) {
        // Ajustar para o formato do seu backend FastAPI
        const errorMessage = data.detail || data.message || `Erro HTTP: ${response.status}`;
        const error = new Error(errorMessage);
        error.response = { status: response.status, data };
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  // Cadastrar usuário - ajustado para seu backend
  async cadastrarUsuario(dadosUsuario) {
    // Mapear os campos para o formato do seu backend
    const payload = {
      login: dadosUsuario.login,
      senha: dadosUsuario.senha,
      email: dadosUsuario.email,
      tag: dadosUsuario.tag || 'cliente',
      plan: dadosUsuario.plan || null,
    };

    return this.makeRequest('/cadastro', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Fazer login - ajustado para seu backend
  async fazerLogin(emailOuLogin, senha) {
    const payload = {
      email_ou_login: emailOuLogin,
      senha: senha,
    };

    return this.makeRequest('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Buscar dados do usuário atual (com token)
  async buscarUsuarioAtual(token) {
    return this.makeRequest('/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  // Listar usuários (para admins)
  async listarUsuarios(token) {
    return this.makeRequest('/usuarios', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  // Buscar usuário por ID
  async buscarUsuario(id, token) {
    return this.makeRequest(`/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
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