import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_KEY = '@app:server_mode';

// Configurações disponíveis
const configs = {
  local: {
    API_BASE_URL: 'http://localhost:8000',
    name: 'Local Development'
  },
  render: {
    API_BASE_URL: 'https://backbase-s7zo.onrender.com',
    name: 'Render Production'
  }
};

// Função para obter a configuração atual
const getCurrentConfig = async () => {
  try {
    const serverMode = await AsyncStorage.getItem(SERVER_KEY);
    const mode = serverMode || 'render'; // Padrão: render
    
    const config = configs[mode];
    
    console.log(`📡 Servidor ativo: ${config.name}`);
    console.log(`🔗 URL: ${config.API_BASE_URL}`);
    
    return config;
  } catch (error) {
    console.error('Erro ao obter config:', error);
    return configs.render; // Fallback para render
  }
};

// Exportar função assíncrona
export const getApiConfig = getCurrentConfig;

// Exportar configuração padrão (render) para compatibilidade
export default configs.render;