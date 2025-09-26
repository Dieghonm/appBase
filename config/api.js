// Configurações de ambiente
const config = {
  development: {
    API_BASE_URL: 'http://localhost:8000', // Seu backend FastAPI local
  },
  staging: {
    API_BASE_URL: 'https://your-staging-api.onrender.com',
  },
  production: {
    API_BASE_URL: 'https://backbase-api.onrender.com', // Manter o mesmo
  }
};

// Detectar o ambiente automaticamente
const getEnvironment = () => {
  // Para desenvolvimento local
  if (__DEV__) {
    return 'development';
  }
  
  // Para produção
  return 'production';
};

const currentConfig = config[getEnvironment()];

console.log('Ambiente atual:', getEnvironment());
console.log('URL da API:', currentConfig.API_BASE_URL);

export default currentConfig;