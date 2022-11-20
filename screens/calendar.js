import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  Alert,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import CalendarComponent from "../components/calendarComponent"
import DayDisplayComponent from "../components/dayDisplayComponent"

export default function Calendar({ route, navigation }) {
  const [date, setDate] = useState(["...", 0, 0, 0]);
  const [modalVisible, setModalVisible] = useState(true);

  
  return (
    <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <Text>Modal</Text>
          </Modal>
          <TouchableOpacity onPress={() => {
              setModalVisible(true);
          }}>
            <Text>Welcome Back {route.params.name}</Text>
          </TouchableOpacity>

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
