import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from "react-native";

export default function FirstScreen({ navigation }) {

  return (
    <SafeAreaView>
      <Button title="to calendar" onPress={() => navigation.dispatch('Calendar')} />
      <Text>Empty box for Deet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});