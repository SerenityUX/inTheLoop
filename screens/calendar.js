import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import CalendarComponent from "../components/calendarComponent"
import DayDisplayComponent from "../components/dayDisplayComponent"

export default function Calendar({ route, navigation }) {
  const [date, setDate] = useState(["...", 0, 0, 0]);


  
  return (
    <SafeAreaView style={styles.container}>
          <Text>Welcome Back {route.params.name}</Text>
          <Text>As a {route.params.role}, your id is {route.params.id}</Text>
          <CalendarComponent setDate={setDate}/>
          <DayDisplayComponent date={date}/>
          <StatusBar style="auto" />        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
});
