import React, { createContext, useState, useEffect, useContext } from 'React';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User{
  name: string;
  email: string; 
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
  loading: boolean;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      //PRA AGUARDAR UMA PROMISE
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;


        setUser(JSON.parse(storagedUser));
        setLoading(false)
      }
    }

    loadStoragedData();
  }, []);


  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    //armazenar os dados do usuario
    //localStorage
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);

  }
  // JWT (Stateless)
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}