import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getMonths } from "../calendarFunctions";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text>Self-guided Hacking Journey!</Text>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


{/*       <Text>{getMonths(2020)[1].name}</Text>
      <Text>{getMonths(2024)[1].numDays}</Text> */}