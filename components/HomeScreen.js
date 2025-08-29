import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>LOGIN SCREEN</Text>
      <Text>Bem-vindo ao app!</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>Ir para About</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text>Ir para Contact</Text>
      </TouchableOpacity>
    </View>
  );
}