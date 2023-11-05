import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Login = () => {
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [loading, setLoading] = React.useState(false);
   const auth = FIREBASE_AUTH;

  return (
    <View style={styles.container}>
       <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChange={(text) => setEmail(text)}></TextInput>
       <TextInput value={password} style={styles.input} placeholder='password' autoCapitalize='none' onChange={(text) => setPassword(text)}></TextInput>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: 'center',
   },
   input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
   }
});