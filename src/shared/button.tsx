import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';

//export default function DefaultButton(text:string, onPress:()=>void) {
export default function DefaultButton({text, onPress}) {
  return(
    // The Basis for Buttons
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#484848',
  },

  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
