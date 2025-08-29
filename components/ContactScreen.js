import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>CONTACT SCREEN</Text>
      <Text>Entre em contato conosco</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Voltar para Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>Ir para About</Text>
      </TouchableOpacity>
    </View>
  );
}
