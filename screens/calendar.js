import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import CalendarComponent from "../components/calendarComponent"

export default function Calendar({ route, navigation }) {
  const [date, setDate] = useState(["...", 0, 0, 0]);


  
  return (
    <SafeAreaView style={styles.container}>
          <Text>Welcome Back {route.params.name}</Text>
          <Text>As a {route.params.role}, your id is {route.params.id}</Text>
          <CalendarComponent setDate={setDate}/>
          <Text>{date[0]}, {date[1]}/{date[2][0]}/{date[3]}</Text>
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
