import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
  Touchable,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import * as ImagePicker from "expo-image-picker";

export default function AbsenceScreen({ navigation, onRequestClose, date, children }) {
    const [count, setCount] = useState(0);
    function submitAbsence() {
        console.log("submit absence")
    }
  return (
    <View>
        <Text>Absence Scheduler</Text>
        <Text>{date[2][0]}/{date[1]}/{date[3]}</Text>
        <Text>Select Child</Text>
        {children.map((child, i) => 
            <Text key={i}>{child.name}</Text>
        )}
        <Button onPress={() => submitAbsence()} title="submit absence"/>
    </View>
  );
}
