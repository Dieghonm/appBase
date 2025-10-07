import React, { useState } from 'react';
import { View, Image } from 'react-native';

import { createStyles } from '../styles/LoginParts/LoginScreen';
import { useThemeColors } from '../styles/globalStyles';

import TermsBox from '../components/Login/Terms';
import Register from '../components/Login/Register';
import SignIn from '../components/Login/SignIn';
import ChangePassword from '../components/Login/ChangePassword';
import PaymentPlans from '../components/Login/PaymentPlans';

export default function LoginScreen() {
  const [currentScreen, setCurrentScreen] = useState('TERMS');
  const colors = useThemeColors();
  const styles = createStyles(colors);

  const handleScreenChange = (newScreen) => {
    console.log('Switching to screen:', newScreen);
    setCurrentScreen(newScreen);
  };

  const renderCurrentScreen = () => {
    const screenComponents = {
      TERMS: <TermsBox onChangeScreen={handleScreenChange} />,
      REGISTER: <Register onChangeScreen={handleScreenChange} />,
      SIGNIN: <SignIn onChangeScreen={handleScreenChange} />,
      CHANGEPASSWORD: <ChangePassword onChangeScreen={handleScreenChange} />,
      PLANS: <PaymentPlans onChangeScreen={handleScreenChange} />,
    };

    return screenComponents[currentScreen] || screenComponents.TERMS;
  };

  const screensWithoutGif = ['REGISTER', 'CHANGEPASSWORD', 'PLANS'];

  return (
    <View style={styles.container}>
      {!screensWithoutGif.includes(currentScreen) && (
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
