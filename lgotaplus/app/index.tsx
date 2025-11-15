

import { COLORS } from "@/constatns/ui";
import Logo from "@/layout/Logo";
import TouchableButton from "@/layout/TouchableButton";
import { Alert, StyleSheet, View } from "react-native";

  const handlePress = (message: string): void => {
    Alert.alert('Кнопка нажата', message);
  };


export default function Index() {
  return (
    <View style={styles.container}>
      {/*<StatusBar barStyle={"dark-content"}/>*/}
      <Logo />
      <TouchableButton 
      title="Вход"
      onPress={() => handlePress('Основная кнопка')}
      style={styles.LoginButton}
      textStyle={styles.title}
      />

      <TouchableButton 
      title="Регистрация"
      onPress={() => handlePress('Основная кнопка')}
      style={styles.AuthButton}
      textStyle={styles.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: COLORS.PRIMERY_BACKGROUND,
    backgroundColor: COLORS.PRIMERY_BACKGROUND
  },

 title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffffff',
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
    width:'50%'
  },
})
