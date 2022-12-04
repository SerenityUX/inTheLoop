
import { useState, useEffect, useRef } from "react";
import { StyleSheet, TextInput, View, Text, Alert, SafeAreaView, Button, TouchableOpacity, Touchable } from "react-native";
import { StackActions } from '@react-navigation/native';
import loginFunction from "../api"

export default function FirstScreen( {navigation} ) {

  const [switched, setSwitched] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    pin1Ref.current.focus();
  }, []);
  useEffect(() => {
    // Update the document title using the browser API
    if (pin.length == 5 && switched == false) {
      login()
      setSwitched(true)
    }
  });
  const styles = StyleSheet.create({
    TextInputView: {
      borderBottomWidth: 1,
      width: 50,
      margin: 8,
      marginBottom: 40,
      marginTop:40,
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
  const [auth, setAuth] = useState("");
  

  const pin = [pin1, pin2, pin3, pin4, pin5].join("");

  function login() {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/users/${pin}`).then((result) =>
    {
      result.json().then((jsoned) => { 
        setAuth(jsoned)
        if(jsoned.name != null) {
          navigation.dispatch(
            StackActions.replace("Calendar", {
            name: jsoned.name,
            id: jsoned.id,
            role: jsoned.id,
            children: jsoned?.children,
            absences: jsoned?.absences,
          }))
        }
<<<<<<< HEAD
        if (jsoned.message == "Not Found") {

        }
        console.log(jsoned.message)
=======

        if (jsoned.message == "Not Found.") {
          setPin1("")
          setPin2("")
          setPin3("")
          setPin4("")
          setPin5("")
          pin1Ref.current.focus();
          Alert.alert(
            "ID Not Found",
            "Please enter your Dorman ID",
            [
              {
                text: "Try Again",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
          );
        } 
>>>>>>> d3a5dac (current)
      }).catch((error) => {
        console.log(error)
      })
    })

  }
  return (
    <SafeAreaView
      style={{ 
        flex: 1, 
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fff"
      }}  
    >
<View
    >
<Text style={{
  fontWeight:"600",
  fontSize: 48,
  marginBottom: 16,
  marginTop: 16,
  marginRight: 16,
  marginLeft: 16
}}>In The Loop</Text>
<Text style={{
  fontWeight:"150",
  fontSize: 20,
  marginLeft: 16,
  opacity: 0.50,
  marginRight: 16
}}>An ID is your personalized 5 digit code given by your school. if you do not know your ID number then please contact the school</Text>
</View>

<View 
      style={{
        alignItems: "center",
        flexDirection: "row",
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
            if (nativeEvent.key === 'Backspace') {
          } else if (nativeEvent.key !== "Backspace") {
            pin2Ref.current.focus();
          }
        }
        }
        onChangeText={(newPin) => 
          {
            setPin1(newPin)
            setSwitched(false)
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
            if (nativeEvent.key === 'Backspace') {
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
            if (nativeEvent.key === 'Backspace') {
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
            if (nativeEvent.key === 'Backspace') {
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
            if (nativeEvent.key === 'Backspace') {
              pin4Ref.current.focus();
            } else if (nativeEvent.key !== "Backspace") {
              pin5Ref.current.focus()
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
      <Button disabled={pin1 == "" || pin2 == "" || pin3 == "" || pin4 == "" || pin5 == ""} title={auth.name || "Login"} onPress={() =>  
        {
          login()
/*         navigation.dispatch(
        StackActions.replace("Calendar", {
        name: "Thomas",
        id: "23487",
        role: "student"
      })) */
    }
      }/>

      </SafeAreaView>
  )}