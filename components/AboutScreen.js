import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ABOUT SCREEN</Text>
      <Text>Esta é a página sobre nós</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Voltar para Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text>Ir para Contact</Text>
      </TouchableOpacity>
    </View>
  );
}