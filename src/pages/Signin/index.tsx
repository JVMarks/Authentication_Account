import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'}
})

const Signin: React.FC = () => {
  const {signed, user, signIn} = useAuth();

 async function handleSignIn(){
   signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  )
}

export default Signin;