
export default function PaymentPlans() {
  return (
    <Text>PaymentPlans</Text>
  )
}

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import { styles } from '../../styles/LoginParts/PaymentPlans';

// const { width, height } = Dimensions.get('window');

// export default function PaymentPlans ({ navigation }) {
//   const [selectedPlan, setSelectedPlan] = useState('3meses');

//   const handleTesteGratuito = () => {
//     console.log('Teste gratuito iniciado');
//     // Lógica para iniciar teste gratuito
//   };

//   const selectPlan = (plan) => {
//     setSelectedPlan(plan);
//   };

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//       <View style={styles.logoContainerLogin}>
//         <Image
//           source={require('../../assets/Logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         {/* Título principal */}
//         <Text style={styles.mainTitle}>Primeiros 14 dias grátis</Text>
//       </View>

//       {/* Lista de benefícios */}
//       <View style={styles.benefitsContainer}>
//         <View style={styles.benefitItem}>
//           <Image
//             source={require('../../assets/icones/Check.png')}
//             style={styles.checkIcon}
//           />
//           <Text style={styles.benefitText}>
//             Ative seu potencial oculto com exercícios de visualização poderosos
//           </Text>
//         </View>
        
//         <View style={styles.benefitItem}>
//           <Image
//             source={require('../../assets/icones/Check.png')}
//             style={styles.checkIcon}
//           />
//           <Text style={styles.benefitText}>
//             Acesse seu subconsciente e quebre velhos padrões.
//           </Text>
//         </View>
        
//         <View style={styles.benefitItem}>
//           <Image
//             source={require('../../assets/icones/Check.png')}
//             style={styles.checkIcon}
//           />
//           <Text style={styles.benefitText}>
//             Manifeste seus desejos com um método totalmente inédito, direto do futuro.
//           </Text>
//         </View>
//       </View>

//       {/* Planos */}
//       <View style={styles.plansContainer}>
//         {/* Plano 6 Meses */}
//         <TouchableOpacity 
//           style={[
//             styles.planCard, 
//             styles.planOrange,
//             selectedPlan === '6meses' && styles.selectedPlan
//           ]}
//           onPress={() => selectPlan('6meses')}
//         >
//           <Text style={[styles.planTitle, styles.planTitleOrange]}>6 Meses</Text>
//           <Text style={styles.planPrice}>R$xx,xx/ano - R$xx,xx/mês</Text>
//         </TouchableOpacity>

//         {/* Plano 3 Meses - Selecionado por padrão */}
//         <TouchableOpacity 
//           style={[
//             styles.planCard, 
//             styles.planGreen, 
//             selectedPlan === '3meses' && styles.selectedPlan
//           ]}
//           onPress={() => selectPlan('3meses')}
//         >
//           <Text style={[styles.planTitle, styles.planTitleGreen]}>3 Meses</Text>
//           <Text style={styles.planPrice}>R$xx,xx/3 meses - R$xx,xx/mês</Text>
//         </TouchableOpacity>

//         {/* Plano Mensal */}
//         <TouchableOpacity 
//           style={[
//             styles.planCard, 
//             styles.planRed,
//             selectedPlan === 'mensal' && styles.selectedPlan
//           ]}
//           onPress={() => selectPlan('mensal')}
//         >
//           <Text style={[styles.planTitle, styles.planTitleRed]}>Mensal</Text>
//           <Text style={styles.planPrice}>R$xx,xx/mês</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Botão Teste Gratuito */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleTesteGratuito}
//         activeOpacity={0.8}
//       >
//         <Text style={styles.buttonText}>Teste gratuitamente</Text>
//       </TouchableOpacity>

//       {/* Texto de cancelamento */}
//       <Text style={styles.cancelText}>
//         Cancelamento de fácil acesso nas configurações
//       </Text>
//     </ScrollView>
//   );
// };