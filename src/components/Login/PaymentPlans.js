import { ScrollView, Text } from "react-native-web";
import { styles } from "../../styles/LoginParts/PaymentPlans";






export default function PaymentPlans() {
  return (
    <ScrollView >
      <Text style={styles.cancelText}>
        Cancelamento de fácil acesso nas configurações
      </Text>
    </ScrollView>
  )
}
// export default function PaymentPlans() {
//   return (
//     <Text>PaymentPlans</Text>
//   )
// }