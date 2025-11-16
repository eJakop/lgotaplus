
import { COLORS } from "@/constatns/ui";
import Logo from "@/layout/Logo";
import TitleText from "@/layout/TitleText";
import TouchableButton from "@/layout/TouchableButton";
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, View } from "react-native";

const handlePress = (message: string): void => {
  Alert.alert('Кнопка нажата', message);
};


export default function AuthScreen() {

  const navigation = useNavigation();
    const handleRegister = () => {
    navigation.navigate('RegisterScreen' as never);
  };

  return (
    <View style={styles.container}>
      {/*<StatusBar barStyle={"dark-content"}/>*/}
      <Logo/>
      <TitleText 
        title="ВАШ ПЕРСОНАЛЬНЫЙ ПОМОШНИК
В МИРЕ ЛЬГОТ"
        style={styles.Title}
        textStyle={styles.TitleText}
      />
      <TouchableButton 
      title="Вход"
       onPress={() => handlePress('Основная кнопка')}
      style={styles.LoginButton}
      textStyle={styles.LoginTitle}
      />
      <TouchableButton 
      title="Регистрация"

      onPress={handleRegister}
      style={styles.RegisterButton}
      textStyle={styles.RegisterTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR
  },
  Title:{
    marginBottom:150,
  },
  TitleText: {
    fontSize: 14,
    textAlign: 'center',
    color:  COLORS.SECONDARY_TEXT,
    fontFamily: 'Bahnschrift',
    fontWeight: 'regular',
  },
  LoginTitle: {
    fontSize: 24,
    fontWeight: 'regular',
    textAlign: 'center',
    color:  COLORS.MAIN_COLOR,
    fontFamily: 'Bahnschrift'
  },
  RegisterTitle: {
    fontSize: 24,
    fontWeight: 'regular',
    textAlign: 'center',
    color: COLORS.SECONDARY_TEXT
  },
  LoginButton: {
    backgroundColor: COLORS.PRIMERY_BACKGROUND,
    borderRadius: 20,
    alignSelf:'center',
    width:'75%'
  },
  RegisterButton: {
    backgroundColor: COLORS.MAIN_COLOR,
    borderColor: COLORS.PRIMERY_BACKGROUND,
    borderRadius: 20,
    alignSelf:'center',
    width:'75%',
    borderWidth: 2,
    marginTop:30,
    marginBottom:200,
    color: COLORS.SECONDERY_BUTTON,
  },
})
