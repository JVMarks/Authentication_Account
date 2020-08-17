import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//devemos colocar os componentes dentro de ROUTES
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <AuthProvider />
      <Routes />
    </NavigationContainer>
  )
}
export default App;