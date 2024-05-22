{/* 

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/app';
import Area from './components/areaCliente'; 
import { AreaParams } from './src/types';

// Definindo os tipos de rota
type RootStackParamList = {
  Login: undefined;
  Area: AreaParams;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Area" component={Area} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/} 
