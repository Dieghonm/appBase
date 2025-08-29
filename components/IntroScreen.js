import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

export default function IntroScreen() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Aqui você implementaria a lógica de reprodução de áudio
  };

  const handleStartGuide = () => {
    // Navegação para a próxima tela
    console.log('Iniciar guia');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Conteúdo principal */}
      <View style={styles.content}>
        
        {/* Logo e título */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <View style={styles.logoVector1} />
            <View style={styles.logoVector2} />
          </View>
          
          <Text style={styles.title}>Introdução</Text>
          
          <Text style={styles.subtitle}>
            No Eden Map, sua jornada começa com um desejo profundo.
          </Text>
        </View>
        
        {/* Barra vermelha */}
        <View style={styles.redBar} />
        
        {/* Texto principal */}
        <Text style={styles.mainText}>
          Escute o áudio de <Text style={styles.highlightText}>3 min</Text>{'\n'}
          abaixo e descubra a{'\n'}
          <Text style={styles.highlightText}>melhor maneira de fazer{'\n'}
          seu desejo.</Text>
        </Text>
        
        {/* Player de áudio */}
        <TouchableOpacity 
          style={styles.audioPlayer}
          onPress={toggleAudio}
          activeOpacity={0.8}
        >
          <Text style={styles.audioTitle}>Tutorial - Desejo</Text>
          <View style={styles.playButton}>
            {isPlaying ? (
              <View style={styles.pauseIcon}>
                <View style={styles.pauseBar} />
                <View style={styles.pauseBar} />
              </View>
            ) : (
              <View></View>
              // <Ionicons name="play" size={24} color="#FFFFFF" />
            )}
          </View>
        </TouchableOpacity>
        
        {/* Texto de instrução */}
        <Text style={styles.instructionText}>
          Veja nossa introdução 3 passos, e{'\n'}
          entenda como funciona a plataforma.
        </Text>
        
        {/* Botão Iniciar Guia */}
        <TouchableOpacity 
          style={styles.startButton}
          onPress={handleStartGuide}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Iniciar guia</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#212224',
  // },
  // topBar: {
  //   width: '100%',
  //   height: 45,
  //   backgroundColor: '#FFFFFF',
  // },
  // content: {
  //   flex: 1,
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  // },
  // logoContainer: {
  //   alignItems: 'center',
  //   marginTop: 60,
  // },
  // logoIcon: {
  //   width: 50.52,
  //   height: 34.32,
  //   marginBottom: 20,
  //   position: 'relative',
  // },
  // logoVector1: {
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   width: '75.08%',
  //   height: '79.02%',
  //   backgroundColor: '#38C197',
  //   borderRadius: 2,
  // },
  // logoVector2: {
  //   position: 'absolute',
  //   right: 0,
  //   bottom: 0,
  //   width: '75.08%',
  //   height: '79.01%',
  //   backgroundColor: '#38C197',
  //   borderRadius: 2,
  // },
  // title: {
  //   fontFamily: 'Outfit-Bold',
  //   fontSize: 24,
  //   fontWeight: '700',
  //   lineHeight: 30,
  //   color: '#FFFFFF',
  //   marginBottom: 20,
  // },
  // subtitle: {
  //   fontFamily: 'Outfit-Medium',
  //   fontSize: 16,
  //   fontWeight: '500',
  //   lineHeight: 20,
  //   color: '#FFFFFF',
  //   textAlign: 'center',
  //   width: 238,
  // },
  // redBar: {
  //   width: 250,
  //   height: 5,
  //   backgroundColor: '#EA5959',
  //   marginTop: 30,
  //   marginBottom: 35,
  // },
  // mainText: {
  //   fontFamily: 'Outfit-Bold',
  //   fontSize: 24,
  //   fontWeight: '700',
  //   lineHeight: 30,
  //   color: '#FFFFFF',
  //   textAlign: 'center',
  //   width: 280,
  //   marginBottom: 50,
  // },
  // highlightText: {
  //   color: '#FFD700', // Dourado para destacar
  // },
  // audioPlayer: {
  //   width: 290,
  //   height: 65,
  //   backgroundColor: '#3A3A3A',
  //   borderRadius: 50,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  //   marginBottom: 30,
  // },
  // audioTitle: {
  //   fontFamily: 'Outfit-Bold',
  //   fontSize: 20,
  //   fontWeight: '700',
  //   lineHeight: 25,
  //   color: '#FFFFFF',
  // },
  // playButton: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#38C197',
  //   borderRadius: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // pauseIcon: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   width: 15,
  //   height: 20,
  // },
  // pauseBar: {
  //   width: 5,
  //   height: 20,
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 1,
  // },
  // instructionText: {
  //   fontFamily: 'Outfit-Medium',
  //   fontSize: 16,
  //   fontWeight: '500',
  //   lineHeight: 20,
  //   color: '#FFFFFF',
  //   textAlign: 'center',
  //   width: 270,
  //   marginBottom: 30,
  // },
  // startButton: {
  //   width: 218,
  //   height: 40,
  //   backgroundColor: '#0A84FF',
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 'auto',
  //   marginBottom: 40,
  // },
  // startButtonText: {
  //   fontFamily: 'Outfit-Bold',
  //   fontSize: 16,
  //   fontWeight: '700',
  //   lineHeight: 20,
  //   color: '#FFFFFF',
  // },
});
