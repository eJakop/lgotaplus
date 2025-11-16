

import { COLORS } from "@/constatns/ui";
import { Alert, StyleSheet, View } from "react-native";

  const handlePress = (message: string): void => {
    Alert.alert('Кнопка нажата', message);
  };


export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: COLORS.PRIMERY_BACKGROUND,
    backgroundColor: COLORS.PRIMERY_BACKGROUND
  },
  Title:{
    marginBottom:150,
  },
  TitleText: {
    fontSize: 14,
    textAlign: 'center',
    color:  COLORS.PRIMERY_TEXT
  },
  LoginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:  COLORS.SECONDARY_TEXT,
  },
  AuthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMERY_TEXT
  },
  LoginButton: {
    backgroundColor: COLORS.PRIMERY_BUTTON,
    borderRadius: 20,
    alignSelf:'center',
    width:'50%'
  },
  AuthButton: {
    backgroundColor: COLORS.SECONDERY_BUTTON,
    borderColor: COLORS.PRIMERY_BUTTON,
    borderRadius: 20,
    alignSelf:'center',
    width:'50%',
    borderWidth: 2,
    marginTop:30,
    marginBottom:200,
    color: COLORS.SECONDERY_BUTTON
  },
})
