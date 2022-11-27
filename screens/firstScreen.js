
import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Text, SafeAreaView, Button, TouchableOpacity, Touchable } from "react-native";
import { StackActions } from '@react-navigation/native';

export default function FirstScreen() {
  const styles = StyleSheet.create({
    TextInputView: {
      borderBottomWidth: 1,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    TextInputText:{
      fontSize: 30,
    }
  })

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  return (
    <View
      style={{ 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
      }}  
    >
      <View style={styles.TextInputView}>
        <TextInput 
        ref={pin1Ref}
        keyboardType={'number-pad'}
        maxLength={1}
        value={pin1}
        onKeyPress={({ nativeEvent }) =>
          {
            if (nativeEvent.key === 'Backspace' && pin1 == "") {
          } else if (nativeEvent.key !== "Backspace") {
            pin2Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin1(newPin)
          }
        }
        style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput 
        ref={pin2Ref}
        keyboardType={'number-pad'}
        maxLength={1}
        value={pin2}
        onKeyPress={({ nativeEvent }) =>
          {
            if (nativeEvent.key === 'Backspace' && pin2 == "") {
              pin1Ref.current.focus();
            } else if (nativeEvent.key !== "Backspace") {
              pin3Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin2(newPin)
          }
        }
        style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput 
        ref={pin3Ref}
        keyboardType={'number-pad'}
        maxLength={1}
        value={pin3}
        onKeyPress={({ nativeEvent }) =>
          {
            if (nativeEvent.key === 'Backspace' && pin3 == "") {
              pin2Ref.current.focus();
            } else if (nativeEvent.key !== "Backspace") {
              pin4Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin3(newPin)
          }
        }
        style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput 
        ref={pin4Ref}
        keyboardType={'number-pad'}
        maxLength={1}
        value={pin4}
        onKeyPress={({ nativeEvent }) =>
          {
            if (nativeEvent.key === 'Backspace' && pin4 == "") {
              pin3Ref.current.focus();
            } else if (nativeEvent.key !== "Backspace") {
              pin5Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin4(newPin)
          }
        }
        style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput 
        ref={pin5Ref}
        keyboardType={'number-pad'}
        maxLength={1}
        value={pin5}
        onKeyPress={({ nativeEvent }) =>
          {
            if (nativeEvent.key === 'Backspace' && pin5 == "") {
              pin4Ref.current.focus();
            } else if (nativeEvent.key !== "Backspace") {
              pin5Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin5(newPin)
          }
        }
        style={styles.TextInputText}
        />
      </View>

      </View>
  )}