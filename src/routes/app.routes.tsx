import React from 'react';
import Dashboard from '../pages/Dashboard';

//usado para fazer uma navegação em pilha
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Dashboard" component={Dashboard} />
  </AuthStack.Navigator>
);

export default AppRoutes;