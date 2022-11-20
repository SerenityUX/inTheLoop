
import { useState } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, Button, TouchableOpacity, Touchable } from "react-native";


export default function FirstScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [firstName, lastName] =useState('');
    return (
      <SafeAreaView style={styles.container}>
      <Button title="to calendar" onPress={() => navigation.navigate("Calendar")}/>
      <Text>First and Last name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder='e.g. John Doe' />

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