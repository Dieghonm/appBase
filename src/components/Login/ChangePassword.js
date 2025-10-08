export default function ChangePassword() {
  return (
    <Text>ChangePassword</Text>
  )
}

// import React, { useState } from 'react';
// import {
//   View,
//   Image,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import { createStyles } from '../../styles/LoginParts/AlterarSenha';
// import { useThemeColors } from '../../styles/globalStyles';

// const { width, height } = Dimensions.get('window');

// export default function AlterarSenha({ navigation }) {
//   const [novaSenha, setNovaSenha] = useState('');
//   const [confirmarSenha, setConfirmarSenha] = useState('');
//   const [mostrarSenha, setMostrarSenha] = useState(false);

//   const colors = useThemeColors();
//   const styles = createStyles(colors);

//   const handleAlterarSenha = () => {
//     console.log('Nova senha:', novaSenha);
//     console.log('Confirmar senha:', confirmarSenha);
    
//     // Verificar se as senhas coincidem
//     if (novaSenha !== confirmarSenha) {
//       console.log('Senhas não coincidem');
//       return;
//     }
    
//     // Verificar se a senha atende aos critérios
//     if (novaSenha.length < 8 || novaSenha.length > 32) {
//       console.log('Senha deve ter entre 8 e 32 caracteres');
//       return;
//     }
    
//     // Aqui você pode adicionar mais validações conforme as regras
    
//     // Navegar de volta para o login após alterar a senha
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Card de regras */}
//       <View style={styles.rulesCard}>
//         <View style={styles.rulesHeader}>
//           <Text style={styles.rulesTitle}>Regras usuário e senha</Text>
//           <View style={styles.alertIcon}>
//             <Text style={styles.alertIconText}>❗</Text>
//           </View>
//         </View>
        
//         <Text style={styles.rulesText}>
//           Usuário:{'\n'}
//           • entre 4 - 20 caracteres
//         </Text>
        
//         <Text style={styles.rulesText}>
//           Senha:{'\n'}
//           • entre 8 - 32 caracteres{'\n'}
//           • use letras maiúsculas e minúsculas, números, e sem espaçamentos
//         </Text>
//       </View>

//       {/* Logo */}
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../../assets/Logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Título */}
//       <Text style={styles.title}>Altere sua senha</Text>
      
//       {/* Subtítulo */}
//       <Text style={styles.subtitle}>
//         Escolha uma nova senha com base nas regras acima.
//       </Text>

//       {/* Container do formulário */}
//       <View style={styles.formContainer}>
//         {/* Input Nova Senha */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Nova senha"
//             placeholderTextColor={colors.terciario}
//             value={novaSenha}
//             onChangeText={setNovaSenha}
//             secureTextEntry={!mostrarSenha}
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//         </View>

//         {/* Input Confirmar Senha */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Confirme a senha"
//             placeholderTextColor={colors.terciario}
//             value={confirmarSenha}
//             onChangeText={setConfirmarSenha}
//             secureTextEntry={!mostrarSenha}
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//           <TouchableOpacity
//             style={styles.eyeIcon}
//             onPress={() => setMostrarSenha(!mostrarSenha)}
//             activeOpacity={0.7}
//           >
//             <Image
//               source={mostrarSenha ? require('../../assets/eye.png') : require('../../assets/eye-off.png')}
//               style={styles.eyeIconImage}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Botão Alterar Senha */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleAlterarSenha}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.buttonText}>Alterar Senha</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }