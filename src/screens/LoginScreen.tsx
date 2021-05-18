import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';
import DefaultButton from '../shared/button';

/**
 * Login Screen.
 * Logo and welcome Text. Contains 2 Buttons which lead to either the registration
 * of a new account or to log in of an existing one.
 * @returns
 */

function LoginScreen() {
  const [uname, onChangeUname] = React.useState('');
  const onLogin = (): void => {
    console.log('Hello, ' + uname);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChangeUname} placeholder="Username" value={uname} />

      <DefaultButton text="Login" onPress={onLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Style for the whole container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Style for the logo or title text
  title: {
    textAlign: 'center',
    fontSize: 60,
    color: '#000',
  },

  //Style for the text
  text: {
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 17,
    color: '#000',
  },

  input: {
    borderRadius: 15,
    borderColor: '#000',
  },
});

export default LoginScreen;
