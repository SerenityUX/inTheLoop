import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Alert,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import CalendarComponent from "../components/calendarComponent"
import DayDisplayComponent from "../components/dayDisplayComponent"
import ModalScreen from "../screens/modalScreen"

import AbsenceScreen from "../screens/planAbsence"

export default function Calendar({ route, navigation }) {
  const [date, setDate] = useState(["...", 0, 0, 0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [absencesVisible, setAbsentVisible] = useState(false);

  const [modalData, setModalData] = useState({});

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
    <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <SafeAreaView>
            <ModalScreen event={modalData} onRequestClose={() => setModalVisible(!modalVisible)} />
            </SafeAreaView>
          </Modal>

          <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={absencesVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setAbsentVisible(!absencesVisible);
          }}>
            <SafeAreaView>
            <AbsenceScreen date={date} onRequestClose={() => setAbsentVisible(!absencesVisible)} />
            </SafeAreaView>
          </Modal>

            <Text style={{fontSize: "22px", fontWeight: "600", marginLeft: 16, marginRight: 16, marginTop: 16, marginBottom: 4}}>Welcome Back, {route.params.name}</Text>

          {/* <Text>As a {route.params.role}, your id is {route.params.id}</Text> */}
          <CalendarComponent setDate={setDate}/>
          <DayDisplayComponent setModalVisible={setModalVisible} setAbsentVisible={setAbsentVisible} setModalData={setModalData} date={date}/>
          <StatusBar style="auto" />        
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
});
