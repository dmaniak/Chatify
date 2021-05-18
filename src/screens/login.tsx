import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import DefaultButton from '../shared/button';

/**
 * Login Screen.
 * Logo and welcome Text. Contains 2 Buttons which lead to either the registration
 * of a new account or to log in of an existing one.
 * @returns
 */
function Login() {
  console.log("Button pressed");
}
function LoginScreen() {
  const x = () => {
    console.log('hallo');
  };

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.title} >
        Chatify
      </Text>

      <Text style={styles.text} >
        Welcome to Chatify, in order to start chating
        you are required to log in to your account.
      </Text>

      <DefaultButton text='login' onPress={Login}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Style for the whole container
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Style for the logo or title text
  title: {
    textAlign: 'center',
    fontSize: 60,
    color: '#fff',

  },

  //Style for the text
  text: {
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 17,
    color: '#fff',
  },
});

export default LoginScreen;
