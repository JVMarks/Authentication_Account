import React from 'react';
import Signin from '../pages/Signin';

//usado para fazer uma navegação em pilha
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SingIn" component={Signin} />
  </AuthStack.Navigator>
);

export default AuthRoutes;