
import { useState } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, TouchableOpacity, Touchable } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function FirstScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [firstName, lastName] =useState('');
    return (

      <SafeAreaView style={styles.container}>
      <Text>First and Last name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder='e.g. John Doe' />
        <Picker>
          <Picker.Item label="What is your Role?" value="0"></Picker.Item>
          <Picker.Item label="Student" value="10"></Picker.Item>
          <Picker.Item label="Parent" value="9"></Picker.Item>
          <Picker.Item label="Teacher" value="8"></Picker.Item>
          <Picker.Item label="Community" value="7"></Picker.Item>
        </Picker>

        <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

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