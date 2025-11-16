import AuthScreen from '../app/screens/AuthScreen';
import RegisterScreen from '../app/screens/RegisterScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
   // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = "AuthScreen"
                component={AuthScreen}
                options={{title: 'Аутоидентификация', headerShown: false}}
                />

            <Stack.Screen
                name = "RegisterScreen"
                component={RegisterScreen}
                options={{title: 'Регистрация'}}
                />
        </Stack.Navigator>
  //  </NavigationContainer>
    )
}
