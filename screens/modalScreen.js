
import { useState } from "react";
import { StyleSheet, TextInput, View, Text, SafeAreaView, Button, TouchableOpacity, Touchable } from "react-native";
import { StackActions } from '@react-navigation/native';


export default function ModalScreen({ navigation, onRequestClose }) {
  return (
        <Text onPress={onRequestClose}>In the Modal View</Text>
     );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});