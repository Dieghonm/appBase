import React, { useState } from 'react';
import { View, Image } from 'react-native';

import TermosBox from '../components/Login/Termos';
// import Login from '../components/Login/Login';
// import Cadastro from '../components/Login/Cadastro';
// import PaymentPlans from '../components/Login/PaymentPlans';
// import AlterarSenha from '../components/Login/AlterarSenha';
// import { useThemeColors } from '../styles/globalStyles';
// import { createStyles } from '../styles/LoginParts/LoginScreen';

export default function LoginScreen() {
  const [screen, setScreen] = useState('TERMOS');
  const colors = useThemeColors();
  const styles = createStyles(colors);

  const handleScreenChange = (newScreen) => {
    console.log('Mudando para tela:', newScreen);
    setScreen(newScreen);
  };

  const renderCurrentScreen = () => {
    const screenComponents = {
      'TERMOS': <TermosBox screen={handleScreenChange} />,
      // 'CADASTRO': <Cadastro screen={handleScreenChange} />,
      // 'LOGIN': <Login screen={handleScreenChange} />,
      // 'ALTERARSENHA': <AlterarSenha screen={handleScreenChange} />,
      // 'PAYMENT': <PaymentPlans screen={handleScreenChange} />
    };
    
    return screenComponents[screen] || screenComponents['TERMOS'];
  };

  // Telas que não devem mostrar o GIF
  const screensWithoutGif = [
    'CADASTRO', 
    // 'PAYMENT', 
    'ALTERARSENHA'
  ];

  return (
    <View style={styles.container}>
      {/* Gif rectangle */}
      {!screensWithoutGif.includes(screen) && (
        <View style={styles.gifContainer}>
          <Image
            source={require('../assets/chuva.gif')}
            style={styles.gifImage}
            resizeMode="cover"
          />
        </View>
      )}
      
      {renderCurrentScreen()}
    </View>
  );
}