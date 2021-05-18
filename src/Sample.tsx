import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

function Sample() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Chatify</Text>

      <Text style={styles.text}>Welcome to Chatify, in order to start chating you are required to log in to your account.</Text>
    </SafeAreaView>
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
});

export default Sample;
