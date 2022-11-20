
import { useState } from "react";
import { StyleSheet, TextInput, View, Text, SafeAreaView, Button, TouchableOpacity, Touchable } from "react-native";
import { StackActions } from '@react-navigation/native';


export default function FirstScreen({ navigation }) {

  const [name, onNameChange] = useState(null);
  const [id, onIdChange] = useState(null);
  const [role, onRole] = useState(null);

  return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text>First and Last name:</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={onNameChange}
          value={name}
          placeholder='e.g. John Doe' />
      </View>
      <View>
        <Text>ID Teachers, Students, or Parents</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={onIdChange}
          value={id}
          placeholder='12345' 
          keyboardType="numeric"
          />
      </View>
      <Button title="to calendar as community member" onPress={() => navigation.dispatch(
        StackActions.replace("Calendar", {
        name: name,
        id: id,
        role: "community member"
      }))}/>

      </SafeAreaView>
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