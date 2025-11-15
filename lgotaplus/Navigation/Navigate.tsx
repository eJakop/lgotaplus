import React from 'react';
import AuthScreen from '../app/screens/AuthScreen';
import RegisterScreen from '../app/screens/RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = "AuthScreen"
                component={AuthScreen}
                options={{title: 'Аутоидентификация'}}
                />

            <Stack.Screen
                name = "RegisterScreen"
                component={RegisterScreen}
                options={{title: 'Регистрация'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
